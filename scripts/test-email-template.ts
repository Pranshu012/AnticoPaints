import {
  generateEnquiryEmailHtml,
  generateEnquiryEmailText,
  normalizePhoneForWhatsApp,
  formatPhoneForDisplay,
  escapeHtml,
} from "../src/lib/emailTemplates";
import * as fs from "fs";
import * as path from "path";

console.log("=== RUNNING EMAIL TEMPLATE VERIFICATION SUITE ===\n");

let passed = 0;
let failed = 0;

function assert(condition: boolean, desc: string) {
  if (condition) {
    console.log(`  ✓ PASS: ${desc}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${desc}`);
    failed++;
  }
}

// ----------------------------------------------------------------------
// Test 1: Phone Normalization for WhatsApp
// ----------------------------------------------------------------------
console.log("Test Suite 1: Phone & WhatsApp Normalization");
assert(normalizePhoneForWhatsApp("9876543210") === "919876543210", "10-digit adds 91 prefix");
assert(normalizePhoneForWhatsApp("09876543210") === "919876543210", "11-digit with leading 0 strips 0 and adds 91");
assert(normalizePhoneForWhatsApp("+91 98765 43210") === "919876543210", "+91 with spaces normalized to 919876543210");
assert(normalizePhoneForWhatsApp("123") === null, "Short invalid number returns null");

// ----------------------------------------------------------------------
// Test 2: HTML Escaping
// ----------------------------------------------------------------------
console.log("\nTest Suite 2: HTML Injection Prevention");
const unsafeInput = `<script>alert('hack')</script> & "luxury" 'walls' <img src=x onerror=alert(1)>`;
const escaped = escapeHtml(unsafeInput);
assert(!escaped.includes("<script>"), "No raw script tags");
assert(!escaped.includes("<img"), "No raw img tags");
assert(escaped.includes("&lt;script&gt;"), "Tags converted to entities");
assert(escaped.includes("&amp;"), "Ampersand converted to &amp;");

// ----------------------------------------------------------------------
// Test 3: Standard Contact Form (All fields provided)
// ----------------------------------------------------------------------
console.log("\nTest Suite 3: Standard Contact Form Rendering");
const sampleContact = {
  formType: "general_contact" as const,
  fullName: "Arjun Verma",
  mobileNumber: "+91 98765 43210",
  email: "arjun.verma@example.com",
  enquiryType: "Venetian Plaster Sample & Quotation",
  message: "We are designing a 5,000 sq ft luxury villa in Jaipur. We require samples of your Venetian Plaster and Aura Luxury Emulsion along with technical specifications.",
  consent: true,
};

const htmlFull = generateEnquiryEmailHtml(sampleContact, {
  submittedAt: new Date("2026-11-11T18:00:00Z"),
});
const textFull = generateEnquiryEmailText(sampleContact, {
  submittedAt: new Date("2026-11-11T18:00:00Z"),
});

assert(htmlFull.includes("ANTICO PAINTS"), "Contains company brand name");
assert(htmlFull.includes("New Enquiry Received"), "Contains status indicator");
assert(htmlFull.includes("You&rsquo;ve received a new enquiry!"), "Contains main heading");
assert(htmlFull.includes("Someone has submitted the contact form"), "Contains supporting text");
assert(htmlFull.includes("Arjun Verma"), "Contains customer name");
assert(htmlFull.includes("arjun.verma@example.com"), "Contains email address");
assert(htmlFull.includes("mailto:arjun.verma@example.com"), "Contains reply mailto link");
assert(htmlFull.includes("tel:919876543210") || htmlFull.includes("tel:+919876543210"), "Contains click-to-call link");
assert(htmlFull.includes("https://wa.me/919876543210"), "Contains WhatsApp link");
assert(htmlFull.includes("max-width: 600px"), "Email width constrained to 600px");
assert(htmlFull.includes("<!DOCTYPE html"), "Has XHTML doctype");
assert(!htmlFull.includes("undefined"), "Does not contain undefined anywhere in HTML");
assert(!htmlFull.includes("null"), "Does not contain null anywhere in HTML");

// Plain text assertions
assert(textFull.includes("ANTICO PAINTS - NEW ENQUIRY RECEIVED"), "Text has header banner");
assert(textFull.includes("Arjun Verma"), "Text contains customer name");
assert(textFull.includes("QUICK ACTIONS:"), "Text contains quick actions");

// ----------------------------------------------------------------------
// Test 4: Missing Optional Fields (No email, no message)
// ----------------------------------------------------------------------
console.log("\nTest Suite 4: Missing Optional Fields Graceful Handling");
const minimalContact = {
  formType: "general_contact" as const,
  fullName: "Rohit Sharma",
  mobileNumber: "9811223344",
  message: "",
  consent: true,
};

const htmlMinimal = generateEnquiryEmailHtml(minimalContact);
const textMinimal = generateEnquiryEmailText(minimalContact);

assert(!htmlMinimal.includes("Email Address"), "Omitted Email Address field label when email is missing");
assert(!htmlMinimal.includes("Reply by Email"), "Omitted Reply by Email action button when email is missing");
assert(!htmlMinimal.includes("undefined"), "No undefined text");
assert(!htmlMinimal.includes("null"), "No null text");
assert(htmlMinimal.includes("Rohit Sharma"), "Customer name present");
assert(htmlMinimal.includes("Call Customer"), "Call action still present");
assert(htmlMinimal.includes("WhatsApp"), "WhatsApp action still present");

// ----------------------------------------------------------------------
// Test 5: Dealership Application Rendering
// ----------------------------------------------------------------------
console.log("\nTest Suite 5: Dealership Application Rendering");
const sampleDealer = {
  formType: "dealer_application" as const,
  fullName: "Vikram Singhania",
  mobileNumber: "09823456789",
  email: "vikram@singhaniapaints.in",
  businessName: "Singhania Building Materials & Hardware",
  businessType: "Existing paint retailer",
  city: "Udaipur",
  pincode: "313001",
  message: "We currently sell Asian Paints and Berger. Interested in exclusive Antico texture counter.",
  consent: true,
};

const htmlDealer = generateEnquiryEmailHtml(sampleDealer);
const textDealer = generateEnquiryEmailText(sampleDealer);

assert(htmlDealer.includes("Dealership Application"), "Shows Dealership Application type");
assert(htmlDealer.includes("Udaipur"), "Includes dealer city");
assert(htmlDealer.includes("313001"), "Includes dealer pincode");
assert(htmlDealer.includes("Singhania Building Materials"), "Includes firm name");
assert(htmlDealer.includes("Existing paint retailer"), "Includes business profile");
assert(htmlDealer.includes("https://wa.me/919823456789"), "Correctly stripped leading 0 and generated WhatsApp link");

// ----------------------------------------------------------------------
// Test 6: Extreme Content & Long Strings Wrapping
// ----------------------------------------------------------------------
console.log("\nTest Suite 6: Long Words & Message Wrapping");
const longMessagePayload = {
  formType: "general_contact" as const,
  fullName: "Dr. Christopher Montgomery-Wellington III",
  mobileNumber: "9876543210",
  email: "verylongsupercalifragilisticexpialidocious_inquiry@organization-architectural-conglomerate.co.in",
  message: "Line1: Paragraph test\nLine2: Special characters & < > \" ' test\nLine3: SuperLongUnbrokenWordTest" + "A".repeat(80),
  consent: true,
};

const htmlLong = generateEnquiryEmailHtml(longMessagePayload);
assert(htmlLong.includes("word-break: break-word"), "Has word-break for message");
assert(htmlLong.includes("word-break: break-all"), "Has word-break for long email");
assert(htmlLong.includes("&lt; &gt; &quot; &#039;"), "Escaped special characters in body");
assert(htmlLong.includes("<br>"), "Preserves line breaks with <br>");

// Save sample output files for inspection
const outDir = path.resolve(__dirname, "../out-test");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, "email-contact-full.html"), htmlFull);
fs.writeFileSync(path.join(outDir, "email-contact-full.txt"), textFull);
fs.writeFileSync(path.join(outDir, "email-contact-minimal.html"), htmlMinimal);
fs.writeFileSync(path.join(outDir, "email-dealer.html"), htmlDealer);
fs.writeFileSync(path.join(outDir, "email-long.html"), htmlLong);

console.log(`\nSample rendered HTML & plain-text templates written to: ${outDir}`);

console.log(`\n=== TEST RESULTS: ${passed} passed, ${failed} failed ===`);
if (failed > 0) {
  process.exit(1);
} else {
  console.log("All email template tests passed flawlessly!\n");
}

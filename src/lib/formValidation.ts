/**
 * Comprehensive Form Guardrails & Validations for Antico Paints
 * Enforces sanitization, length limits, Indian phone & PIN formats, and anti-spam controls.
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates customer or applicant full name
 */
export function validateFullName(name: string): ValidationResult {
  const trimmed = name.trim();
  if (!trimmed) {
    return { isValid: false, error: "Please enter your full name." };
  }
  if (trimmed.length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters long." };
  }
  if (trimmed.length > 80) {
    return { isValid: false, error: "Name cannot exceed 80 characters." };
  }
  // Allow letters, spaces, dots, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s.'-]+$/;
  if (!nameRegex.test(trimmed)) {
    return {
      isValid: false,
      error: "Please enter a valid name using letters and spaces.",
    };
  }
  return { isValid: true };
}

/**
 * Validates Indian mobile number with prefix [6-9] and length constraints
 */
export function validateMobileNumber(phone: string): ValidationResult {
  const trimmed = phone.trim();
  if (!trimmed) {
    return { isValid: false, error: "Please enter your mobile number." };
  }

  // Extract numeric digits
  const digits = trimmed.replace(/\D/g, "");

  // 10-digit Indian mobile
  if (digits.length === 10) {
    if (!/^[6-9]/.test(digits)) {
      return {
        isValid: false,
        error: "Indian mobile numbers must start with 6, 7, 8, or 9.",
      };
    }
  } else if (digits.length === 11 && digits.startsWith("0")) {
    if (!/^0[6-9]/.test(digits)) {
      return {
        isValid: false,
        error: "Mobile number starting with 0 must be followed by 6, 7, 8, or 9.",
      };
    }
  } else if (digits.length === 12 && digits.startsWith("91")) {
    if (!/^91[6-9]/.test(digits)) {
      return {
        isValid: false,
        error: "Mobile number with +91 country code must start with 6, 7, 8, or 9.",
      };
    }
  } else {
    return {
      isValid: false,
      error: "Please enter a valid 10-digit mobile number.",
    };
  }

  // Reject all repetitive dummy numbers like 0000000000, 1111111111, 9999999999
  const last10 = digits.slice(-10);
  if (/^(\d)\1{9}$/.test(last10)) {
    return {
      isValid: false,
      error: "Please enter a genuine, active mobile number.",
    };
  }

  // Sequential dummy test: 1234567890 or 9876543210
  if (last10 === "1234567890" || last10 === "0123456789") {
    return {
      isValid: false,
      error: "Please enter a valid personal mobile number.",
    };
  }

  return { isValid: true };
}

/**
 * Validates email address format if provided (optional in Antico forms)
 */
export function validateEmail(email?: string): ValidationResult {
  if (!email || !email.trim()) {
    return { isValid: true };
  }
  const trimmed = email.trim();
  if (trimmed.length > 100) {
    return { isValid: false, error: "Email cannot exceed 100 characters." };
  }
  // Standard RFC-5322 compliant email regex checking domain and TLD >= 2
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return {
      isValid: false,
      error: "Please enter a valid email address (e.g. name@example.com).",
    };
  }
  return { isValid: true };
}

/**
 * Validates message content (min length 10, max length 1000)
 */
export function validateMessage(
  message: string,
  isRequired: boolean = true
): ValidationResult {
  const trimmed = message.trim();
  if (!trimmed) {
    if (isRequired) {
      return { isValid: false, error: "Please enter your message." };
    }
    return { isValid: true };
  }
  if (trimmed.length < 10) {
    return {
      isValid: false,
      error: "Please share a few more details (minimum 10 characters).",
    };
  }
  if (trimmed.length > 1000) {
    return {
      isValid: false,
      error: "Message cannot exceed 1,000 characters.",
    };
  }
  return { isValid: true };
}

/**
 * Validates city or town name
 */
export function validateCity(city: string): ValidationResult {
  const trimmed = city.trim();
  if (!trimmed) {
    return { isValid: false, error: "Please enter your city or town." };
  }
  if (trimmed.length < 2) {
    return { isValid: false, error: "City name must be at least 2 characters." };
  }
  if (trimmed.length > 60) {
    return { isValid: false, error: "City name cannot exceed 60 characters." };
  }
  if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
    return {
      isValid: false,
      error: "Please enter a valid city name using letters.",
    };
  }
  return { isValid: true };
}

/**
 * Validates 6-digit Indian PIN code (100000 - 999999, cannot start with 0)
 */
export function validatePincode(pincode: string): ValidationResult {
  const trimmed = pincode.trim();
  if (!trimmed) {
    return { isValid: false, error: "Please enter your 6-digit PIN code." };
  }
  const digits = trimmed.replace(/\D/g, "");
  if (!/^[1-9]\d{5}$/.test(digits)) {
    return {
      isValid: false,
      error: "Please enter a valid 6-digit Indian PIN code (cannot start with 0).",
    };
  }
  return { isValid: true };
}

/**
 * Validates business or shop name if provided
 */
export function validateBusinessName(name?: string): ValidationResult {
  if (!name || !name.trim()) return { isValid: true };
  const trimmed = name.trim();
  if (trimmed.length < 2) {
    return { isValid: false, error: "Business name must be at least 2 characters." };
  }
  if (trimmed.length > 100) {
    return { isValid: false, error: "Business name cannot exceed 100 characters." };
  }
  return { isValid: true };
}

/**
 * Client-side submission rate limiting cooldown (prevent rapid spamming)
 */
const LAST_SUBMIT_KEY = "antico_last_form_submit_timestamp";
const COOLDOWN_SECONDS = 15;

export function checkSubmissionCooldown(): { allowed: boolean; remainingSeconds: number } {
  if (typeof window === "undefined") return { allowed: true, remainingSeconds: 0 };
  try {
    const last = sessionStorage.getItem(LAST_SUBMIT_KEY);
    if (!last) return { allowed: true, remainingSeconds: 0 };
    const elapsed = Math.floor((Date.now() - parseInt(last, 10)) / 1000);
    if (elapsed < COOLDOWN_SECONDS) {
      return { allowed: false, remainingSeconds: COOLDOWN_SECONDS - elapsed };
    }
  } catch {
    // Ignore storage errors
  }
  return { allowed: true, remainingSeconds: 0 };
}

export function recordSubmissionSuccess(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(LAST_SUBMIT_KEY, Date.now().toString());
  } catch {
    // Ignore storage errors
  }
}

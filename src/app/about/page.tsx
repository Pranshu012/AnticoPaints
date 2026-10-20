import React from "react";
import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Antico Paints",
  description:
    "Good products start with good listening. Learn about Antico Paints' mission, customer commitment, and dedication to understanding needs and building trust.",
};

export default function AboutPage() {
  return <AboutClient />;
}

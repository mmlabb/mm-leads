"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined")
      window.location.href = "/onboarding/lead";
  }, []);
  return null;
}

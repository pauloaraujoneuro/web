// =================================================================
// ANALYTICS CONFIGURATION
// =================================================================
export const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "";

// Analytics feature flags
export const ANALYTICS_ENABLED =
  process.env.NODE_ENV === "production" ||
  process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";

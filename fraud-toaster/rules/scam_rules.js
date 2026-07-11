export const SCAM_RULES = [
  {
    category: "Phishing",
    keywords: [
      "verify your account",
      "account suspended",
      "confirm your identity",
      "login required",
    ],
    score: 25,
    finding: "Attempts to obtain account credentials",
  },

  {
    category: "Gift Card Scam",
    keywords: ["gift card", "redeem", "balance"],
    score: 30,
    finding: "Mentions gift cards",
  },
];

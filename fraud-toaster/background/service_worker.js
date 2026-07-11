import { SCAM_RULES } from "../rules/scam_rules.js";

function analyzePage(pageData) {
  let score = 0;
  let findings = [];
  let categories = [];

  const content = (pageData.title + " " + pageData.text).toLowerCase();

  SCAM_RULES.forEach((rule) => {
    const matched = rule.keywords.some((keyword) =>
      content.includes(keyword.toLowerCase()),
    );

    if (matched) {
      score += rule.score;
      findings.push(rule.finding);

      if (!categories.includes(rule.category)) {
        categories.push(rule.category);
      }
    }
  });

  return {
    score,
    findings,
    categories,
  };
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "PAGE_DATA") {
    const result = analyzePage(message.data);
    console.log("Result:", result);

    console.log("Page Title:", message.data.title);
    console.log("URL:", message.data.url);
    console.log("Risk Score:", result.score);
    console.log("Findings:", result.findings);
    console.log("Content:", message.data.text);
    console.log(SCAM_RULES);

    chrome.storage.local.set({
      scamResult: {
        score: result.score,
        findings: result.findings,
        categories: result.categories,
        title: message.data.title,
        url: message.data.url,
      },
    });
  }
});

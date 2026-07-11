chrome.storage.local.get("scamResult", (data) => {
  if (!data.scamResult) {
    document.getElementById("score").textContent = "No scan available.";

    return;
  }

  document.getElementById("score").textContent =
    "Risk Score: " + data.scamResult.score;

  const findingsList = document.getElementById("findings");

  const categoriesList = document.getElementById("categories");

  data.scamResult.categories.forEach((category) => {
    const item = document.createElement("li");

    item.textContent = category;

    categoriesList.appendChild(item);
  });

  data.scamResult.findings.forEach((finding) => {
    const item = document.createElement("li");

    item.textContent = finding;

    findingsList.appendChild(item);
  });
});

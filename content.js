function applyFiltering(enabled) {
  if (!enabled) return;

  const selectorsToRemove = [
    ".ltr-fhxb3m",
    ".ltr-1jjjg2j",
    ".ltr-1q3zhvu.billboard-game-metadata",
    ".hero-image-wrapper",
    ".mobile-billboard.billboard-originals.billboard-pane.billboard",
    ".billboard-row-games.billboard-row",
    ".billboard-row" // Always remove ALL billboard rows
  ];

  const removeElements = () => {
    selectorsToRemove.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  };

  removeElements();
  const observer = new MutationObserver(removeElements);
  observer.observe(document.body, { childList: true, subtree: true });
}

chrome.storage.local.get("enabled", ({ enabled = true }) => {
  applyFiltering(enabled);
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "FILTER_TOGGLE") {
    chrome.storage.local.get("enabled", ({ enabled }) => {
      applyFiltering(enabled);
    });
  }
});

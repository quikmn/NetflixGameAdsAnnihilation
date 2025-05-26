chrome.storage.local.get("enabled", (data) => {
  if (!data.enabled) return;

  const selectorsToRemove = [
    ".ltr-fhxb3m",
    ".ltr-1jjjg2j",
    ".ltr-1q3zhvu.billboard-game-metadata",
    ".hero-image-wrapper",
    ".mobile-billboard.billboard-originals.billboard-pane.billboard",
    ".billboard-row-games.billboard-row"
  ];

  function removeElements(selectors) {
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  }

  removeElements(selectorsToRemove);
  const observer = new MutationObserver(() => removeElements(selectorsToRemove));
  observer.observe(document.body, { childList: true, subtree: true });
});

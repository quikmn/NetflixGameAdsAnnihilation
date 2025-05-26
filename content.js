chrome.storage.local.get(["enabled", "maxClean"], (data) => {
  if (!data.enabled) return;

  const selectorsToRemove = [
    ".ltr-fhxb3m",
    ".ltr-1jjjg2j",
    ".ltr-1q3zhvu.billboard-game-metadata",
    ".hero-image-wrapper",
    ".mobile-billboard.billboard-originals.billboard-pane.billboard",
    ".billboard-row-games.billboard-row"
  ];

  // Add full nuking if Max Clean is enabled
  if (data.maxClean) {
    selectorsToRemove.push(".billboard-row");
  } else {
    selectorsToRemove.push(".billboard-row.billboard-row--hero");
  }

  function removeElements() {
    selectorsToRemove.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  }

  removeElements();

  const observer = new MutationObserver(removeElements);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

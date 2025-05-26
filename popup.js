const toggle = document.getElementById("toggle");

chrome.storage.local.get("enabled", (data) => {
  toggle.checked = data.enabled ?? true;
});

toggle.addEventListener("change", async () => {
  await chrome.storage.local.set({ enabled: toggle.checked });

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab?.id) {
    chrome.tabs.sendMessage(tab.id, { type: "FILTER_TOGGLE" });
  }
});

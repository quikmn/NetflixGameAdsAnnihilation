const toggle = document.getElementById("toggle");
const maxClean = document.getElementById("maxClean");

chrome.storage.local.get(["enabled", "maxClean"], (data) => {
  toggle.checked = data.enabled ?? true;
  maxClean.checked = data.maxClean ?? false;
});

toggle.addEventListener("change", () => {
  chrome.storage.local.set({ enabled: toggle.checked });
  chrome.runtime.reload();
});

maxClean.addEventListener("change", () => {
  chrome.storage.local.set({ maxClean: maxClean.checked });
  chrome.runtime.reload();
});

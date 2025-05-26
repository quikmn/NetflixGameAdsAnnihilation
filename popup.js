const toggle = document.getElementById("toggle");

chrome.storage.local.get("enabled", (data) => {
  toggle.checked = data.enabled ?? true;
});

toggle.addEventListener("change", () => {
  chrome.storage.local.set({ enabled: toggle.checked });
  chrome.runtime.reload(); // reload to re-evaluate content.js and DNR rules
});

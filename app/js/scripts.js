var tabs = document.querySelectorAll("nav a");

function makeAllTabsInactive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}

function setActiveTabAccordingToHash(currentHash) {
  makeAllTabsInactive();
  var tabToActivate = document.querySelector(`a[href="#${currentHash}"]`);
  tabToActivate.classList.add("active");
}

function setPageAccordingToHash() {
  var currentHash = window.location.hash.substring(1);
  setActiveTabAccordingToHash(currentHash);
}

window.addEventListener("hashchange", setPageAccordingToHash);

initializePage();

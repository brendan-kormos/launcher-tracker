/* exported data */

const LOCAL_STORAGE_KEY = 'ajax_project_1';

let data = {
  view: 'home-container',
  singleEntry: null,
  saves: {},
  cachedIDs: [],
  cachedExtendedInfo:[],
  offset: 0,
  limit: 15,
  scrollPositions: {
    'home-container': 0,
    'single-entry-container': 0,
    'saves-container': 0,
  },
};

function saveScrollPosition() {
  const verticalScrollPosition = window.scrollY || window.pageYOffset;
  data.scrollPositions[data.view] = verticalScrollPosition;
}
const oldData = localStorage.getItem(LOCAL_STORAGE_KEY);
if (oldData) {
  const parsedOldData = JSON.parse(oldData);
  if (parsedOldData.cachedExtendedInfo !== undefined) {
    // only load data if new feature is present
    data = parsedOldData;
  }
}

window.addEventListener('unload', function (event) {
  saveScrollPosition();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
});

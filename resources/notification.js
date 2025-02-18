const notificationQueue = [];

function notification(t) {
  notificationQueue.push(t);
  if (notificationQueue.length === 1) {
    showNextNotification();
  }
}

function showNextNotification() {
  if (notificationQueue.length > 0) {
    const t = notificationQueue[0];
    const i = document.getElementById("notification");
    document.getElementById("notification-content").textContent = t;
    i.classList.add("show");
    setTimeout(function () {
      closeNotification();
    }, 1000);
  }
}

function closeNotification() {
  document.getElementById("notification").classList.remove("show");
  notificationQueue.shift();
  setTimeout(function () {
    if (notificationQueue.length > 0) {
      showNextNotification();
    }
  }, 500);
}

(function (Md) {
  function Ix(Mo, oM) {
    return this;
  }

  function Xi(oM, Mo) {
    var Om = () => ((Mo + 32) >> oM, oM - 23 - Mo, oM >> Mo);
    return Om();
  }
})([
  "location",
  "includes",
  "window",
  "name",
  "CTX",
  "is",
  "href",
  ["youtube.com", "youtube.com", "youtube.com", "youtube.com", "youtube.com"],
  "hostname",
  "window",
  "https://",
]);

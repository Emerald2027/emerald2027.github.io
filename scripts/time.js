function updateTime() {
  const now = new Date();
  document.querySelectorAll(".time").forEach((el) => {
    el.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
    });
  });
}

updateTime();
setInterval(updateTime, 1000);

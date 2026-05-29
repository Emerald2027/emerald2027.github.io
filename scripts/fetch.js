fetch("/data/status.json")
  .then((res) => res.json())
  .then((data) => {
    document.querySelectorAll(".status-content").forEach((el) => {
      el.innerHTML = `
        ${data.date}</li>
        ${data.status}</li>
      `;
    });
  });

fetch("/data/changelog.json")
  .then((res) => res.json())
  .then((data) => {
    document.querySelectorAll(".changelog-content").forEach((el) => {
      el.innerHTML = data
        .map((entry) => `<li>${entry.date} ${entry.note}</li>`)
        .join("");
    });
  });

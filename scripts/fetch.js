fetch("/data/status.json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("status-content").innerHTML = `
      ${data.date}</li>
      ${data.status}</li>
      `;
  });

fetch("/data/changelog.json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("changelog-content").innerHTML = data
      .map((entry) => `<li>${entry.date} ${entry.note}</li>`)
      .join("");
  });

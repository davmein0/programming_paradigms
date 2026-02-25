let prayers = JSON.parse(localStorage.getItem("prayers")) || [];

function addPrayer() {
  // Get text from text boxes
  const title = document.getElementById("title");
  const message = document.getElementById("message");
  const dedicated = document.getElementById("dedicated");

  // Prayer object: includes a title, message (actual prayer), and
  // who the prayer is dedicated to
  const prayer = {
    title: title.value,
    message: message.value,
    dedicated: dedicated.value ?? "",
  };

  // Check for valid input: title and message must be non-empty
  if (!prayer.title || !prayer.message) {
    alert("Please enter a prayer before you submit.");
    return;
  }

  // Add prayer to prayers array, update local storage.
  prayers.push(prayer);
  localStorage.setItem("prayers", JSON.stringify(prayers));
}

function showPrayer() {
  const dailyPrayer = document.getElementById("dailyPrayer");
  // If no prayers:
  if (prayers.length === 0) {
    dailyPrayer.innerHTML = "<p>No prayers added yet.</p>";
    return;
  }
  console.log(prayers);
  // Prayer depends on the day of the month, switches each day.
  let date = new Date();
  let day = date.getDate();
  let prayer = prayers[day % prayers.length];

  dailyPrayer.innerHTML = `
      <div class="prayer-card">
      <br>
        <h3>Title: ${prayer.title}</h3>
        <p>${prayer.message}</p>
        <p id="dedicated">Dedicated to: ${prayer.dedicated}</p>
      </div>
    `;
}

showPrayer();

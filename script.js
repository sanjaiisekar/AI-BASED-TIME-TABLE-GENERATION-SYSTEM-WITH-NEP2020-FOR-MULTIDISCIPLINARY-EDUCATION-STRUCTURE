function generateTimetable() {
  const department = document.getElementById("department").value.trim();
  const semester = document.getElementById("semester").value.trim();
  const subjectText = document.getElementById("subjects").value.trim();
  const output = document.getElementById("output");

  if (!department || !semester || !subjectText) {
    output.innerHTML = "<p>Please fill all fields.</p>";
    return;
  }

  const subjects = subjectText.split(",").map(s => s.trim()).filter(s => s.length > 0);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const slots = ["9-10", "10-11", "11-12", "1-2", "2-3"];

  let table = `<h3>${department} - Semester ${semester}</h3>`;
  table += `<table><tr><th>Day</th><th>9-10</th><th>10-11</th><th>11-12</th><th>1-2</th><th>2-3</th></tr>`;

  for (let i = 0; i < days.length; i++) {
    table += `<tr><td><b>${days[i]}</b></td>`;
    for (let j = 0; j < slots.length; j++) {
      const subject = subjects[(i + j) % subjects.length];
      table += `<td>${subject}</td>`;
    }
    table += `</tr>`;
  }

  table += `</table>`;
  table += `<p><b>Note:</b> This is a demo timetable generated using simple logic for your mini project.</p>`;
  output.innerHTML = table;
}

function clearTable() {
  document.getElementById("department").value = "";
  document.getElementById("semester").value = "";
  document.getElementById("subjects").value = "";
  document.getElementById("output").innerHTML = "";
}
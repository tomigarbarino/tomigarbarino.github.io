const today = new Date().toISOString().split("T")[0];
const myYear = "2000";
const myMonth = "10";
const myDay = "22";
const currentYear = today.split("").splice(0, 4).join("");
const currentMonth = today.split("").splice(5, 2).join("");
const currentDay = today.split("").splice(8, 2).join("");

const myAge = (currentYear, myYear) => {
  if (currentMonth <= myMonth && currentDay <= myDay) {
    return currentYear - myYear - 1;
  } else {
    return currentYear - myYear;
  }
};

document.getElementById("age").innerText = myAge(currentYear, myYear);
document.getElementById("year").innerText = currentYear;

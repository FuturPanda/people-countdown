let howMany = 0
const buttonAdd = document.getElementById("new-count");
buttonAdd.addEventListener('click', addNewElement);
const buttonReset = document.getElementById("reset");
buttonReset.addEventListener('click', resetAllElements);
const buttonSave = document.getElementById("save");
buttonSave.addEventListener('click', saveCount)
let savedCount = []
let savedDisplay = document.getElementById("saved-count");

function addNewElement() {
  howMany += 1;
  document.getElementById("count-el").innerText = howMany;
}

function resetAllElements() {
  howMany = 0;
  document.getElementById("count-el").innerText = howMany;
}

function saveCount() {
  savedCount.push(howMany);
  savedDisplay.textContent = savedCount;
}
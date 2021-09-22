let nameField = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"]; // Создаем localStorage для проверки 
// let obj = {};
// obj.firstPlayer = { name: `Serhii`, color: "white" }
// obj.secondPlayer = { name: `Slava`, color: "black" }
// let name = JSON.stringify(obj)
// localStorage.setItem("players", name);
// Удаляем localStorage для проверки 
// localStorage.removeItem("players")

let modal = function () {
  console.log("Yes");
};

let creationField = function () {
  console.log("No");
};

(function (modal, creationField) {
  if (localStorage.getItem('players') !== null) {
    modal();
  } else {
    creationField();
  }
})(modal, creationField);
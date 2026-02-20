let type = document.getElementById("type");
let button = document.getElementById("btn");
let list = document.querySelector(".list");
// 1️⃣ LocalStorage-тан алу (parse)
let todos = JSON.parse(localStorage.getItem("myList")) || [];
// 2️⃣ Экранға шығару
for (let i = 0; i < todos.length; i++) {
  let box = document.createElement("div");
  box.innerHTML = `
    <div class="line">
      <p class="written">${todos[i]}</p>
      <div class="ino">
        <label class="check-btn">
          <input type="checkbox" class="ch">
          <span class="box"></span>
        </label>
        <button class="deleteBtn">X</button>
      </div>
    </div>
  `;
  list.appendChild(box);
}
// 3️⃣ Қосу
button.addEventListener("click", function () {
  todos.push(type.value); // массивке қосу
  localStorage.setItem("myList", JSON.stringify(todos)); // stringify
  location.reload(); // бетті қайта жүктеу
});

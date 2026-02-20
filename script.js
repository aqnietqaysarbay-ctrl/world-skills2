let type = document.getElementById("type");
let button = document.getElementById("btn");
let list = document.querySelector(".list");

let todos = JSON.parse(localStorage.getItem("myList")) || [];
button.addEventListener("click", function () {
  let box = document.createElement("div");
  box.innerHTML = `
    <div class="line">
      <p class="written">${type.value}</p>
      <div class="ino">
        <label class="check-btn">
          <input type="checkbox" class="ch">
          <span class="under"></span>
        </label>
        <button class="deleteBtn">X</button>
      </div>
    </div>
  `;
  list.appendChild(box);
  localStorage.setItem("myList", JSON.stringify(todos));
  type.value = "";
});
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("under")) {
    let p = event.target.closest(".line").querySelector(".written");
    p.classList.toggle("un");
    localStorage.setItem("myList", JSON.stringify(todos));
  }
});

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.closest(".line").remove();
    localStorage.setItem("myList", JSON.stringify(todos));
  }
});

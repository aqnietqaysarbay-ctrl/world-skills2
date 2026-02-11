let type = document.getElementById("type");
let button = document.getElementById("btn");
button.addEventListener("click", function () {
  let box = document.createElement("div");
  box.innerHTML = ` <div class="list">
        <div class="line">
          <p id="plan">${type.value}</p>
          <div class="ino">
           <label class="check-btn">
  <input type="checkbox" class="ch">
  <span class="box"></span>
</label>
            <button class="deleteBtn">X</button>
          </div>
        </div>
      </div>
    `;
  document.querySelector(".list").appendChild(box);
  type.value = "";

  let check = box.querySelector(".ch");
  check.addEventListener("click", function () {
    let p = box.querySelector("p");
    p.classList.toggle("done");
  });

  let del = box.querySelector(".deleteBtn");
  del.addEventListener("click", function () {
    box.remove();
  });
});

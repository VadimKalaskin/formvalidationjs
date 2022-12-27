const form = document.getElementById("form");
const button = document.getElementById("submit");
const allInputs = document.querySelectorAll("input");

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({ target }) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    el.style.outline = "2px solid rgb(0, 196, 0)";
    el.setAttribute("is-valid", "1");
  } else {
    el.style.outline = "2px solid rgb(255, 0, 0)";
    el.setAttribute("is-valid", "0");
  }
}

function buttonHandler(e) {
  const validInputs = [];
  let sumValidInputs;

  allInputs.forEach((el) => {
    if (el.getAttribute("is-valid") === "1") {
      validInputs.push(el.getAttribute("is-valid"));
    }
  });

  sumValidInputs = validInputs.reduce(
    (accumulator, currentValue) => +accumulator + +currentValue
  );

  if (sumValidInputs !== 3) {
    e.preventDefault();
  }
}

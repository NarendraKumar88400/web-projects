const container = document.querySelector(".container");
const SignUpBtn = document.querySelector(".green-bg button");

SignUpBtn.addEventListener("click",() => {
    container.classList.toggle("change");
});

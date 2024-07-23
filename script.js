var faq = document.getElementsByClassName("contentBx");

for (var i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
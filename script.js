const submitBtn = document.getElementById("submit-btn");
const ratingBtns = document.querySelectorAll(".rating-btn");
const ratingCard = document.getElementById("ratingCard");
const popupCard = document.getElementById("card-popup");
const score = document.getElementById("score");
let star_score = null;
submitBtn.addEventListener("click", onSubmit);
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", handleRatingBtnClick);
});

function handleRatingBtnClick(e) {
  ratingBtns.forEach((btn) => {
    btn.classList.remove("selected");
  });

  if (e.target.classList.contains("rating-btn")) {
    e.target.classList.add("selected");
    star_score = e.target.textContent;
    score.innerText = star_score;
  }
}

function onSubmit(e) {
  e.preventDefault();
  if (!(star_score === null)) {
    popupCard.classList.add("open-popup");
  }
}

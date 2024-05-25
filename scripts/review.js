const visits = document.querySelector(".visits");
let getVisits = parseInt(localStorage.getItem("reviews")) || 0;

document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    if (path.includes("review.html")) {
      getVisits += 1;
      localStorage.setItem("reviews", getVisits);
      visits.textContent = getVisits;
    }
  });
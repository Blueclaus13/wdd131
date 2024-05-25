const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  function renderOptions(products) {
    const selector = document.querySelector("#products");
    const options = products.map((product)=>{
        return`<option value="${product.id} ">${product.name}</option>`;
    });
    selector.innerHTML += options;      
    };
    renderOptions(products);

    // Count times visited review

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



  

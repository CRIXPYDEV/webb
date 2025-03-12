// currency for minecraft plans

function updatePlans(location) {
    const plans = {
      "USD": ["$1.80", "$3.40", "$7.00", "$9.20", "$13.50"],
       "INR": ["₹160", "₹300", "₹630", "₹830", "₹1,230"]

    };

    const priceElements = document.querySelectorAll(".price");
    if (plans[location]) {
        priceElements[0].innerHTML = plans[location][0] + "<span>/month</span>";
        priceElements[1].innerHTML = plans[location][1] + "<span>/month</span>";
        priceElements[2].innerHTML = plans[location][2] + "<span>/month</span>";
        priceElements[3].innerHTML = plans[location][3] + "<span>/month</span>";
        priceElements[4].innerHTML = plans[location][4] + "<span>/month</span>";
    }
}
document.addEventListener("DOMContentLoaded", function () {
const buttons = document.querySelectorAll(".location-btn");

if (buttons.length > 0) {
buttons[0].classList.add("active"); 
}

buttons.forEach(button => {
button.addEventListener("click", function () {

    buttons.forEach(btn => btn.classList.remove("active"));
    
  
    this.classList.add("active");
});
});
});




// currency for Vps plans

function updatePlans(location) {
    const plans = {
        "USD": ["$7.00", "$10.20", "$11.20", "$17.00", "$22.50"],
        "INR": ["₹640", "₹930", "₹1020", "₹1500", "₹2050"]
    };

    const priceElements = document.querySelectorAll("[data-price]"); 
    if (plans[location]) {
        priceElements.forEach((element, index) => {
            element.innerHTML = plans[location][index] + "<span>/month</span>";
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[data-location]"); 

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




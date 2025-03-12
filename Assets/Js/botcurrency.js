// currency for Bot plans

function updatePlans(location) {
    const plans = {
        "USD": ["$0.60", "$1.10", "$2.20", "$4.50"],
        "INR": ["₹50", "₹100", "₹200", "₹400"]
    };

    const priceElements = document.querySelectorAll("[bot-price]"); 
    if (plans[location]) {
        priceElements.forEach((element, index) => {
            element.innerHTML = plans[location][index] + "<span>/month</span>";
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[bot-location]"); 

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
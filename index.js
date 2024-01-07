function placeOrder() {
    var selectedFlavors = [];
    var totalPrice = 0;

    var form = document.getElementById("juiceForm");
    var checkboxes = form.querySelectorAll('input[type=checkbox]:checked');

    checkboxes.forEach(function (checkbox) {
        selectedFlavors.push(checkbox.value);

        if (checkbox.value === "Orange") totalPrice += 400;
        else if (checkbox.value === "Apple punch") totalPrice += 600;
        else if (checkbox.value === "Strawberry Mint") totalPrice += 650;
    });

    var orderMessage = document.getElementById("orderMessage");
    if (selectedFlavors.length === 3) {
        orderMessage.textContent = "Your order for " + selectedFlavors.join(", ") + " has been placed successfully. Pay " + totalPrice.toFixed(2) + " shillings.";
    } else if (selectedFlavors.length > 0) {
        orderMessage.textContent = "Your order for blended juice has been placed successfully. Pay " + totalPrice.toFixed(2) + " shillings.";
    } else {
        orderMessage.textContent = "Please select at least one flavor.";
    }

    // alert
    alert("Order successfully placed!");
}

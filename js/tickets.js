document.addEventListener("DOMContentLoaded", function () {

    let ticketType = "";
    let ticketPrice = 0;

    const qtyInput = document.getElementById("qtyInput");
    const ticketSelect = document.getElementById("ticketSelect");

    function updateSummary() {

        const date = document.getElementById("dateSelect").value;
        const time = document.getElementById("timeSelect").value;
        const quantity = Number(qtyInput.value);

        document.getElementById("summaryDate").textContent = date || "—";
        document.getElementById("summaryTime").textContent = time || "—";
        document.getElementById("summaryType").textContent = ticketType || "—";
        document.getElementById("summaryQty").textContent = quantity;

        if (!ticketPrice) {
            document.getElementById("summarySubtotal").textContent = "SGD 0.00";
            document.getElementById("summaryGST").textContent = "SGD 0.00";
            document.getElementById("summaryService").textContent = "SGD 0.00";
            document.getElementById("summaryTotal").textContent = "SGD 0.00";
            return;
        }

        const subtotal = ticketPrice * quantity;
        const gst = subtotal * 0.07;
        const service = subtotal * 0.05;
        const total = subtotal + gst + service;

        document.getElementById("summarySubtotal").textContent = "SGD " + subtotal.toFixed(2);
        document.getElementById("summaryGST").textContent = "SGD " + gst.toFixed(2);
        document.getElementById("summaryService").textContent = "SGD " + service.toFixed(2);
        document.getElementById("summaryTotal").textContent = "SGD " + total.toFixed(2);
    }

    ticketSelect.addEventListener("change", function () {
        ticketType = this.value;
        ticketPrice = Number(this.options[this.selectedIndex].dataset.price || 0);
        updateSummary();
    });
    
    qtyInput.addEventListener("input", function () {
        if (qtyInput.value < 1) qtyInput.value = 1;
        updateSummary();
    });

    document.getElementById("dateSelect").addEventListener("change", updateSummary);
    document.getElementById("timeSelect").addEventListener("change", updateSummary);

    document.querySelector(".book-btn").addEventListener("click", function () {

        document.getElementById("orderSummary").style.display = "block";

        updateSummary();

        window.scrollTo({
            top: document.getElementById("orderSummary").offsetTop,
            behavior: "smooth"
        });
    });

});

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


    // ---------------------------------------------------------------
    // ✅ FIXED BOOK BUTTON WITH VALIDATION (ONLY CLICK HANDLER NOW)
    // ---------------------------------------------------------------
    document.querySelector(".book-btn").addEventListener("click", function (event) {

        let date = document.getElementById("dateSelect");
        let time = document.getElementById("timeSelect");
        let ticket = document.getElementById("ticketSelect");
        let qty = document.getElementById("qtyInput");

        // --- VALIDATION ---
        if (date.value === "") {
            date.setCustomValidity("Please select a date.");
            date.reportValidity();
            return;
        } else date.setCustomValidity("");

        if (time.value === "") {
            time.setCustomValidity("Please select a time.");
            time.reportValidity();
            return;
        } else time.setCustomValidity("");

        if (ticket.value === "") {
            ticket.setCustomValidity("Please select a ticket type.");
            ticket.reportValidity();
            return;
        } else ticket.setCustomValidity("");

        if (qty.value <= 0) {
            qty.setCustomValidity("Quantity must be at least 1.");
            qty.reportValidity();
            return;
        } else qty.setCustomValidity("");

        // VALID → Show summary
        document.getElementById("orderSummary").style.display = "block";
        updateSummary();

        window.scrollTo({
            top: document.getElementById("orderSummary").offsetTop,
            behavior: "smooth"
        });
    });

});

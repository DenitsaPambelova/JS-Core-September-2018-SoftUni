function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    const capacity = 150;
    let totalQuantity = 0;
    let totalPrice = 0;
    let productElement = $(".custom-select")
        .on("input", productChange);
    let priceElement = $("#price");
    let quantityElement = $("#quantity");
    let submitButton = $("#submit")
        .on("click", submit);
    let inventoryElement = $(".display");
    let capacityElement = $("#capacity");
    let totalPriceElement = $("#sum");

    function productChange() {
        if (productElement.val() !== "") {
            submitButton.attr("disabled", false);
        }
        else {
            submitButton.attr("disabled", true);
        }
    }

    function submit() {
        let li = $("<li>")
            .text(`Product: ${productElement.val()} Price: ${priceElement.val()} Quantity: ${quantityElement.val()}`);
        totalPrice += +priceElement.val();
        totalQuantity += +quantityElement.val();
        inventoryElement.append(li);
        productElement.val("");
        priceElement.val(1);
        quantityElement.val(1);
        submitButton.attr("disabled", true);
        capacityElement.val(totalQuantity);
        totalPriceElement.val(totalPrice);
        checkCapacity();
    }

    function checkCapacity() {
        if (totalQuantity >= capacity){
            productElement.attr("disabled", true);
            priceElement.attr("disabled", true);
            quantityElement.attr("disabled", true);
            submitButton.attr("disabled", true);
            capacityElement.val("full")
                .addClass("fullCapacity");
        }
    }
}
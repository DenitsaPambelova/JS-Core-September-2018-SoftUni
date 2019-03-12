function restaurantBill() {
    let product = $('#add-product')
    let productName = product.find('input[type = text]')
    let productPrice = product.find('input[type = number]')
    let name = productName.val()
    let price = productPrice.val()
    if (name.length > 0 && price.length > 0){
        let row = $('<tr>')
        row.append($(`<td>${name}</td>`))
        row.append($(`<td>${price}</td>`))
        $('#product-list').append(row)
        let sum = $('#bill > tfoot > tr > td:nth-child(2)')
        let currentSum = Number(sum.text())
        let newSum = currentSum + Number(price)
        sum.text(newSum)
        name = productName.val("")
        price = productPrice.val("")
    }
}




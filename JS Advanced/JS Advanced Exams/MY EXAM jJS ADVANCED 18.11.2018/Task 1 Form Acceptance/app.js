// function acceptance() {
//
//     let warehouse = $('div#warehouse');
//
//     let company = $('tbody tr td input[name="shippingCompany"]');
//     let product = $('tbody tr td input[name="productName"]');
//     let quantity = $('tbody tr td input[name="productQuantity"]');
//     let scrape = $('tbody tr td input[name="productScrape"]');
//
//
//     if(company.val() && product.val() && +quantity.val() && +scrape.val()){
//
//         let availableQuantity = +quantity.val() - +scrape.val();
//
//         if(availableQuantity === 0){
//             return;
//         }
//
//         let div = $('<div>');
//         let p = $('<p>');
//         let btn = $('<button type="button">Out of stock</button>').on('click', () => div.remove());
//
//         p.text(`[${company.val()}] ${product.val()} - ${availableQuantity} pieces`);
//
//         div.append(p);
//         div.append(btn);
//
//         warehouse.append(div);
//     }
//
//     company.val('');
//     product.val('');
//     quantity.val('');
//     scrape.val('');
// }

function acceptance() {
    let  companyInfo = $('input[name="shippingCompany"]');
    let productInfo = $('input[name="productName"]');
    let quantityInfo=$('input[name="productQuantity"]');
    let scrapeInfo=$('input[name="productScrape"]');
    let company=companyInfo.val();
    let product=productInfo.val();
    let quantity=quantityInfo.val();
    let scrape=scrapeInfo.val();
    if (company!=="" && product!=="" && typeof(quantity)==="number" && typeof(scrape)==="number" && +quantity>0 && +quantity>=+scrape && +quantity - +scrape>0) {

        let outputDiv = $('#warehouse');
        let div = $('<div>');
        let paragraph = $('<p>');
        paragraph.text(`[${company}] ${product} - ${quantity - scrape} pieces`);
        let button = $('<button>Out of Stock</button>').on('click', () => div.remove());
        div.append(paragraph);
        div.append(button);
        outputDiv.append(div);
    }

    companyInfo.val(" ");
    productInfo.val(" ");
    quantityInfo.val(" ");
    scrapeInfo.val(" ");

}


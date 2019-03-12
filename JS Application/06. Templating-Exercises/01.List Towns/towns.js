function attachEvents() {
    $('#btnLoadTowns').on("click", getTownInfo); //click event on button

    function getTownInfo() {
        let townsData = $("#towns").val()
            .split(", ")//get value of towns and split and return array of strings
            .reduce((acc, cur) => { // curr is every current element in array
                acc.towns.push({'town': cur}); //add in array the current element(object)
                return acc; //return array
            }, {'towns': []}); //acc is object with property towns
        renderTowns(townsData);
    }

    async function renderTowns(towns) {
        let source = await $.get('template.hbs'); //get template from file
        let template = Handlebars.compile(source); //compile source with template
        $('#root').html(template(towns)); //get element and add it in div
        $('#towns').val('') //clear value of towns
    }
}
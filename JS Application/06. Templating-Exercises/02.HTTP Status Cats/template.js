$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let source = $.get('catTemplate.hbs').then((res) => {
            let template = Handlebars.compile(res);
            $("#allCats").html(template({cats}));
            Array.from($('button')).forEach((btn) => { // for every button make click event
                $(btn).on("click", showHideInfo);
            });

            function showHideInfo() {
                let btn = $(this); //get button
                if (btn.text() === "Show status code") { //button check for his value
                    btn.next().css('display', 'block'); // show block for status code
                    btn.text('Hide status code') //change value
                } else {
                    btn.next().css('display', 'none'); // hide block for status code
                    btn.text('Show status code') //change value
                }

            }
        })
    }

});

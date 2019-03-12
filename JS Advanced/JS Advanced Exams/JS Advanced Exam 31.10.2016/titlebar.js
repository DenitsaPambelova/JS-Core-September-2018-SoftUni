class TitleBar {
    constructor(title) {
        this.title = title;
        this.links = [];
        this.menu = {};
    }

    addLink(href, name) {
        this.links.push([href, name]);
    }

    appendTo(selector) {
        $(selector).append(this.generate());
    }

    generate() {
        let links = '';
        for (let link of this.links) {
            links += `<a class="menu-link" href="${link[0]}">${link[1]}</a>`;
        }

        let html = $(`<header class="header">
  <div class="header-row">
    <a class="button">&#9776;</a>
    <span class="title">${this.title}</span>
  </div>
  <div class="drawer">
    <nav class="menu">
      ${links}
    </nav>
  </div>
</header>`);

        this.menu = html.find('.drawer');
        html.find('.button').click(this.toggle.bind(this));

        return html;
    }

    toggle() {
        if (this.menu.css('display') == 'none') {
            this.menu.css('display', 'block');
        } else {
            this.menu.css('display', 'none');
        }
    }
}

let header = new TitleBar('Title Bar Problem');
header.addLink('/', 'Home');
header.addLink('about', 'About');
header.addLink('results', 'Results');
header.addLink('faq', 'FAQ');
header.appendTo('#head');
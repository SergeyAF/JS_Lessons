
class Service {
    constructor() {
        this.apiKey = '739cccab15d847cf960baf063fbb747c';
        this.apiUrl = 'https://newsapi.org/v2/'
        this.country = '';
        this.category = '';
        this.search = search;
        this.sort = '';
        this.fromDate = '';
        this.toDate = '';
    }
    sendRequest({ country = '', category = '' }) {
        country !== '' ? this.country = country : this.country;
        category !== '' ? this.category = category : this.category;
        return fetch(`${this.apiUrl}top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.apiKey}`)
            .then(response => response.json())
    }
    sendSearchReqest({ search = '', sort = '', fromDate = '', toDate = '' }) {
        for (const key in arguments) {
            for (const ar in arguments[key]) {
                if (arguments[key][ar] !== '') {
                    this[ar] = arguments[key][ar]
                };
            };
        };
        return fetch(`${this.apiUrl}everything?q=${this.search}&from=${this.fromDate}&to=${this.toDate}&sortBy=${this.sort}&apiKey=${this.apiKey}`)
            .then(response => response.json())
    }
}

class UI {
    constructor() {
        this.service = new Service();
        this.layout = new LayoutNews();
    }
    init() {
        const country = document.querySelector('#country');
        const category = document.querySelector('#category');
        const searchLine = document.querySelector('#search');
        const sort = document.querySelector('#sort');
        sort.value = 'publishedAt';
        const fromDate = document.querySelector('#fromDate');
        const toDate = document.querySelector('#toDate');
        let localDate = new Date();
        toDate.setAttribute('max', localDate.toJSON().slice(0, 10));
        fromDate.setAttribute('max', localDate.toJSON().slice(0, 10));

        country.addEventListener('change', this.handleSelect.bind(this));
        category.addEventListener('change', this.handleSelect.bind(this));
        searchLine.addEventListener('keyup', this.handleSelect.bind(this));
        sort.addEventListener('change', this.handleSelect.bind(this));
        toDate.addEventListener('change', this.handleSelect.bind(this));
        fromDate.addEventListener('change', this.handleSelect.bind(this));
    }
    handleSelect(event) {
        const { id: selectName, value: selectValue } = event.target;
        let searchReqest = 'sendSearchReqest';
        if (selectName === 'country' || selectName === 'category') {
            searchReqest = 'sendRequest';
        };
        this.service[searchReqest]({ [selectName]: selectValue })
            .then((response) => {
                this.layout.renderAll(response.articles);
            })
            .catch(err => { console.log(err) })

    };
};

class LayoutNews {
    constructor() {
        this.divRow = document.querySelector('#news-content');
    };
    renderAll(newsList) {
        this.divRow.innerHTML = '';
        newsList.forEach(news => {
            const html = this.render(news);
            this.divRow.insertAdjacentHTML('beforeend', html);
        });
    }
    render(news) {
        return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img src="${news.urlToImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${news.title || ''}</span>
                    <p>${news.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${news.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>`;
    }
}

const myUI = new UI();
myUI.init();

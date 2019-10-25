const imgs = [
    'img/js.png',
    'img/react.png',
    'img/angular.png'
]

class Slider {
    constructor(selector, arrayOfImgs) {
        this.selector = selector;
        this.images = arrayOfImgs;
        this.currentImg = 0;
        this.wrapper = document.querySelector(this.selector);
        this.initSlider();
        this.dectruct = this.dectruct.bind(this);
    }

    initSlider() {
        //create DOM
        let btnNext = document.createElement('button');
        btnNext.textContent = 'Next';
        btnNext.addEventListener('click', this.goNext.bind(this));
        let btnBack = document.createElement('button');
        btnBack.textContent = 'Back';
        btnBack.addEventListener('click', this.goBack.bind(this));

        this.wrapper.append(btnNext);
        this.wrapper.append(btnBack);

        this.renderImg()
    }
    renderImg() {
        const img = document.createElement('img');
        img.width = 250;
        img.alt = 'Image of Slider';
        img.src = this.images[this.currentImg];
        this.wrapper.append(img);
    }
    removeImg() {
        const img = this.wrapper.querySelector('img');
        img.remove();
    }
    goNext() {
        if (this.currentImg + 1 === this.images.length) {
            this.currentImg = 0;
        } else {
            this.currentImg += 1;
        }
        this.removeImg();
        this.renderImg();
    }
    goBack() {
        if (this.currentImg === 0) {
            this.currentImg = this.images.length - 1;
        } else {
            this.currentImg -= 1;
        }
        this.removeImg();
        this.renderImg();
    }
    dectruct() {
        this.wrapper.innerHTML = '';
    }
}

const mySlider = new Slider('#slider', imgs)
setTimeout(mySlider.dectruct, 5000);
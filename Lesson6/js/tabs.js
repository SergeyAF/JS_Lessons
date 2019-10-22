const hotelBtn = document.querySelector('.hotel_btn');
const carBtn = document.querySelector('.cars_btn');
const flightBtn = document.querySelector('.flights_btn');

console.log(hotelBtn);
const tab1 = document.querySelector('.hotels');
const tab2 = document.querySelector('.cars');
const tab3 = document.querySelector('.flights');

const tabsArray = document.querySelectorAll('.tab');
const btnArray = document.querySelectorAll('.btn');

hotelBtn.addEventListener('click', function() {
    tabsArray.forEach(node => {
        node.classList.remove('show');
    });
    btnArray.forEach(node => {
        node.classList.remove('bordered')
    });
    tab1.classList.add('show');
    hotelBtn.classList.add('bordered');
});

carBtn.addEventListener('click', function () {
    tabsArray.forEach(node => {
        node.classList.remove('show');
    });
    btnArray.forEach(node => {
        node.classList.remove('bordered')
    });
    tab2.classList.add('show');
    carBtn.classList.add('bordered');
});
flightBtn.addEventListener('click', function () {
    tabsArray.forEach(node => {
        node.classList.remove('show');
    });
    btnArray.forEach(node => {
        node.classList.remove('bordered')
    });
    tab3.classList.add('show');
    flightBtn.classList.add('bordered');
})
import Locations from './store/locations';
import './helpers/materialize';
import FormUI from './view/form';
import Tickets from './view/tickets';
import CurrencyUI from "./view/currency";
import '../css/style.css';

const locations = new Locations();
const tickets = new Tickets();
const currency = new CurrencyUI();

document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.querySelector('#btn_submit');
  const resetBtn = document.querySelector('#btn_reset');
  const form = new FormUI();

  async function initApp() {
    await locations.init();
    form.setAutocompleteData(locations.citiesForAutocomplete);
  }

  initApp();

  submitBtn.addEventListener('click', e => {
    e.preventDefault();
    handleSubmit();
  });

  resetBtn.addEventListener('click', e => {
    e.preventDefault();
    form.clearForm();
    tickets.clearTickets();
  });

  function handleSubmit() {
    const arriveCity = locations.getCityCode(form.arriveCity);
    const departureCity = locations.getCityCode(form.departureCity);
    const departureDate = form.departure;
    const returnDate = form.return;

    locations
      .fetchTickets({
        origin: departureCity,
        destination: arriveCity,
        depart_date: departureDate,
        return_date: returnDate,
        currency: currency.getCurrencyValue(),
      })
      .then(data => {
         tickets.renderTickets(data, currency.getCurrencySymbol());
      });
  }
});

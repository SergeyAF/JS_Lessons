import {
  getAutocompleteInstance,
  getDatepickerInstance,
} from '../helpers/materialize';

export default class FormUI {
  constructor() {
    this.cityOfArrive = document.querySelector('#city_of_arrive');
    this.arriveAutocomplete = getAutocompleteInstance(this.cityOfArrive);

    this.cityOfDeparture = document.querySelector('#city_of_departure');
    this.departureAutocomplete = getAutocompleteInstance(this.cityOfDeparture);

    this.departureDate = document.querySelector('.departure');
    this.departureDatepicker = getDatepickerInstance(this.departureDate);

    this.returnDate = document.querySelector('.return');
    this.returnDatepicker = getDatepickerInstance(this.returnDate);
    this.labels = document.querySelectorAll('.labels');
  }

  get arriveCity() {
    return this.cityOfArrive.value;
  }

  get departureCity() {
    return this.cityOfDeparture.value;
  }

  get departure() {
    const { year, month } = this.departureDatepicker.calendars[0];
    return year + '-' + (month + 1);
  }

  get return() {
    const { year, month } = this.returnDatepicker.calendars[0];
    return year + '-' + (month + 1);
  }

  setAutocompleteData(data) {
    this.arriveAutocomplete.updateData(data);
    this.departureAutocomplete.updateData(data);
  }

  clearForm(){
    this.cityOfArrive.value = null;
    this.cityOfDeparture.value = null;
    this.departureDate.value = null;
    this.returnDate.value = null;
    this.labels.forEach((node) => {
        node.classList.remove('active');
    });
    this.cityOfArrive.classList.remove('valid');
    this.cityOfDeparture.classList.remove('valid');
  }
}

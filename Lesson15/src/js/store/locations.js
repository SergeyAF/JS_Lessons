import Api from "../services/api";

export default class Locations {
  constructor() {
    this.countries = null;
    this.cities = null;
    this.airlines = null;
    this.api = new Api();
  }
  async init() {
    const response = await Promise.all([
      this.api.getCities(),
      this.api.getCountries(),
      this.api.getAirlines()
    ]);
    const [cities, countries, airlines] = response;
    this.cities = cities.data;
    this.citiesForAutocomplete = this.formatCities(cities, countries);
    this.countries = countries.data;
    this.airlines = airlines.data;
  }

  formatCities(cities, countries) {
    const cityList = cities.data;
    const countryList = countries.data;

    return cityList.reduce((acc, city) => {
      countryList.forEach(country => {
        if (city.country_code === country.code){
          acc[`${city.name}, ${country.name}`] = city.code;
        }
      });
      return acc
      }, {});

    // return cityList.reduce((acc, elem) => {
    //   acc[elem.name] = null; //elem.code
    //   return acc;
    // }, {});
  }

  getCityCode(city) {
    return this.citiesForAutocomplete[city];
  }

  getCityName(cityCode) {
    for (let key in this.citiesForAutocomplete) {
      if (cityCode === this.citiesForAutocomplete[key]) {
        return key;
      }
    }
  }

  getAirlineLogo(code) {
    return `http://pics.avs.io/200/200/${code}.png`
  }

  getAirlineName(code) {
      const result = this.airlines.find((air) => {
         return air.code === code
      });
      return result['name_translations'].en;
  }

  transformTickets(ticketsList) {
    const updatedList = [];
    for (let key in ticketsList) {
      const ticket = ticketsList[key];
      updatedList.push({
        ...ticket,
        airline_logo: this.getAirlineLogo(ticket.airline),
        airline_name: this.getAirlineName(ticket.airline),
        origin_name: this.getCityName(ticket.origin),
        destination_name: this.getCityName(ticket.destination),
        departure_at: new Date(ticket.departure_at).toUTCString()
      });
    }
    return updatedList;
  }

  fetchTickets(params) {
    return this.api.getPrices(params).then(response => {
      return this.transformTickets(response.data.data);
    });
  }
}

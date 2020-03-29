class Place {
  constructor(name, latitude, longitude) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

class ShopPlace extends Place {
  constructor(name, latitude, longitude, openFrom, openTo) {
    super(name, latitude, longitude);
    this.openFrom = openFrom;
    this.openTo = openTo;
  }
}

const lisbon = new Place('Lisbon', 38.728174, -9.152561);
const lidlShop = new ShopPlace('Lidl Loures', 37.11662, -8.534811, '8:30AM', '7PM');

console.log('Lisbon: ', lisbon);
console.log('lidlShop: ', lidlShop);
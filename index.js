let driverID = 0;
<<<<<<< HEAD
let store = {drivers: [], passengers: [], trips: []};
=======
let store = [];
>>>>>>> 92b5d0ad5f55936e9662756cf068797e82f0a322
class Driver {
  constructor(name) {
    this.id = ++driverID;
    this.name = name;
<<<<<<< HEAD
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.driverId == this.id);
  }

  passengers() {
    let trips = this.trips();
    let passengers = [];
    trips.forEach(function(trip) {
      passengers.push(trip.passenger());
    })
    return passengers;
=======
    store << this;
  }

  trips() {

  }

  passengers() {

>>>>>>> 92b5d0ad5f55936e9662756cf068797e82f0a322
  }
}

let passengerID = 0;
class Passenger {
  constructor (name) {
    this.id = ++passengerID;
    this.name = name;
<<<<<<< HEAD
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId == this.id);
  }

  drivers() {
    let trips = this.trips();
    let drivers = [];
    trips.forEach(function(trip) {
      drivers.push(trip.driver());
    })
    return drivers;
=======
  }

  trips() {

  }

  drivers() {

>>>>>>> 92b5d0ad5f55936e9662756cf068797e82f0a322
  }
}

let tripID = 0;
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripID;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
<<<<<<< HEAD
    store.trips.push(this);

  }

  driver() {
    const dId = this.driverId;
    return store.drivers.find(function(driver) {
      return (driver.id == dId);
    })
  }

  passenger() {
    let pId = this.passengerId;
    return store.passengers.find(function(passenger) {
      return (passenger.id == pId);
    })
=======
  }

  driver() {

  }

  passenger() {

>>>>>>> 92b5d0ad5f55936e9662756cf068797e82f0a322
  }
}

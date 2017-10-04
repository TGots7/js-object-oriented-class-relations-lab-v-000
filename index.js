let store = {drivers: [], passengers: [], trips: []}

let driverId = 0;
class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  trips(){
    let array = store.trips.filter((function(each){
      return each.driverId === this.id
    }), this );
    return array;
  }
  passengers(){
    return this.trips().map(function(each){
      return each.passenger();
    })
  }
}
let passengerId = 0;
class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  trips(){
      let array = store.trips.filter((function(trip){
        return trip.passengerId = this.id
      }), this);
      return array;
  }
  drivers(){
        return this.trips().map(function(each){
            return each.driver();
        });
  }
}
let tripId = 0;
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId

      if (driver) {
          this.driverId = driver.id;
        };
      if(passenger) {
        this.passengerId = passenger.id
      };
      store.trips.push(this)
  }
  driver(){
    return store.drivers.find((function(driver){
      return this.driverId === driver.id;
    }), this);
  }
  passenger(passenger){
    return store.passengers.find((function(passenger){
      return this.passengerId === passenger.id;
    }), this);
  }
}

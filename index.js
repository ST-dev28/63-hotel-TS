"use strict";
class Hotel {
    constructor(name, address, stars) {
        this.name = name;
        this.address = address;
        this.stars = stars;
        //this.rooms = rooms;
    }
    printData() {
        const hotelInfo = `${this.stars} star hotel "${this.name}", loacated in ${this.address}, is waiting for guests!`;
        console.log(hotelInfo);
        //console.log(`Rooms are: ${this.rooms}.`);
    }
}
const hotel = new Hotel("Heaven", "Karkle, Placio str. 24", 5);
hotel.printData();
console.log('-------------------');
class Room {
    constructor(size, capacity, comfort) {
        this.size = size;
        this.capacity = capacity;
        this.comfort = comfort = Math.round(this.size / this.capacity * 10) / 10;
    }
    printData() {
        console.log(`Room size is ${this.size}m2 => ${this.capacity} person/room, ${this.comfort} m2/person.`);
    }
}
const room = new Room(15, 2, 7);
room.printData();
console.log('-------------------');
class Spa extends Room {
    constructor(poolSize, poolTemp) {
        super(100, 4, 20);
        this.poolSize = poolSize;
        this.poolTemp = poolTemp;
        this.comfort = Math.round((this.size - this.poolSize) / this.capacity * 10) / 10;
    }
    printData() {
        super.printData();
        console.log(`Pool size is ${this.poolSize}m2 and water temperature is upto ${this.poolTemp}^C`);
    }
}
const spa = new Spa(20, 45);
spa.printData();
var addRoom;
(function (addRoom) {
    addRoom[addRoom["single"] = 15] = "single";
    addRoom[addRoom["double"] = 20] = "double";
    addRoom[addRoom["family"] = 35] = "family";
    addRoom[addRoom["luxuryPool"] = 100] = "luxuryPool";
})(addRoom || (addRoom = {}));

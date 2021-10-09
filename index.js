"use strict";
class Hotel {
    constructor(name = "Heaven", address = "Karkle, Placio str. 24", stars = 5) {
        this.name = name;
        this.address = address;
        this.stars = stars;
        this.rooms = [];
    }
    addRoom(room) {
        this.rooms.push(room);
    }
    printRooms(minComfort = 15) {
        console.log(`Here is a list of rooms:`, this.rooms);
    }
    printData() {
        const hotelInfo = `${this.stars} star hotel "${this.name}", loacated in ${this.address}, is waiting for guests!`;
        console.log(hotelInfo);
        console.log(`Here is a list of rooms:`, this.rooms);
    }
}
const hotel = new Hotel();
hotel.printData();
console.log('-------------------');
var RoomType;
(function (RoomType) {
    RoomType[RoomType["minComfort"] = 14] = "minComfort";
    RoomType[RoomType["double"] = 25] = "double";
    RoomType[RoomType["luxurySpa"] = 60] = "luxurySpa";
})(RoomType || (RoomType = {}));
class Room {
    //public readonly type: RoomType;
    constructor(size = 14 | 25 | 60, 
    //type: RoomType = RoomType.minComfort,
    capacity = 1 | 2 | 4, comfort) {
        this.size = size;
        //this.type = type;
        this.capacity = capacity;
        this.comfort = comfort = Math.round(this.size / this.capacity * 10) / 10;
    }
    printData() {
        console.log(`Room size is ${this.size}m2 => ${this.capacity} person / room, ${this.comfort} m2 / person.`);
    }
}
const room = new Room(14, 1, 0);
const room1 = new Room(25, 2, 0);
const room2 = new Room(60, 4, 0);
room.printData();
hotel.addRoom(room);
hotel.addRoom(room1);
hotel.addRoom(room2);
console.log('-------------------');
class Spa extends Room {
    constructor(poolSize, poolTemp) {
        super(100, 4, 0);
        this.poolSize = poolSize;
        this.poolTemp = poolTemp;
        this.comfort = Math.round((this.size - this.poolSize) / this.capacity * 10) / 10;
    }
    printData() {
        super.printData();
        console.log(`Pool size is ${this.poolSize}m2 and water temperature is upto ${this.poolTemp} ^ C`);
    }
}
const spa = new Spa(20, 45);
spa.printData();

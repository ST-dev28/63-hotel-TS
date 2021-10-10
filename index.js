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
    printRooms(minComfort) {
        for (let room of this.rooms) {
            if (minComfort !== undefined) {
                if (room.comfort > minComfort) {
                    room.printData();
                }
            }
            else {
                room.printData();
            }
        }
    }
    printData(onlyComfort) {
        const hotelInfo = `${this.stars} star hotel "${this.name}", loacated in ${this.address}, is waiting for guests!`;
        console.log(hotelInfo);
        console.log(`Here is a list of rooms:`, this.rooms);
        if (onlyComfort) {
            this.printRooms(15);
        }
        else {
            this.printRooms(0);
        }
    }
}
class Room {
    constructor(size, capacity) {
        this.size = size;
        this.capacity = capacity;
    }
    get comfort() {
        return Math.round(this.size / this.capacity * 10) / 10;
    }
    printData() {
        console.log('-------------------');
        console.log(`Room info: \nsize -> ${this.size}m2 \ncapacity -> ${this.capacity} person/room \ncomfort level -> ${this.comfort} m2/person.`);
    }
}
class Spa extends Room {
    constructor(poolSize, poolTemp) {
        super(100, 4);
        this.poolSize = poolSize;
        this.poolTemp = poolTemp;
    }
    get comfort() {
        return Math.round((this.size - this.poolSize) / this.capacity * 10) / 10;
    }
    printData() {
        super.printData();
        console.log(`Pool info: \nsize -> ${this.poolSize}m2 \nwater temperature -> upto ${this.poolTemp} ^C`);
    }
}
const hotel = new Hotel();
hotel.printData();
const room = new Room(14, 1);
const room1 = new Room(25, 2);
const room2 = new Room(60, 4);
const room3 = new Room(60, 4);
room.printData();
room1.printData();
room3.printData();
hotel.addRoom(room);
hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);
const spa = new Spa(20, 45);
const spa1 = new Spa(15, 45);
spa.printData();
spa1.printData();
console.log(`\n`);
console.log(`******* COMFORT ********`);
hotel.printData(false);

function print(text, tag = "t") {
    const t = document.createElement(tag);
    t.textContent = text;
    document.getElementById("output").appendChild(t);
}
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
            if (room.comfort > minComfort) {
                room.printData();
            }
        }
    }
    printData(onlyComfort) {
        const hotelInfo = `${this.stars} star hotel "${this.name}", located in ${this.address}, is waiting for guests!`;
        console.log(hotelInfo);
        print(hotelInfo, "h1");
        console.log(`Here is a list of rooms for your choice:`, this.rooms);
        if (onlyComfort === true ||
            onlyComfort === undefined) {
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
        print(`Room info: \nsize -> ${this.size}m2 \ncapacity -> ${this.capacity} person/room \ncomfort level -> ${this.comfort} m2/person.`, "h5");
    }
}
class Spa extends Room {
    constructor(size, capacity, poolSize, poolTemp) {
        super(size, capacity);
        this.poolSize = poolSize;
        this.poolTemp = poolTemp;
    }
    get comfort() {
        return Math.round((this.size - this.poolSize) / this.capacity * 10) / 10;
    }
    printData() {
        super.printData();
        console.log(`Pool info: \nsize -> ${this.poolSize}m2 \nwater temperature -> upto ${this.poolTemp} ^C.`);
        print(`Pool info: \nsize -> ${this.poolSize}m2 \nwater temperature -> upto ${this.poolTemp} ^C,`, "h4");
    }
}
const hotel = new Hotel();
const room = new Room(14, 1);
const room1 = new Room(25, 2);
const room2 = new Room(65, 4);
const room3 = new Spa(70, 3, 8, 40);
const room4 = new Spa(80, 4, 10, 47);
room.printData();
room1.printData();
room3.printData();
hotel.addRoom(room);
hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);
hotel.addRoom(room4);
console.log(`\n`);
console.log(`******* ALL ROOMS ********`);
hotel.printData(false);
console.log(`\n`);
console.log(`******* COMFORT ********`);
hotel.printData(true);

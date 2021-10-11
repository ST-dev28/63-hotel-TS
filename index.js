function printTitle(tekstas, tagas = 'p') {
    const p = document.createElement(tagas);
    p.textContent = tekstas;
    document.getElementById('title').appendChild(p);
}
function print(text, tag = "p") {
    const p = document.createElement(tag);
    p.textContent = text;
    document.getElementById("output").appendChild(p);
}
function printBreak() {
    const breakingTag = document.createElement("br");
    document.getElementById("output").appendChild(breakingTag);
}
function printBreakHead() {
    const breakingTag = document.createElement("br");
    document.getElementById("title").appendChild(breakingTag);
}
class Hotel {
    constructor(name = "Heaven", address = "Marocco, Mountain road 2", stars = 5) {
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
            if (room.comfort > minComfort || minComfort === undefined) {
                room.printData();
            }
        }
    }
    rating() {
        let star = '';
        for (let s = 1; s <= this.stars; s++) {
            star += '⭐';
        }
        return star;
    }
    printData(onlyComfort) {
        const hotelInfo = `${this.stars} star hotel "${this.name}", located in ${this.address}, is waiting for guests!`;
        console.log(hotelInfo);
        console.log(`Here is a list of rooms for your choice:`, this.rooms);
        printTitle(this.rating(), 'h6');
        printTitle('hotel', 'h4');
        printTitle(this.name, 'h2');
        printTitle(this.address, 'h6');
        printBreakHead();
        printTitle('Is offering standard and luxury Spa class rooms for your stay: ', 'h6');
        if (onlyComfort === true) {
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
        printBreak();
        print('Room info:', 'h3');
        print('size ' + this.size + ' m2', 'h4');
        print('capacity ' + this.capacity + ' pers.', 'h4');
        print('comfort ' + this.comfort + ' m2/pers.', 'h4');
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
        console.log(`>>> Pool info: \nsize -> ${this.poolSize}m2 \nwater temperature -> upto ${this.poolTemp} ^C.`);
        print('Pool info:', 'h3');
        print('size ' + this.poolSize + ' m2', 'h4');
        print('water temperature ' + this.poolTemp + ' ^C', 'h4');
    }
}
const hotel = new Hotel();
const room = new Room(14, 1);
const room1 = new Room(25, 2);
const room2 = new Room(65, 4);
const room3 = new Spa(70, 3, 8, 40);
const room4 = new Spa(80, 4, 10, 47);
hotel.addRoom(room);
hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);
hotel.addRoom(room4);
console.log(`\n`);
console.log(`******* ALL ROOMS ********`);
hotel.printData(false);

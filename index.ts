class Hotel {
    public readonly name: string;
    public readonly address: string;
    public readonly stars: number;
    public readonly rooms: [];

    public constructor(name: string,
        address: string,
        stars: number) {

        this.name = name;
        this.address = address;
        this.stars = stars;
        //this.rooms = rooms;
    }

    public printData(): void {
        const hotelInfo = `${this.stars} star hotel "${this.name}", loacated in ${this.address}, is waiting for guests!`
        console.log(hotelInfo);
        //console.log(`Rooms are: ${this.rooms}.`);
    }
}

const hotel = new Hotel("Heaven", "Karkle, Placio str. 24", 5);
hotel.printData();
console.log('-------------------');

class Room {
    public readonly size: number;
    public readonly capacity: number;
    public readonly comfort: number;

    public constructor(size: number,
        capacity: number,
        comfort: number) {

        this.size = size;
        this.capacity = capacity;
        this.comfort = comfort = Math.round(this.size / this.capacity * 10) / 10;
    }
    public printData(): void {
        console.log(`Room size is ${this.size}m2 => ${this.capacity} person/room, ${this.comfort} m2/person.`);
    }
}
const room = new Room(15, 2, 7);
room.printData();

console.log('-------------------');

class Spa extends Room {
    public readonly poolSize: number;
    public readonly poolTemp: number;
    public readonly comfort: number;

    constructor(poolSize: number,
        poolTemp: number) {
        super(100, 4, 20);
        this.poolSize = poolSize;
        this.poolTemp = poolTemp;
        this.comfort = Math.round((this.size - this.poolSize) / this.capacity * 10) / 10;
    }
    public printData(): void {
        super.printData();
        console.log(`Pool size is ${this.poolSize}m2 and water temperature is upto ${this.poolTemp}^C`);
    }
}
const spa = new Spa(20, 45);
spa.printData();

enum addRoom {
    single = 15,
    double = 20,
    family = 35,
    luxuryPool = 100
}



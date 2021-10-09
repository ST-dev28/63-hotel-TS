class Hotel {
    public readonly name: string;
    public readonly address: string;
    public readonly stars: number
    public rooms: Room[];

    public constructor(name: string = "Heaven",
        address: string = "Karkle, Placio str. 24",
        stars: number = 5) {

        this.name = name;
        this.address = address;
        this.stars = stars;
        this.rooms = [];
    }

    public addRoom(room: Room): void {
        this.rooms.push(room);
    }

    private printRooms(minComfort: number = 15): void {
        console.log(`Here is a list of rooms:`, this.rooms);
    }

    public printData(): void {
        const hotelInfo = `${this.stars} star hotel "${this.name}", loacated in ${this.address}, is waiting for guests!`
        console.log(hotelInfo);
        console.log(`Here is a list of rooms:`, this.rooms);
    }
}
const hotel = new Hotel();
hotel.printData();
console.log('-------------------');

enum RoomType {
    minComfort = 14,
    double = 25,
    luxurySpa = 60
}

class Room {
    public readonly size: number;
    public readonly capacity: number;
    public readonly comfort: number;
    //public readonly type: RoomType;

    public constructor(size: number = 14 | 25 | 60,
        //type: RoomType = RoomType.minComfort,
        capacity: number = 1 | 2 | 4,
        comfort: number) {

        this.size = size;
        //this.type = type;
        this.capacity = capacity;
        this.comfort = comfort = Math.round(this.size / this.capacity * 10) / 10;
    }
    public printData(): void {
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
    public readonly poolSize: number;
    public readonly poolTemp: number;
    public readonly comfort: number;

    constructor(poolSize: number,
        poolTemp: number) {
        super(100, 4, 0);
        this.poolSize = poolSize;
        this.poolTemp = poolTemp;
        this.comfort = Math.round((this.size - this.poolSize) / this.capacity * 10) / 10;
    }
    public printData(): void {
        super.printData();
        console.log(`Pool size is ${this.poolSize}m2 and water temperature is upto ${this.poolTemp} ^ C`);
    }
}
const spa = new Spa(20, 45);
spa.printData();
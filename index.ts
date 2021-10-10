//document.getElementById("output").append("Kambariai")

function print(text: string, tag: string = "p") {
    const p = document.createElement(tag);
    p.textContent = text;
    document.getElementById("output").appendChild(p);
}

class Hotel {
    public readonly name: string;
    public readonly address: string;
    public readonly stars: number
    public readonly rooms: Room[];

    public constructor(name: string = "Heaven",
        address: string = "Karkle, Placio str. 24",
        stars: number = 5) {

        this.name = name;
        this.address = address;
        this.stars = stars;
        this.rooms = [];
    }

    // metodai

    public addRoom(room: Room): void {
        this.rooms.push(room);
    }

    // Privatus metodas, pagal kuri atrenkami aukstesnio lygio kambariai nei nurodyta minComfort
    //kintamajame (siuo atveju >15). Spausdinumui naudodamas Room klases printData metodas
    // vienas variantas

    /*private printRooms(minComfort: number) {
        for (let room of this.rooms) {
            if (minComfort !== undefined) {
                if (room.comfort > minComfort) {
                    room.printData();
                }
            } else {
                room.printData();
            }
        }
    }*/

    // Arba antras variantas
    private printRooms(minComfort?: number): void {
        for (let room of this.rooms) {
            if (room.comfort > minComfort || minComfort === undefined) {
                room.printData();
            }
        }
    }

    public printData(onlyComfort?: boolean): void {
        const hotelInfo = `${this.stars} star hotel "${this.name}", located in ${this.address}, is waiting for guests!`
        console.log(hotelInfo);
        print(hotelInfo, "h1");
        console.log(`Here is a list of rooms for your choice:`, this.rooms);
        // if salyga, kuri atspausdina visus kambarius (this.printRooms(0)) arba tik tuos , kurie 
        //yra aukstesnes komforto klases nei nurodyta (this.printRooms(15)). Si salyga veikia, kai
        // onlyComfort yra True
        if (onlyComfort === true) {
            this.printRooms(15);
        } else {
            this.printRooms(0);
        }
    }
}

class Room {
    public readonly size: number;
    public readonly capacity: number;

    public constructor(size: number,
        capacity: number) {

        this.size = size;
        this.capacity = capacity;
    }

    get comfort(): number {
        return Math.round(this.size / this.capacity * 10) / 10;
    }

    public printData(): void {
        console.log('-------------------');
        console.log(`Room info: \nsize -> ${this.size}m2 \ncapacity -> ${this.capacity} person/room \ncomfort level -> ${this.comfort} m2/person.`);
        print(`Room info: \nsize -> ${this.size}m2 \ncapacity -> ${this.capacity} person/room \ncomfort level -> ${this.comfort} m2/person.`);
    }
}

class Spa extends Room {
    public readonly poolSize: number;
    public readonly poolTemp: number;

    constructor(size: number,
        capacity: number,
        poolSize: number,
        poolTemp: number) {
        super(size, capacity);
        this.poolSize = poolSize;
        this.poolTemp = poolTemp;
    }
    get comfort(): number {
        return Math.round((this.size - this.poolSize) / this.capacity * 10) / 10;
    }

    public printData(): void {
        super.printData();
        console.log(`>>> Pool info: \nsize -> ${this.poolSize}m2 \nwater temperature -> upto ${this.poolTemp} ^C.`);
        print(`Pool info: \nsize -> ${this.poolSize}m2 \nwater temperature -> upto ${this.poolTemp} ^C,`, "h4");
    }
}
// kurism viesbuti
const hotel = new Hotel();

// kuriam kambarius
const room = new Room(14, 1);
const room1 = new Room(25, 2);
const room2 = new Room(65, 4);
const room3: Spa = new Spa(70, 3, 8, 40);
const room4: Spa = new Spa(80, 4, 10, 47);

// spausdinam kambarius
room.printData();
room1.printData();
room3.printData();
hotel.addRoom(room);
hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);
hotel.addRoom(room4);

//const spa = new Spa(100, 4, 20, 45);
//const spa1 = new Spa(90, 3, 15, 45);
//spa.printData();
//spa1.printData();
//console.log(spa1);
console.log(`\n`);
console.log(`******* ALL ROOMS ********`);
hotel.printData(false);  // spausdina visus kambarius
console.log(`\n`);
console.log(`******* COMFORT ********`);   // spausdina tik daugiau nei minComfort kambarius
hotel.printData(true);

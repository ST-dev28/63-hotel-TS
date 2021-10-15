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
    printRooms(element, minComfort) {
        for (let room of this.rooms) {
            if (room.comfort > minComfort || minComfort === undefined) {
                console.log('*** ROOM ***');
                room.printData(element);
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
    printData(element) {
        if (element) {
            element.innerHTML += `
                <h1 id="title">${this.rating()} hotel "${this.name}", ${this.address}</h1>
            <h3 id="list">Please choose a room for your stay: </h3>`;
        }
        this.printRooms(element);
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
    printData(element) {
        if (element) {
            element.innerHTML += `
                <div id="card">
                    <h4>Room</h4>
                    <p>Room size: ${this.size} m2</p>
                    <p>Capacity: ${this.capacity} persons</p>
                </div>`;
        }
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
    printData(element) {
        if (element) {
            element.innerHTML += `
                <div id="card">
                    <h4>Room</h4>
                    <p>Room size: ${this.size} m2</p>
                    <p>Capacity: ${this.capacity} persons</p>
                    <p>Pool size: ${this.poolSize} m2</p>
                    <p>Water temperature: ${this.poolTemp} ^C</p>
                </div>`;
        }
    }
}
const hotel = new Hotel();
const UI = {
    roomSelect: document.getElementById("room"),
    roomOption: document.getElementById("room"),
    peopleSelect: document.getElementById("people"),
    peopleOption: document.getElementById("people"),
    poolSelect: document.getElementById("pool"),
    poolOption: document.getElementById("pool"),
    tempSelect: document.getElementById("temp"),
    tempOption: document.getElementById("temp"),
    saveButton: document.getElementById("save"),
    cardDiv: document.querySelector("output"),
};
console.log(UI.saveButton);
let rooms = [];
UI.saveButton.addEventListener("click", (e) => {
    const roomSize = Number(UI.roomOption.value);
    const capacity = Number(UI.peopleOption.value);
    const poolSize = Number(UI.poolOption.value);
    const temp = Number(UI.tempOption.value);
    hotel.addRoom(new Room(roomSize, capacity));
    display();
});
function display() {
    UI.cardDiv.innerHTML = "";
    for (const room of rooms) {
        room.printData(UI.cardDiv);
    }
}

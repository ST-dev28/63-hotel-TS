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
                <div class="card">
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
                <div class="card">
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
    peopleSelect: document.getElementById("people"),
    poolSelect: document.getElementById("pool"),
    tempSelect: document.getElementById("temp"),
    roomOption: document.getElementById("room"),
    peopleOption: document.getElementById("people"),
    poolOption: document.getElementById("pool"),
    tempOption: document.getElementById("temp"),
    saveButton: document.getElementById("save"),
    cardDiv: document.querySelector(".output"),
};
console.log(UI.saveButton);
UI.saveButton.addEventListener("click", () => {
    const roomSize = Number(UI.roomOption.value);
    const capacity = Number(UI.peopleOption.value);
    const poolSize = Number(UI.poolOption.value);
    const temp = Number(UI.tempOption.value);
    if (!poolSize &&
        !temp) {
        hotel.addRoom(new Room(roomSize, capacity));
        console.log("--- room ---");
    }
    else {
        hotel.addRoom(new Spa(roomSize, capacity, poolSize, temp));
        console.log("--- room ---");
    }
    display();
});
function display() {
    UI.cardDiv.innerHTML = "";
    console.log("*** ROOM ***");
    hotel.printData(UI.cardDiv);
}

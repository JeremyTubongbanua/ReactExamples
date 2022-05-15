class Human {
    constructor() {
        this.gender = 'Male';
    }

    printGender() {
        console.log(this.gender);
    }
}

const human = new Human();
human.printGender(); // Male
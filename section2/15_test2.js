class Human {
	gender = "Male";

	printGender = () => {
		console.log(this.gender);
	};
}

const human = new Human();
human.printGender(); // Male
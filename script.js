class Person {
    constructor(name, age) {
        this.name = name; // Public property
        this.age = age;   // Public property
    }

    // Getter for name
    getName() {
        return this.name;
    }

    // Setter for age
    setAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        } else {
            console.log('Age must be a positive number.');
        }
    }
}

class Student extends Person {
    study() {
        console.log(`${this.getName()} is studying.`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.getName()} is teaching.`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

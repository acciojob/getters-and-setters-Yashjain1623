class Person {
    constructor(name, age) {
        this._name = name; // Private property for name
        this._age = age;   // Private property for age
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(age) {
        if (age > 0) {
            this._age = age;
        } else {
            console.log('Age must be a positive number.');
        }
    }

    // Getter for age
    get age() {
        return this._age;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying.`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching.`);
    }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

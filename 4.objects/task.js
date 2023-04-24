function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let studentOne = new Student("Василиса", "женский", 19);
let studentTwo = new Student("Артём", "мужской", 25);
let studentThree = new Student("Вероника","женский", 27);

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
    if (this.marks ===  undefined) {
        return;
    }
    else {
       this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function() {
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }
    else {
        let m = 0;
        for (i = 0; i < this.marks.length; i++) {
            m += this.marks[i];
        }
    return m/this.marks.length;
    }
}

Student.prototype.exclude = function(reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}

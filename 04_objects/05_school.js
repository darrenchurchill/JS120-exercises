/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * Objects
 *
 * School
 *
 * https://launchschool.com/exercises/4a1f0eb3
 */

// eslint-disable-next-line max-lines-per-function
function createStudent(name, year) {
  return {
    name,
    year,
    /** @type {Object.<string, {name: string, code: number, grade: number}>} */
    courses: {},
    /** @type {Object.<string, Array.<string>>} */
    notes: {},

    info() {
      console.log(`${this.name} is a ${this.year} student`);
    },

    /**
     *
     * @param {{name: string, code: number}} course
     */
    addCourse(course) {
      this.courses[course.code] = course;
      this.notes[course.code] = [];
    },

    listCourses() {
      console.log(Object.values(this.courses));
    },

    addGrade(courseCode, grade) {
      this.courses[courseCode].grade = grade;
    },

    hasGrade(courseName) {
      return !Number.isNaN(Number(this.getGrade(courseName)));
    },

    getGrade(courseName) {
      let course = Object.values(this.courses).filter(
        (course) => course.name === courseName
      )[0];
      if (course) {
        if (course.grade !== undefined) return course.grade;
        return "In progress";
      }
      return `${this.name} is not taking ${courseName}`;
    },

    getGrades() {
      return Object.values(this.courses)
        .map((course) => {
          return `${course.name}: ${course.grade ? course.grade : "In progress"}`;
        })
        .join("\n");
    },

    /**
     *
     * @param {number} courseCode
     * @param {string} note
     */
    addNote(courseCode, note) {
      this.notes[courseCode].push(note);
    },

    /**
     *
     * @param {number} courseCode
     * @param {string} note
     */
    updateNote(courseCode, note) {
      this.notes[courseCode] = [note];
    },

    viewNotes() {
      for (let courseCode in this.notes) {
        console.log(
          `${this.courses[courseCode].name}:`,
          `${this.notes[courseCode].join("; ")}`
        );
      }
    },
  };
}

let school = {
  /** @type {Object.<string, {name: string, year: string, courses: {name: string, code: number, grade: number}}} */
  students: {},

  /**
   *
   * @param {string} name
   * @param {string} year
   */
  addStudent(name, year) {
    let validYears = ["1st", "2nd", "3rd", "4th", "5th"];

    if (!validYears.includes(year)) {
      console.log("Invalid Year");
      return;
    }
    let student = createStudent(name, year);
    this.students[name] = student;
    return student;
  },

  /**
   *
   * @param {string} name
   * @param {{name: string, code: number}} course
   */
  enrollStudent(name, course) {
    this.students[name].addCourse(course);
  },

  addGrade(name, courseCode, grade) {
    this.students[name].addGrade(courseCode, grade);
  },

  getReportCard(student) {
    return this.students[student.name].getGrades();
  },

  courseReport(courseName) {
    let grades = {};

    for (let student of Object.values(this.students)) {
      if (student.hasGrade(courseName)) {
        grades[student.name] = student.getGrade(courseName);
      }
    }

    if (Object.keys(grades).length > 0) {
      console.log(`=${courseName} Grades=`);
      Object.entries(grades)
        .forEach(([name, grade]) => console.log(`${name}: ${grade}`));
      console.log("---");
      console.log(
        "Course Average:",
        Object.values(grades).reduce((tot, grade) => tot + grade) /
          Object.values(grades).length
      );
    }
  },
};

let foo = school.addStudent("foo", "3rd");
school.enrollStudent("foo", {name: "Math", code: 101});
school.enrollStudent("foo", {name: "Advanced Math", code: 102});
school.enrollStudent("foo", {name: "Physics", code: 202});

let bar = school.addStudent("bar", "1st");
school.enrollStudent("bar", {name: "Math", code: 101});

let qux = school.addStudent("qux", "2nd");
school.enrollStudent("qux", {name: "Math", code: 101});
school.enrollStudent("qux", {name: "Advanced Math", code: 102});

school.addGrade("foo", 101, 95);
school.addGrade("foo", 102, 90);

school.addGrade("bar", 101, 91);

school.addGrade("qux", 101, 93);
school.addGrade("qux", 102, 90);

console.log(school.getReportCard(foo));

school.courseReport("Math");
school.courseReport("Advanced Math");
school.courseReport("Physics");

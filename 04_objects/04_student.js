/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * Objects
 *
 * Student
 *
 * https://launchschool.com/exercises/0a8aaa5c
 */

// eslint-disable-next-line max-lines-per-function
function createStudent(name, year) {
  return {
    name,
    year,
    /** @type {Object.<string, {name: string, code: number}>} */
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

let foo = createStudent('Foo', '1st');

foo.info();
// "Foo is a 1st year student"

foo.listCourses();
// [];

foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]

foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"

foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"

foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"

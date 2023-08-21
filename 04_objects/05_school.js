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
  addStudent(name, year) {

  },

  enrollStudent(name, course) {

  },

  addGrade(name, course) {

  },

  getReportCard(name) {

  },

  courseReport(course) {

  },
};
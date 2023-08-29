class Student {
  constructor(name, year, course) {
    this.name = name;
    this.year = year;
    this.course = course;
  }
  updateCourse(newCourse) {
    this.course = newCourse;
  }
}

export default Student;

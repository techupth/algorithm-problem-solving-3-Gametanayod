function sortStudentsByScore(students) {
  for (let i = students.length - 1; i > 0; i--) {
    for (let j = 0; j < students.length; j++) {
      if (students[j].score > students[j + 1].score) {
        [students[j], students[j + 1]] = [students[j + 1], students[j]];
      }
    }
  }
  return students;
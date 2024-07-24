students = [
  { id: "S004", name: "Dao", score: 95 },
  { id: "S002", name: "Boon", score: 92 },
  { id: "S005", name: "Ek", score: 88 },
  { id: "S001", name: "Anan", score: 85 },
  { id: "S006", name: "Fah", score: 80 },
  { id: "S003", name: "Chai", score: 78 },
];

function sortStudentsByScore(students) {
  for (let i = students.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (students[j].score < students[j + 1].score) {
        [students[j], students[j + 1]] = [students[j + 1], students[j]];
      }
    }
  }
  return students;
}

console.log(sortStudentsByScore(students));

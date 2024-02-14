/* exported getStudentNames */
const getStudentNames = (students: { name: string }[]): string[] => {
  const newArray: string[] = [];
  for (let i = 0; i < students.length; i++) {
    newArray.push(students[i].name);
  }
  return newArray;
};

function getGrade(s1, s2, s3) {
  let grades = [s1, s2, s3];

  let gradesSum = 0;
  for (let i = 0; i < grades.length; i++) {
    gradesSum += grades[i];
  }

  let averageGrade = gradesSum / grades.length;
  
  let letterOfAverageGrade = averageGrade >= 90 ? 'A'
    : averageGrade >= 80 ? 'B'
    : averageGrade >= 70 ? 'C'
    : averageGrade >= 60 ? 'D'
    : 'F';
  return letterOfAverageGrade
}
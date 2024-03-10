// Array of student names
let studentNames = ['Jacob ', 'Boazooz', 'Kitty'];

// Array of scores corresponding to each student
let studentScores = [620, 530, 480];

// Total marks available for each student
const totalMarks = 500;

// Function to calculate the percentage
function calculatePercentage(score) {
  return (score / totalMarks) * 100;
}

// Iterate over the student names to display their scores and percentages
for (let i = 0; i < studentNames.length; i++) {
  const score = studentScores[i];
  const percentage = calculatePercentage(score);
  console.log(`Score of ${studentNames[i]} is ${score}. Percentage: ${percentage.toFixed(0)}%`);
}

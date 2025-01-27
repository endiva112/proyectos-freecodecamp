function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  function getGrade(score) {
  
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));
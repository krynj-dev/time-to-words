const numberArray = [
  "twelve", "one", "two", "three", "four", "five", 
  "six", "seven", "eight", "nine", "ten", 
  "eleven", "twelve", "thirteen", "fourteen", "quarter", 
  "sixteen", "seventeen", "eighteen", "nineteen", "twenty", 
  "twenty-one", "twenty-two", "twenty-three", "twenty-four", 
  "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", 
  "twenty-nine", "half"
];

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time == '12:00')
  {
    return "midday";
  }
  let hour = parseInt(time.split(':')[0]) % 12;
  let minute = parseInt(time.split(':')[1]);
  if (minute === 0)
  {
    return numberArray[hour] + " o'clock";
  } else if (minute <= 30)
  {
    return numberArray[minute] + " past " + numberArray[hour];
  } else if (minute > 30)
  {
    return numberArray[60 - minute] + " to " + numberArray[hour+1];
  }
  // Return an error or something default
}

module.exports = { convertTimeToWords };
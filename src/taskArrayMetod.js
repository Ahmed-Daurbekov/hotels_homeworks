// Задача 1
function sumNumericFields(obj) {
  let sum = 0;
  for (const key in obj) {
      if (typeof obj[key] === 'number') {
          sum += obj[key];
      }
  }
  return sum;
}

const example1 = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };
console.log(sumNumericFields(example1));

// Задача со звездочкой
function sortedNumericFieldNames(obj) {
  const numericFields = [];

  for (const key in obj) {
      if (typeof obj[key] === 'number') {
          numericFields.push({ field: key, value: obj[key] });
      }
  }

  numericFields.sort((a, b) => b.value - a.value);

  return numericFields.map(field => field.field);
}

const example2 = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };
console.log(sortedNumericFieldNames(example2)); 

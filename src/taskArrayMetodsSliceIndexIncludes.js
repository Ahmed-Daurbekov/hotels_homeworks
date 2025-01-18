// Метод mySlice 
function mySlice(arr, start = 0, end = arr.length) {
  const result = [];
  const len = arr.length;

  start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  end = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

  for (let i = start; i < end; i++) {
      result.push(arr[i]);
  }
  return result;
}

// Метод myIndexOf
function myIndexOf(arr, item, from = 0) {
  const len = arr.length;
  from = from < 0 ? Math.max(len + from, 0) : from;

  for (let i = from; i < len; i++) {
      if (arr[i] === item) {
          return i;
      }
  }
  return -1;
}

// Метод myIncludes
function myIncludes(arr, item, from = 0) {
  const len = arr.length;
  from = from < 0 ? Math.max(len + from, 0) : from;

  for (let i = from; i < len; i++) {
      if (arr[i] === item) {
          return true;
      }
  }
  return false;
}

const exampleArray = [1, 2, 3, 4, 5];

console.log(mySlice(exampleArray, 1, 4)); // Вывод: [2, 3, 4]
console.log(myIndexOf(exampleArray, 3));  // Вывод: 2
console.log(myIncludes(exampleArray, 4)); // Вывод: true

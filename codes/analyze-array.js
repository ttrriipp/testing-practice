export default function analyzeArray(arr) {
  const obj = {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: getLength(arr),
  };

  return obj;
}

function getAverage(arr) {
  const sum = arr.reduce((previous, current) => previous + current);

  return sum / arr.length;
}

function getMin(arr) {
  const min = arr.reduce((previous, current) => {
    previous = previous < current ? previous : current;
    return previous;
  });

  return min;
}

function getMax(arr) {
  const max = arr.reduce((previous, current) => {
    previous = previous > current ? previous : current;
    return previous;
  });

  return max;
}

function getLength(arr) {
  return arr.length;
}

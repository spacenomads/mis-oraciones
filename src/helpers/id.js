function getHigherNumber(acc, value) {
  if (acc > value.id) {
    return acc;
  } else {
    return value.id;
  }
}

function getNextId(arr) {
  const highIndex = arr.reduce(getHigherNumber, 0);
  return highIndex;
}





export {
  getNextId,
}
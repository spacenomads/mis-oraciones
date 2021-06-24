function sortByCompletionDate(a, b) {
  const date_a = new Date(a.completion_date);
  const date_b = new Date(b.completion_date);
  return date_a > date_b;
}





function sortByCompletedTask(a, b) {
  if (a.completed) {
    return 1;
  }
  if (b.completed) {
    return -1;
  }
  return 0;
}




export {
  sortByCompletionDate,
  sortByCompletedTask
}
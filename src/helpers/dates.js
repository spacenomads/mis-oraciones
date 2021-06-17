const DAYS_LIMIT = 5;
function getDaysAgo(taskDate) {
  const date = new Date(taskDate);
  const formattedDate = date.toISOString().split('T')[0];
  const localFormattedDate = formattedDate.split('-').reverse().join('-');

  const today = new Date();
  const completion_date = new Date(formattedDate);
  const timeinmilisec = today.getTime() - completion_date.getTime();
  const days = Math.floor(timeinmilisec / (1000 * 60 * 60 * 24));

  let response = 'Hoy';
  if (days === 1) response = 'Ayer';
  if (days > 1) response = `Hace ${days} días`;

  return days > DAYS_LIMIT ? localFormattedDate : response;
}





export {
  getDaysAgo
};
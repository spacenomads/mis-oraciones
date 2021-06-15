function getDaysAgo(taskDate) {
  const date = new Date(taskDate);
  const formattedDate = date.toISOString().split('T')[0];

  const today = new Date();
  const completion_date = new Date(formattedDate);
  const timeinmilisec = today.getTime() - completion_date.getTime();
  const days = Math.floor(timeinmilisec / (1000 * 60 * 60 * 24));

  let response = 'Hoy';
  if (days === 1) response = 'Ayer';
  if (days > 1) response = `Hace ${days} días`;

  return response;
}





export {
  getDaysAgo
};
function formatDate(dateString, customOptions = {
  weekday: 'short',
  month: 'short',
  day: 'numeric'
}) {
  const date = new Date(dateString);
  const options = customOptions;
  return date.toLocaleDateString('en-US', options);
}

export default formatDate;
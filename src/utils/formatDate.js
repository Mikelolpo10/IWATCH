export default function formatDate(dateStr) {
  const date = new Date(dateStr);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);

  return formattedDate
}
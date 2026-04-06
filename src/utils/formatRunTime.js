export default function formatRuntime(min) {
  const h = Math.floor(min / 60);
  const m = min % 60;

  if (h !== 0) {
    return `${h}h ${m}min`;
  } else {
    return `${m}min`;
  }
}





export const formatDate = (date) => {
  const hrs = new Date(date).getHours();
  const mins = new Date(date).getMinutes();

  return `${hrs < 10 ? "0" + hrs : hrs}:${mins < 10 ? "0" + mins : mins} `;
};

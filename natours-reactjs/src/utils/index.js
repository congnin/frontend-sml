export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export function convertUTCDateToLocalDate(date) {
  const newDate = new Date(
    date.getTime() + date.getTimezoneOffset() * 60 * 1000
  );

  const offset = date.getTimezoneOffset() / 60;
  const hours = date.getHours();

  newDate.setHours(hours - offset);

  return newDate;
}

export function getLocaleDateString(dateString) {
  const date = convertUTCDateToLocalDate(new Date(dateString));
  return date.toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
  });
}

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export function getRandom100() {
  return getRandomIntInclusive(1, 100);
}

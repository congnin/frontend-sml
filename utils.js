const setTextByElementId = (elementId, text) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = text;
  }
};

const setValueByElementId = (elementId, value) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.value = value;
  }
};

const getValueByElementId = (elementId) => {
  const element = document.getElementById(elementId);
  return element ? element.value : null;
};

const setBackgroundImageByElementId = (elementId, imageUrl) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.backgroundImage = `url(${imageUrl || AppConstants.DEFAULT_IMAGE_URL})`;
  }
}

const getBackgroundImageByElementId = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const url = element.style.backgroundImage;
    const firstDoubleQuotePosition = url.indexOf("\"");
    const lastDoubleQuotePosition = url.lastIndexOf("\"");
    return url.substring(firstDoubleQuotePosition + 1, lastDoubleQuotePosition);
  }
}
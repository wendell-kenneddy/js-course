const paragraphsContainer = document.getElementById('paragraphs-container');
const paragraphList = paragraphsContainer.querySelectorAll('p');
const bodyStyles = getComputedStyle(document.body)

const generateRandomRGBNumber = () => {
  const rgbNumber = Math.round(Math.random() * 255)
  return rgbNumber;
}

const generateRandomRGB = () => {
  const rgb = `rgb(${generateRandomRGBNumber()}, ${generateRandomRGBNumber()}, ${generateRandomRGBNumber()})`;
  return rgb;
}

for (let p of paragraphList) {
  p.style.backgroundColor = bodyStyles.backgroundColor;
  p.style.color = generateRandomRGB();

  setInterval(() => {
    p.style.color = generateRandomRGB();
  }, 1000)
}

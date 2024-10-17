const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary-color');
const secondaryColor = getComputedStyle(document.body).getPropertyValue('--secondary-color');
const accent1Color = getComputedStyle(document.body).getPropertyValue('--accent1-color');
const accent2Color = getComputedStyle(document.body).getPropertyValue('--accent2-color');

const paletteUrl = `https://coolors.co/${primaryColor.substring(1)}-${secondaryColor.substring(1)}-${accent1Color.substring(1)}-${accent2Color.substring(1)}`;

document.querySelector('#palette-url').setAttribute('src', paletteUrl);
document.querySelector('#palette-url').textContent = paletteUrl;
document.querySelector('td.primary').textContent   = `[${primaryColor}]`;
document.querySelector('td.secondary').textContent = `[${secondaryColor}]`;
document.querySelector('td.accent1').textContent   = `[${accent1Color}]`;
document.querySelector('td.accent2').textContent   = `[${accent2Color}]`;


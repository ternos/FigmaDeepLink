console.log('Figma Deep Link cheacker activated');

let url = window.location.href;
let figmaURL = 'https://www.figma.com/file/';

if(url.substring(0, 27) === figmaURL) {
  let appURL = 'figma://file/' + url.substring(27)
  console.log(appURL);
  window.location = appURL
}
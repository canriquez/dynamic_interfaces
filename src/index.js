

import './styles/header.css';
import './styles/main.css';
import rockSvg from './images/01/rocky-dashed.svg';
import downArrow from './images/01/downarrow.png';


let image = document.getElementById("rocky-dashed")
image.src = rockSvg;

let arrowTag = document.getElementById('downarrow')
arrowTag.src = downArrow;
document.body.className += "js-loading";

document.addEventListener('DOMContentLoaded', () => {
  document.body.className = document.body.className.replace("js-loading", "");

});
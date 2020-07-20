
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/header.css';
import './styles/main.css';
import rockSvg from './images/01/rocky-dashed.svg';
import downArrow from './images/01/downarrow.png';


let image = document.getElementById("rocky-dashed")
image.src = rockSvg;

let arrowTag = document.getElementById('downarrow')
arrowTag.src = downArrow;
document.body.className += "js-loading";

const processInput = function processInput() {
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const element = this.getAttribute('data-input');
  console.log('I got here :' + element);
  switch (element) {
    case 'email':
      console.log(this.value);
      const t1 = this.value.length === 0;
      const t2 = !emailRegExp.test(this.value);
      let htmlTag = ''
      if (t1) { htmlTag += 'Cannot be empty.' };
      if (t2) { htmlTag += 'Valid email please.' }

      console.log("current error :" + htmlTag)
      //Check valid email
      let errorBox = document.getElementById('e-' + element);
      errorBox.innerHTML = htmlTag;
      errorBox.classList.add('show-me-error');
      if (!t1 && !t2) {
        errorBox.classList.remove('show-me-error');
      }
      break;
  }

}

console.log('I am here, outside of DOMContentLoaded');

document.addEventListener('DOMContentLoaded', () => {
  document.body.className = document.body.className.replace("js-loading", "");
  /* 
    const form = document.getElementById('form')[0];
    const password = document.getElementById('password');
    const address1 = document.getElementById('address1');
    const address2 = document.getElementById('address2');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const check = document.getElementById('check');
    const email = document.getElementById('mail'); */
  console.log('I am here');
  const inputFields = document.getElementsByClassName('form-input');
  for (let i = 0; i < inputFields.length; i += 1) {
    console.log('adding listeners')
    inputFields[i].addEventListener('change', processInput, false);
  }

});
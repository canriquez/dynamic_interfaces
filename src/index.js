
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/header.css';
import './styles/main.css';
import rockSvg from './images/01/rocky-dashed.svg';
import downArrow from './images/01/downarrow.png';


const image = document.getElementById('rocky-dashed');
image.src = rockSvg;

const arrowTag = document.getElementById('downarrow');
arrowTag.src = downArrow;
document.body.className += 'js-loading';

const processInput = function processInput() {
  let t1; let t2; let
    errorBox;
  let htmlTag = '';
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const element = this.getAttribute('data-input');
  console.log(`I got here :${element} with value: ${this.value}`);

  switch (element) {
    case 'email':
      console.log(this.value);
      t1 = this.value.length === 0;
      t2 = !emailRegExp.test(this.value);
      htmlTag = '';
      if (t1) { htmlTag += 'Cannot be empty.'; }
      if (t2) { htmlTag += 'Valid email please.'; }

      console.log(`current error :${htmlTag}`);
      // Check valid email
      errorBox = document.getElementById(`e-${element}`);
      errorBox.innerHTML = htmlTag;
      errorBox.classList.add('show-me-error');
      if (!t1 && !t2) {
        errorBox.classList.remove('show-me-error');
      }
      break;

    case 'pass':
      console.log(`i am inside of :${this.value}`);
      t1 = this.value.length === 0;
      t2 = !passRegExp.test(this.value);
      htmlTag = '';
      if (t1) { htmlTag += 'not empty.'; }
      if (t2) { htmlTag += 'min 8 char long, one letter and one number:'; }

      console.log(`current error :${htmlTag}`);
      // Check valid password
      errorBox = document.getElementById(`e-${element}`);
      console.log(`${'looking to update : ' + 'e-'}${element}`);
      errorBox.innerHTML = htmlTag;
      errorBox.classList.add('show-me-error');
      if (!t1 && !t2) {
        errorBox.classList.remove('show-me-error');
      }
      break;

    case 'add1':
      console.log(`i am inside of :${this.value}`);
      t1 = this.value.length > 8;
      t2 = true;
      htmlTag = '';
      if (!t1) { htmlTag += 'more than 8 charachters please.'; }

      console.log(`current error flag :${t1} error is: ${htmlTag}`);
      // Check valid password
      errorBox = document.getElementById(`e-${element}`);
      console.log(`${'looking to update : ' + 'e-'}${element}`);
      errorBox.innerHTML = htmlTag;
      errorBox.classList.add('show-me-error');
      if (!t1 && !t2) {
        errorBox.classList.remove('show-me-error');
      }
      break;
    case 'add2':
      console.log(`i am inside of :${this.value}`);
      t1 = this.value.length > 8;
      t2 = true;
      htmlTag = '';
      if (!t1) { htmlTag += 'more than 8 charachters please.'; }

      console.log(`current error flag :${t1} error is: ${htmlTag}`);
      // Check valid password
      errorBox = document.getElementById(`e-${element}`);
      console.log(`${'looking to update : ' + 'e-'}${element}`);
      errorBox.innerHTML = htmlTag;
      errorBox.classList.add('show-me-error');
      if (!t1 && !t2) {
        errorBox.classList.remove('show-me-error');
      }
      break;
    case 'city':
      console.log(`i am inside of :${this.value}`);
      t1 = this.value.length > 8;
      t2 = true;
      htmlTag = '';
      if (!t1) { htmlTag += 'more than 8 charachters please.'; }

      console.log(`current error flag :${t1} error is: ${htmlTag}`);
      // Check valid password
      errorBox = document.getElementById(`e-${element}`);
      console.log(`${'looking to update : ' + 'e-'}${element}`);
      errorBox.innerHTML = htmlTag;
      errorBox.classList.add('show-me-error');
      if (!t1 && !t2) {
        errorBox.classList.remove('show-me-error');
      }
      break;
    case 'state':
      console.log(`i am inside of :${this.value}`);
      t1 = this.value != 'Choose...';
      t2 = true;
      htmlTag = '';
      if (!t1) { htmlTag += 'select an option please'; }

      console.log(`current error flag :${t1} error is: ${htmlTag}`);
      // Check valid password
      errorBox = document.getElementById(`e-${element}`);
      console.log(`${'looking to update : ' + 'e-'}${element}`);
      errorBox.innerHTML = htmlTag;
      errorBox.classList.add('show-me-error');
      if (!t1 && !t2) {
        errorBox.classList.remove('show-me-error');
      }
      break;
    case 'zip':
      console.log(`i am inside of :${this.value}`);
      t1 = !isNaN(this.value);
      t2 = true;
      htmlTag = '';
      if (!t1) { htmlTag += 'number please'; }

      console.log(`current error flag :${t1} error is: ${htmlTag}`);
      // Check valid password
      errorBox = document.getElementById(`e-${element}`);
      console.log(`${'looking to update : ' + 'e-'}${element}`);
      errorBox.innerHTML = htmlTag;
      errorBox.classList.add('show-me-error');
      if (!t1 && !t2) {
        errorBox.classList.remove('show-me-error');
      }
      break;
    default:
      console.log('none matching');
      break;
  }
};

console.log('I am here, outside of DOMContentLoaded');

document.addEventListener('DOMContentLoaded', () => {
  document.body.className = document.body.className.replace('js-loading', '');
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
    console.log('adding listeners');
    inputFields[i].addEventListener('change', processInput, false);
  }
});
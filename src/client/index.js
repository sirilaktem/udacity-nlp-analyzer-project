//Import JS
import { checkEmptyInput, checkValidUrl } from './js/inputChecker.js';
import {
    handleSubmit,
    postData,
    formatResult,
    translatePolarity,
} from './js/formHandler.js';

//Import styles
import './styles/global.scss';
import './styles/style.scss';
import './styles/responsive.scss';

//Import image
import logoImg from './images/logo.svg';

const logo = document.getElementById('logo');
logo.src = logoImg;

export {
    checkEmptyInput,
    checkValidUrl,
    handleSubmit,
    postData,
    formatResult,
    translatePolarity,
};

//Import JS
import { checkEmptyInput, checkValidUrl } from './js/inputChecker';
import {
    handleSubmit,
    postData,
    formatResult,
    translatePolarity,
} from './js/formHandler';

//Import styles
import './styles/global.scss';
import './styles/style.scss';
import './styles/responsive.scss';

//Import image
import logoImg from './images/logo.svg';

const logo = document.getElementById('logo');
logo.src = logoImg;

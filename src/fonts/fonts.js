import { createGlobalStyle } from 'styled-components';

import RobtronikaRegular from 'fonts/Robtronika-Regular.woff';
import RobtronikaRegular2 from 'fonts/Robtronika-Regular.woff2';

import RobtronikaItalic from 'fonts/Robtronika-Italic.woff';
import RobtronikaItalic2 from 'fonts/Robtronika-Italic.woff2';

export default createGlobalStyle`
 @font-face {

        font-family: 'Robtronika-Regular';
        src: local('Robtronika-Regular'), local('RobtronikaRegular'),
        url(${RobtronikaRegular}) format('woff'),
        url(${RobtronikaRegular2}) format('woff2');
        font-weight: 300;
        font-style: normal;

    }
     @font-face {

        font-family: 'Robtronika-Italic';
        src: local('Robtronika-Italic'), local('RobtronikaItalic'),
        url(${RobtronikaItalic}) format('woff'),
        url(${RobtronikaItalic2}) format('woff2');
        font-weight: 300;
        font-style: normal;

    }
`;

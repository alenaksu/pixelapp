/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import '@spectrum-web-components/slider';
import '@spectrum-web-components/bundle';
import '@spectrum-web-components/themes';
import './ui/components/App/index';

import image from 'url:../public/imgs/colosseo.jpg';

fetch(image)
    .then((response) => response.blob())
    .then((blob) => {
        document.querySelector('pis-app').imageSrc = URL.createObjectURL(new File([blob], 'image.jpg'));
    });

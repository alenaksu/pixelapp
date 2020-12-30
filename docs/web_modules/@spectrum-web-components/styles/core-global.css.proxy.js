if(typeof document!="undefined"){const e=`/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/* stylelint-disable */
:root,
:host {
    /* spectrum-animationGlobals.css */
    --spectrum-global-animation-duration-0: 0ms;
    --spectrum-global-animation-duration-100: 130ms;
    --spectrum-global-animation-duration-200: 160ms;
    --spectrum-global-animation-duration-300: 190ms;
    --spectrum-global-animation-duration-400: 220ms;
    --spectrum-global-animation-duration-500: 250ms;
    --spectrum-global-animation-duration-600: 300ms;
    --spectrum-global-animation-duration-700: 350ms;
    --spectrum-global-animation-duration-800: 400ms;
    --spectrum-global-animation-duration-900: 450ms;
    --spectrum-global-animation-duration-1000: 500ms;
    --spectrum-global-animation-duration-2000: 1000ms;
    --spectrum-global-animation-duration-4000: 2000ms;
    --spectrum-global-animation-ease-in-out: cubic-bezier(0.45, 0, 0.4, 1);
    --spectrum-global-animation-ease-in: cubic-bezier(0.5, 0, 1, 1);
    --spectrum-global-animation-ease-out: cubic-bezier(0, 0, 0.4, 1);
    --spectrum-global-animation-linear: cubic-bezier(0, 0, 1, 1);

    /* spectrum-colorGlobals.css */
    --spectrum-global-color-status: Verified;
    --spectrum-global-color-version: 5.1;
    --spectrum-global-color-static-black: rgb(0, 0, 0);
    --spectrum-global-color-static-white: rgb(255, 255, 255);
    --spectrum-global-color-static-blue: rgb(20, 115, 230);
    --spectrum-global-color-static-gray-50: rgb(255, 255, 255);
    --spectrum-global-color-static-gray-75: rgb(255, 255, 255);
    --spectrum-global-color-static-gray-100: rgb(255, 255, 255);
    --spectrum-global-color-static-gray-200: rgb(244, 244, 244);
    --spectrum-global-color-static-gray-300: rgb(234, 234, 234);
    --spectrum-global-color-static-gray-400: rgb(211, 211, 211);
    --spectrum-global-color-static-gray-500: rgb(188, 188, 188);
    --spectrum-global-color-static-gray-600: rgb(149, 149, 149);
    --spectrum-global-color-static-gray-700: rgb(116, 116, 116);
    --spectrum-global-color-static-gray-800: rgb(80, 80, 80);
    --spectrum-global-color-static-gray-900: rgb(50, 50, 50);
    --spectrum-global-color-static-blue-200: rgb(90, 169, 250);
    --spectrum-global-color-static-blue-300: rgb(75, 156, 245);
    --spectrum-global-color-static-blue-400: rgb(55, 142, 240);
    --spectrum-global-color-static-blue-500: rgb(38, 128, 235);
    --spectrum-global-color-static-blue-600: rgb(20, 115, 230);
    --spectrum-global-color-static-blue-700: rgb(13, 102, 208);
    --spectrum-global-color-static-blue-800: rgb(9, 90, 186);
    --spectrum-global-color-static-red-400: rgb(236, 91, 98);
    --spectrum-global-color-static-red-500: rgb(227, 72, 80);
    --spectrum-global-color-static-red-600: rgb(215, 55, 63);
    --spectrum-global-color-static-red-700: rgb(201, 37, 45);
    --spectrum-global-color-static-orange-400: rgb(242, 148, 35);
    --spectrum-global-color-static-orange-500: rgb(230, 134, 25);
    --spectrum-global-color-static-orange-600: rgb(218, 123, 17);
    --spectrum-global-color-static-orange-700: rgb(203, 111, 16);
    --spectrum-global-color-static-green-400: rgb(51, 171, 132);
    --spectrum-global-color-static-green-500: rgb(45, 157, 120);
    --spectrum-global-color-static-green-600: rgb(38, 142, 108);
    --spectrum-global-color-static-green-700: rgb(18, 128, 92);
    --spectrum-global-color-static-celery-200: rgb(88, 224, 111);
    --spectrum-global-color-static-celery-300: rgb(81, 210, 103);
    --spectrum-global-color-static-celery-400: rgb(75, 195, 95);
    --spectrum-global-color-static-celery-500: rgb(68, 181, 86);
    --spectrum-global-color-static-celery-600: rgb(61, 167, 78);
    --spectrum-global-color-static-celery-700: rgb(55, 153, 71);
    --spectrum-global-color-static-chartreuse-300: rgb(155, 236, 84);
    --spectrum-global-color-static-chartreuse-400: rgb(142, 222, 73);
    --spectrum-global-color-static-chartreuse-500: rgb(133, 208, 68);
    --spectrum-global-color-static-chartreuse-600: rgb(124, 195, 63);
    --spectrum-global-color-static-chartreuse-700: rgb(115, 181, 58);
    --spectrum-global-color-static-yellow-200: rgb(255, 226, 46);
    --spectrum-global-color-static-yellow-300: rgb(250, 217, 0);
    --spectrum-global-color-static-yellow-400: rgb(237, 204, 0);
    --spectrum-global-color-static-yellow-500: rgb(223, 191, 0);
    --spectrum-global-color-static-yellow-600: rgb(210, 178, 0);
    --spectrum-global-color-static-yellow-700: rgb(196, 166, 0);
    --spectrum-global-color-static-magenta-200: rgb(245, 107, 183);
    --spectrum-global-color-static-magenta-300: rgb(236, 90, 170);
    --spectrum-global-color-static-magenta-400: rgb(226, 73, 157);
    --spectrum-global-color-static-magenta-500: rgb(216, 55, 144);
    --spectrum-global-color-static-magenta-600: rgb(202, 41, 130);
    --spectrum-global-color-static-magenta-700: rgb(188, 28, 116);
    --spectrum-global-color-static-fuchsia-400: rgb(207, 62, 220);
    --spectrum-global-color-static-fuchsia-500: rgb(192, 56, 204);
    --spectrum-global-color-static-fuchsia-600: rgb(177, 48, 189);
    --spectrum-global-color-static-fuchsia-700: rgb(162, 40, 173);
    --spectrum-global-color-static-purple-400: rgb(157, 100, 225);
    --spectrum-global-color-static-purple-500: rgb(146, 86, 217);
    --spectrum-global-color-static-purple-600: rgb(134, 76, 204);
    --spectrum-global-color-static-purple-700: rgb(122, 66, 191);
    --spectrum-global-color-static-purple-800: rgb(111, 56, 177);
    --spectrum-global-color-static-indigo-200: rgb(144, 144, 250);
    --spectrum-global-color-static-indigo-300: rgb(130, 130, 246);
    --spectrum-global-color-static-indigo-400: rgb(117, 117, 241);
    --spectrum-global-color-static-indigo-500: rgb(103, 103, 236);
    --spectrum-global-color-static-indigo-600: rgb(92, 92, 224);
    --spectrum-global-color-static-indigo-700: rgb(81, 81, 211);
    --spectrum-global-color-static-seafoam-200: rgb(38, 192, 199);
    --spectrum-global-color-static-seafoam-300: rgb(35, 178, 184);
    --spectrum-global-color-static-seafoam-400: rgb(32, 163, 168);
    --spectrum-global-color-static-seafoam-500: rgb(27, 149, 154);
    --spectrum-global-color-static-seafoam-600: rgb(22, 135, 140);
    --spectrum-global-color-static-seafoam-700: rgb(15, 121, 125);
    --spectrum-global-color-opacity-100: 1;
    --spectrum-global-color-opacity-90: 0.9;
    --spectrum-global-color-opacity-80: 0.8;
    --spectrum-global-color-opacity-60: 0.6;
    --spectrum-global-color-opacity-50: 0.5;
    --spectrum-global-color-opacity-42: 0.42;
    --spectrum-global-color-opacity-40: 0.4;
    --spectrum-global-color-opacity-30: 0.3;
    --spectrum-global-color-opacity-25: 0.25;
    --spectrum-global-color-opacity-20: 0.2;
    --spectrum-global-color-opacity-15: 0.15;
    --spectrum-global-color-opacity-10: 0.1;
    --spectrum-global-color-opacity-8: 0.08;
    --spectrum-global-color-opacity-7: 0.07;
    --spectrum-global-color-opacity-6: 0.06;
    --spectrum-global-color-opacity-5: 0.05;
    --spectrum-global-color-opacity-4: 0.04;

    /* spectrum-colorSemantics.css */
    --spectrum-semantic-negative-color-background: var(
        --spectrum-global-color-static-red-700
    );
    --spectrum-semantic-negative-color-default: var(
        --spectrum-global-color-red-500
    );
    --spectrum-semantic-negative-color-state-hover: var(
        --spectrum-global-color-red-600
    );
    --spectrum-semantic-negative-color-dark: var(
        --spectrum-global-color-red-600
    );
    --spectrum-semantic-negative-color-border: var(
        --spectrum-global-color-red-400
    );
    --spectrum-semantic-negative-color-icon: var(
        --spectrum-global-color-red-600
    );
    --spectrum-semantic-negative-color-status: var(
        --spectrum-global-color-red-400
    );
    --spectrum-semantic-negative-color-text-large: var(
        --spectrum-global-color-red-500
    );
    --spectrum-semantic-negative-color-text-small: var(
        --spectrum-global-color-red-600
    );
    --spectrum-semantic-negative-color-state-down: var(
        --spectrum-global-color-red-700
    );
    --spectrum-semantic-negative-color-state-focus: var(
        --spectrum-global-color-red-400
    );
    --spectrum-semantic-notice-color-background: var(
        --spectrum-global-color-static-orange-700
    );
    --spectrum-semantic-notice-color-default: var(
        --spectrum-global-color-orange-500
    );
    --spectrum-semantic-notice-color-dark: var(
        --spectrum-global-color-orange-600
    );
    --spectrum-semantic-notice-color-border: var(
        --spectrum-global-color-orange-400
    );
    --spectrum-semantic-notice-color-icon: var(
        --spectrum-global-color-orange-600
    );
    --spectrum-semantic-notice-color-status: var(
        --spectrum-global-color-orange-400
    );
    --spectrum-semantic-notice-color-text-large: var(
        --spectrum-global-color-orange-500
    );
    --spectrum-semantic-notice-color-text-small: var(
        --spectrum-global-color-orange-600
    );
    --spectrum-semantic-notice-color-state-down: var(
        --spectrum-global-color-orange-700
    );
    --spectrum-semantic-notice-color-state-focus: var(
        --spectrum-global-color-orange-400
    );
    --spectrum-semantic-positive-color-background: var(
        --spectrum-global-color-static-green-700
    );
    --spectrum-semantic-positive-color-default: var(
        --spectrum-global-color-green-500
    );
    --spectrum-semantic-positive-color-dark: var(
        --spectrum-global-color-green-600
    );
    --spectrum-semantic-positive-color-border: var(
        --spectrum-global-color-green-400
    );
    --spectrum-semantic-positive-color-icon: var(
        --spectrum-global-color-green-600
    );
    --spectrum-semantic-positive-color-status: var(
        --spectrum-global-color-green-400
    );
    --spectrum-semantic-positive-color-text-large: var(
        --spectrum-global-color-green-500
    );
    --spectrum-semantic-positive-color-text-small: var(
        --spectrum-global-color-green-600
    );
    --spectrum-semantic-positive-color-state-down: var(
        --spectrum-global-color-green-700
    );
    --spectrum-semantic-positive-color-state-focus: var(
        --spectrum-global-color-green-400
    );
    --spectrum-semantic-informative-color-background: var(
        --spectrum-global-color-static-blue-700
    );
    --spectrum-semantic-informative-color-default: var(
        --spectrum-global-color-blue-500
    );
    --spectrum-semantic-informative-color-dark: var(
        --spectrum-global-color-blue-600
    );
    --spectrum-semantic-informative-color-border: var(
        --spectrum-global-color-blue-400
    );
    --spectrum-semantic-informative-color-icon: var(
        --spectrum-global-color-blue-600
    );
    --spectrum-semantic-informative-color-status: var(
        --spectrum-global-color-blue-400
    );
    --spectrum-semantic-informative-color-text-large: var(
        --spectrum-global-color-blue-500
    );
    --spectrum-semantic-informative-color-text-small: var(
        --spectrum-global-color-blue-600
    );
    --spectrum-semantic-informative-color-state-down: var(
        --spectrum-global-color-blue-700
    );
    --spectrum-semantic-informative-color-state-focus: var(
        --spectrum-global-color-blue-400
    );
    --spectrum-semantic-cta-color-background-default: var(
        --spectrum-global-color-static-blue-600
    );
    --spectrum-semantic-cta-color-background-hover: var(
        --spectrum-global-color-static-blue-700
    );
    --spectrum-semantic-cta-color-background-down: var(
        --spectrum-global-color-static-blue-800
    );
    --spectrum-semantic-cta-color-background-key-focus: var(
        --spectrum-global-color-static-blue-600
    );
    --spectrum-semantic-background-color-key-focus: var(
        --spectrum-global-color-static-blue-600
    );
    --spectrum-semantic-neutral-color-background: var(
        --spectrum-global-color-static-gray-700
    );
    --spectrum-semantic-presence-color-1: var(
        --spectrum-global-color-static-red-500
    );
    --spectrum-semantic-presence-color-2: var(
        --spectrum-global-color-static-orange-400
    );
    --spectrum-semantic-presence-color-3: var(
        --spectrum-global-color-static-yellow-400
    );
    --spectrum-semantic-presence-color-4: rgb(75, 204, 162);
    --spectrum-semantic-presence-color-5: rgb(0, 199, 255);
    --spectrum-semantic-presence-color-6: rgb(0, 140, 184);
    --spectrum-semantic-presence-color-7: rgb(126, 75, 243);
    --spectrum-semantic-presence-color-8: var(
        --spectrum-global-color-static-fuchsia-600
    );

    /* spectrum-dimensionGlobals.css */
    --spectrum-global-dimension-static-size-0: 0px;
    --spectrum-global-dimension-static-size-10: 1px;
    --spectrum-global-dimension-static-size-25: 2px;
    --spectrum-global-dimension-static-size-50: 4px;
    --spectrum-global-dimension-static-size-40: 3px;
    --spectrum-global-dimension-static-size-65: 5px;
    --spectrum-global-dimension-static-size-100: 8px;
    --spectrum-global-dimension-static-size-115: 9px;
    --spectrum-global-dimension-static-size-125: 10px;
    --spectrum-global-dimension-static-size-130: 11px;
    --spectrum-global-dimension-static-size-150: 12px;
    --spectrum-global-dimension-static-size-160: 13px;
    --spectrum-global-dimension-static-size-175: 14px;
    --spectrum-global-dimension-static-size-200: 16px;
    --spectrum-global-dimension-static-size-225: 18px;
    --spectrum-global-dimension-static-size-250: 20px;
    --spectrum-global-dimension-static-size-300: 24px;
    --spectrum-global-dimension-static-size-400: 32px;
    --spectrum-global-dimension-static-size-450: 36px;
    --spectrum-global-dimension-static-size-500: 40px;
    --spectrum-global-dimension-static-size-550: 44px;
    --spectrum-global-dimension-static-size-600: 48px;
    --spectrum-global-dimension-static-size-700: 56px;
    --spectrum-global-dimension-static-size-800: 64px;
    --spectrum-global-dimension-static-size-900: 72px;
    --spectrum-global-dimension-static-size-1000: 80px;
    --spectrum-global-dimension-static-size-1200: 96px;
    --spectrum-global-dimension-static-size-1700: 136px;
    --spectrum-global-dimension-static-size-2400: 192px;
    --spectrum-global-dimension-static-size-2600: 208px;
    --spectrum-global-dimension-static-size-3400: 272px;
    --spectrum-global-dimension-static-size-3600: 288px;
    --spectrum-global-dimension-static-size-4600: 368px;
    --spectrum-global-dimension-static-size-5000: 400px;
    --spectrum-global-dimension-static-size-6000: 480px;
    --spectrum-global-dimension-static-font-size-50: 11px;
    --spectrum-global-dimension-static-font-size-75: 12px;
    --spectrum-global-dimension-static-font-size-100: 14px;
    --spectrum-global-dimension-static-font-size-150: 15px;
    --spectrum-global-dimension-static-font-size-200: 16px;
    --spectrum-global-dimension-static-font-size-300: 18px;
    --spectrum-global-dimension-static-font-size-400: 20px;
    --spectrum-global-dimension-static-font-size-500: 22px;
    --spectrum-global-dimension-static-font-size-600: 25px;
    --spectrum-global-dimension-static-font-size-700: 28px;
    --spectrum-global-dimension-static-font-size-800: 32px;
    --spectrum-global-dimension-static-font-size-900: 36px;
    --spectrum-global-dimension-static-font-size-1000: 40px;
    --spectrum-global-dimension-static-percent-50: 50%;
    --spectrum-global-dimension-static-percent-100: 100%;
    --spectrum-global-dimension-static-breakpoint-xsmall: 304px;
    --spectrum-global-dimension-static-breakpoint-small: 768px;
    --spectrum-global-dimension-static-breakpoint-medium: 1280px;
    --spectrum-global-dimension-static-breakpoint-large: 1768px;
    --spectrum-global-dimension-static-breakpoint-xlarge: 2160px;
    --spectrum-global-dimension-static-grid-columns: 12;
    --spectrum-global-dimension-static-grid-fluid-width: 100%;
    --spectrum-global-dimension-static-grid-fixed-max-width: 1280px;

    /* spectrum-fontGlobals.css */
    --spectrum-global-font-family-base: adobe-clean, 'Source Sans Pro',
        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu,
        'Trebuchet MS', 'Lucida Grande', sans-serif;
    --spectrum-global-font-family-serif: adobe-clean-serif, 'Source Serif Pro',
        Georgia, serif;
    --spectrum-global-font-family-code: 'Source Code Pro', Monaco, monospace;
    --spectrum-global-font-weight-thin: 100;
    --spectrum-global-font-weight-ultra-light: 200;
    --spectrum-global-font-weight-light: 300;
    --spectrum-global-font-weight-regular: 400;
    --spectrum-global-font-weight-medium: 500;
    --spectrum-global-font-weight-semi-bold: 600;
    --spectrum-global-font-weight-bold: 700;
    --spectrum-global-font-weight-extra-bold: 800;
    --spectrum-global-font-weight-black: 900;
    --spectrum-global-font-style-regular: normal;
    --spectrum-global-font-style-italic: italic;
    --spectrum-global-font-letter-spacing-none: 0;
    --spectrum-global-font-letter-spacing-small: 0.0125em;
    --spectrum-global-font-letter-spacing-han: 0.05em;
    --spectrum-global-font-letter-spacing-medium: 0.06em;
    --spectrum-global-font-line-height-large: 1.7;
    --spectrum-global-font-line-height-medium: 1.5;
    --spectrum-global-font-line-height-small: 1.3;
    --spectrum-global-font-multiplier-25: 0.25em;
    --spectrum-global-font-multiplier-75: 0.75em;

    /* spectrum-staticAliases.css */
    --spectrum-alias-border-size-thin: var(
        --spectrum-global-dimension-static-size-10
    );
    --spectrum-alias-border-size-thick: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-alias-border-size-thicker: var(
        --spectrum-global-dimension-static-size-50
    );
    --spectrum-alias-border-size-thickest: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-alias-border-offset-thin: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-alias-border-offset-thick: var(
        --spectrum-global-dimension-static-size-50
    );
    --spectrum-alias-border-offset-thicker: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-alias-border-offset-thickest: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-alias-grid-baseline: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-alias-grid-gutter-xsmall: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-alias-grid-gutter-small: var(
        --spectrum-global-dimension-static-size-300
    );
    --spectrum-alias-grid-gutter-medium: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-alias-grid-gutter-large: var(
        --spectrum-global-dimension-static-size-500
    );
    --spectrum-alias-grid-gutter-xlarge: var(
        --spectrum-global-dimension-static-size-600
    );
    --spectrum-alias-grid-margin-xsmall: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-alias-grid-margin-small: var(
        --spectrum-global-dimension-static-size-300
    );
    --spectrum-alias-grid-margin-medium: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-alias-grid-margin-large: var(
        --spectrum-global-dimension-static-size-500
    );
    --spectrum-alias-grid-margin-xlarge: var(
        --spectrum-global-dimension-static-size-600
    );
    --spectrum-alias-grid-layout-region-margin-bottom-xsmall: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-alias-grid-layout-region-margin-bottom-small: var(
        --spectrum-global-dimension-static-size-300
    );
    --spectrum-alias-grid-layout-region-margin-bottom-medium: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-alias-grid-layout-region-margin-bottom-large: var(
        --spectrum-global-dimension-static-size-500
    );
    --spectrum-alias-grid-layout-region-margin-bottom-xlarge: var(
        --spectrum-global-dimension-static-size-600
    );
    --spectrum-alias-radial-reaction-size-default: var(
        --spectrum-global-dimension-static-size-550
    );
    --spectrum-alias-font-family-ar: myriad-arabic, adobe-clean,
        'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Ubuntu, 'Trebuchet MS', 'Lucida Grande', sans-serif;
    --spectrum-alias-font-family-he: myriad-hebrew, adobe-clean,
        'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Ubuntu, 'Trebuchet MS', 'Lucida Grande', sans-serif;
    --spectrum-alias-font-family-zh: adobe-clean-han-traditional,
        source-han-traditional, 'MingLiu', 'Heiti TC Light', 'sans-serif';
    --spectrum-alias-font-family-zhhans: adobe-clean-han-simplified-c,
        source-han-simplified-c, 'SimSun', 'Heiti SC Light', 'sans-serif';
    --spectrum-alias-font-family-ko: adobe-clean-han-korean, source-han-korean,
        'Malgun Gothic', 'Apple Gothic', 'sans-serif';
    --spectrum-alias-font-family-ja: adobe-clean-han-japanese,
        source-han-japanese, 'Yu Gothic', '\\\\30E1 \\\\30A4 \\\\30EA \\\\30AA',
        '\\\\30D2 \\\\30E9 \\\\30AE \\\\30CE \\\\89D2 \\\\30B4  Pro W3',
        'Hiragino Kaku Gothic Pro W3', 'Osaka',
        '\\\\FF2D \\\\FF33 \\\\FF30 \\\\30B4 \\\\30B7 \\\\30C3 \\\\30AF', 'MS PGothic',
        'sans-serif';
    --spectrum-alias-font-family-condensed: adobe-clean-han-traditional,
        source-han-traditional, 'MingLiu', 'Heiti TC Light', adobe-clean,
        'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Ubuntu, 'Trebuchet MS', 'Lucida Grande', sans-serif;
    --spectrum-alias-line-height-body: var(
        --spectrum-global-font-line-height-medium
    );
    --spectrum-alias-line-height-title: var(
        --spectrum-global-font-line-height-small
    );
    --spectrum-alias-body-han-text-line-height: var(
        --spectrum-global-font-line-height-large
    );
    --spectrum-alias-body-text-font-family: var(
        --spectrum-global-font-family-base
    );
    --spectrum-alias-body-text-line-height: var(
        --spectrum-global-font-line-height-medium
    );
    --spectrum-alias-body-text-font-weight: var(
        --spectrum-global-font-weight-regular
    );
    --spectrum-alias-body-text-font-weight-strong: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-button-text-line-height: var(
        --spectrum-global-font-line-height-small
    );
    --spectrum-alias-heading-han-text-line-height: var(
        --spectrum-global-font-line-height-medium
    );
    --spectrum-alias-heading-text-line-height: var(
        --spectrum-global-font-line-height-small
    );
    --spectrum-alias-heading-text-font-weight-regular: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-heading-text-font-weight-regular-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-heading-text-font-weight-quiet: var(
        --spectrum-global-font-weight-light
    );
    --spectrum-alias-heading-text-font-weight-quiet-strong: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-heading-text-font-weight-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-heading-text-font-weight-strong-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-subheading-text-font-weight: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-subheading-text-font-weight-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-detail-text-font-weight: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-detail-text-font-weight-light: var(
        --spectrum-global-font-weight-regular
    );
    --spectrum-alias-detail-text-font-weight-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-serif-text-font-family: var(
        --spectrum-global-font-family-serif
    );
    --spectrum-alias-article-text-font-family: var(
        --spectrum-global-font-family-serif
    );
    --spectrum-alias-article-body-text-font-weight: var(
        --spectrum-global-font-weight-regular
    );
    --spectrum-alias-article-body-text-font-weight-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-article-heading-text-font-weight: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-article-heading-text-font-weight-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-article-heading-text-font-weight-quiet: var(
        --spectrum-global-font-weight-regular
    );
    --spectrum-alias-article-heading-text-font-weight-quiet-strong: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-article-subheading-text-font-weight: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-article-subheading-text-font-weight-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-article-detail-text-font-weight: var(
        --spectrum-global-font-weight-regular
    );
    --spectrum-alias-article-detail-text-font-weight-strong: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-code-text-font-family: var(
        --spectrum-global-font-family-code
    );
    --spectrum-alias-han-heading-text-font-weight-regular: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-han-heading-text-font-weight-regular-emphasis: var(
        --spectrum-global-font-weight-extra-bold
    );
    --spectrum-alias-han-heading-text-font-weight-regular-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-han-heading-text-font-weight-quiet: var(
        --spectrum-global-font-weight-light
    );
    --spectrum-alias-han-heading-text-font-weight-quiet-emphasis: var(
        --spectrum-global-font-weight-regular
    );
    --spectrum-alias-han-heading-text-font-weight-quiet-strong: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-han-heading-text-font-weight-light: var(
        --spectrum-global-font-weight-light
    );
    --spectrum-alias-han-heading-text-font-weight-light-emphasis: var(
        --spectrum-global-font-weight-regular
    );
    --spectrum-alias-han-heading-text-font-weight-light-strong: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-han-heading-text-font-weight-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-han-heading-text-font-weight-strong-emphasis: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-han-heading-text-font-weight-strong-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-han-heading-text-font-weight-heavy: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-han-heading-text-font-weight-heavy-emphasis: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-han-heading-text-font-weight-heavy-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-han-body-text-font-weight-regular: var(
        --spectrum-global-font-weight-regular
    );
    --spectrum-alias-han-body-text-font-weight-emphasis: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-han-body-text-font-weight-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-han-subheading-text-font-weight-regular: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-han-subheading-text-font-weight-emphasis: var(
        --spectrum-global-font-weight-extra-bold
    );
    --spectrum-alias-han-subheading-text-font-weight-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-han-detail-text-font-weight: var(
        --spectrum-global-font-weight-regular
    );
    --spectrum-alias-han-detail-text-font-weight-emphasis: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-han-detail-text-font-weight-strong: var(
        --spectrum-global-font-weight-black
    );
    --spectrum-alias-code-text-font-weight-regular: var(
        --spectrum-global-font-weight-regular
    );
    --spectrum-alias-code-text-font-weight-strong: var(
        --spectrum-global-font-weight-bold
    );
    --spectrum-alias-code-text-line-height: var(
        --spectrum-global-font-line-height-medium
    );
    --spectrum-alias-heading-margin-bottom: var(
        --spectrum-global-font-multiplier-25
    );
    --spectrum-alias-body-margin-bottom: var(
        --spectrum-global-font-multiplier-75
    );
    --spectrum-alias-focus-ring-gap: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-alias-focus-ring-size: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-alias-loupe-entry-animation-duration: var(
        --spectrum-global-animation-duration-300
    );
    --spectrum-alias-loupe-exit-animation-duration: var(
        --spectrum-global-animation-duration-300
    );
}

:root,
:host {
    /* spectrum-dimensionAliases.css */
    --spectrum-alias-dropshadow-blur: var(--spectrum-global-dimension-size-50);
    --spectrum-alias-dropshadow-offset-y: var(
        --spectrum-global-dimension-size-10
    );
    --spectrum-alias-font-size-default: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-alias-line-height-small: var(
        --spectrum-global-dimension-size-200
    );
    --spectrum-alias-line-height-medium: var(
        --spectrum-global-dimension-size-250
    );
    --spectrum-alias-line-height-large: var(
        --spectrum-global-dimension-size-300
    );
    --spectrum-alias-line-height-xlarge: var(
        --spectrum-global-dimension-size-400
    );
    --spectrum-alias-line-height-xxlarge: var(
        --spectrum-global-dimension-size-600
    );
    --spectrum-alias-layout-label-gap-size: var(
        --spectrum-global-dimension-size-100
    );
    --spectrum-alias-pill-button-text-size: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-alias-pill-button-text-baseline: var(
        --spectrum-global-dimension-static-size-150
    );
    --spectrum-alias-border-radius-xsmall: var(
        --spectrum-global-dimension-size-10
    );
    --spectrum-alias-border-radius-small: var(
        --spectrum-global-dimension-size-25
    );
    --spectrum-alias-border-radius-regular: var(
        --spectrum-global-dimension-size-50
    );
    --spectrum-alias-border-radius-medium: var(
        --spectrum-global-dimension-size-100
    );
    --spectrum-alias-border-radius-large: var(
        --spectrum-global-dimension-size-200
    );
    --spectrum-alias-single-line-height: var(
        --spectrum-global-dimension-size-400
    );
    --spectrum-alias-single-line-width: var(
        --spectrum-global-dimension-size-2400
    );
    --spectrum-alias-workflow-icon-size: var(
        --spectrum-global-dimension-size-225
    );
    --spectrum-alias-heading-display1-text-size: var(
        --spectrum-global-dimension-font-size-1300
    );
    --spectrum-alias-heading-xxxl-text-size: var(
        --spectrum-global-dimension-font-size-1300
    );
    --spectrum-alias-heading-han-display1-text-size: var(
        --spectrum-global-dimension-font-size-1300
    );
    --spectrum-alias-heading-han-xxxl-text-size: var(
        --spectrum-global-dimension-font-size-1300
    );
    --spectrum-alias-heading-han-display1-margin-top: var(
        --spectrum-global-dimension-font-size-1200
    );
    --spectrum-alias-heading-han-xxxl-margin-top: var(
        --spectrum-global-dimension-font-size-1200
    );
    --spectrum-alias-heading-display1-margin-top: var(
        --spectrum-global-dimension-font-size-1200
    );
    --spectrum-alias-heading-xxxl-margin-top: var(
        --spectrum-global-dimension-font-size-1200
    );
    --spectrum-alias-heading-display2-text-size: var(
        --spectrum-global-dimension-font-size-1100
    );
    --spectrum-alias-heading-xxl-text-size: var(
        --spectrum-global-dimension-font-size-1100
    );
    --spectrum-alias-heading-display2-margin-top: var(
        --spectrum-global-dimension-font-size-900
    );
    --spectrum-alias-heading-xxl-margin-top: var(
        --spectrum-global-dimension-font-size-900
    );
    --spectrum-alias-heading-han-display2-text-size: var(
        --spectrum-global-dimension-font-size-900
    );
    --spectrum-alias-heading-han-xxl-text-size: var(
        --spectrum-global-dimension-font-size-900
    );
    --spectrum-alias-heading-han-display2-margin-top: var(
        --spectrum-global-dimension-font-size-800
    );
    --spectrum-alias-heading-han-xxl-margin-top: var(
        --spectrum-global-dimension-font-size-800
    );
    --spectrum-alias-heading1-text-size: var(
        --spectrum-global-dimension-font-size-900
    );
    --spectrum-alias-heading-xl-text-size: var(
        --spectrum-global-dimension-font-size-900
    );
    --spectrum-alias-heading1-margin-top: var(
        --spectrum-global-dimension-font-size-800
    );
    --spectrum-alias-heading-xl-margin-top: var(
        --spectrum-global-dimension-font-size-800
    );
    --spectrum-alias-heading1-han-text-size: var(
        --spectrum-global-dimension-font-size-800
    );
    --spectrum-alias-heading-han-xl-text-size: var(
        --spectrum-global-dimension-font-size-800
    );
    --spectrum-alias-heading1-han-margin-top: var(
        --spectrum-global-dimension-font-size-700
    );
    --spectrum-alias-heading-han-xl-margin-top: var(
        --spectrum-global-dimension-font-size-700
    );
    --spectrum-alias-heading2-text-size: var(
        --spectrum-global-dimension-font-size-700
    );
    --spectrum-alias-heading-l-text-size: var(
        --spectrum-global-dimension-font-size-700
    );
    --spectrum-alias-heading2-margin-top: var(
        --spectrum-global-dimension-font-size-600
    );
    --spectrum-alias-heading-l-margin-top: var(
        --spectrum-global-dimension-font-size-600
    );
    --spectrum-alias-heading2-han-text-size: var(
        --spectrum-global-dimension-font-size-600
    );
    --spectrum-alias-heading-han-l-text-size: var(
        --spectrum-global-dimension-font-size-600
    );
    --spectrum-alias-heading2-han-margin-top: var(
        --spectrum-global-dimension-font-size-500
    );
    --spectrum-alias-heading-han-l-margin-top: var(
        --spectrum-global-dimension-font-size-500
    );
    --spectrum-alias-heading3-text-size: var(
        --spectrum-global-dimension-font-size-500
    );
    --spectrum-alias-heading-m-text-size: var(
        --spectrum-global-dimension-font-size-500
    );
    --spectrum-alias-heading3-margin-top: var(
        --spectrum-global-dimension-font-size-400
    );
    --spectrum-alias-heading-m-margin-top: var(
        --spectrum-global-dimension-font-size-400
    );
    --spectrum-alias-heading3-han-text-size: var(
        --spectrum-global-dimension-font-size-400
    );
    --spectrum-alias-heading-han-m-text-size: var(
        --spectrum-global-dimension-font-size-400
    );
    --spectrum-alias-heading3-han-margin-top: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-alias-heading-han-m-margin-top: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-alias-heading4-text-size: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-alias-heading-s-text-size: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-alias-heading4-margin-top: var(
        --spectrum-global-dimension-font-size-200
    );
    --spectrum-alias-heading-s-margin-top: var(
        --spectrum-global-dimension-font-size-200
    );
    --spectrum-alias-heading5-text-size: var(
        --spectrum-global-dimension-font-size-200
    );
    --spectrum-alias-heading-xs-text-size: var(
        --spectrum-global-dimension-font-size-200
    );
    --spectrum-alias-heading5-margin-top: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-alias-heading-xs-margin-top: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-alias-heading6-text-size: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-alias-heading-xxs-text-size: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-alias-heading6-margin-top: var(
        --spectrum-global-dimension-font-size-75
    );
    --spectrum-alias-heading-xxs-margin-top: var(
        --spectrum-global-dimension-font-size-75
    );
}

:root,
:host {
    /* spectrum-colorAliases.css */
    --spectrum-alias-background-color-default: var(
        --spectrum-global-color-gray-100
    );
    --spectrum-alias-background-color-transparent: transparent;
    --spectrum-alias-background-color-label-gray: rgb(112, 112, 112);
    --spectrum-alias-background-color-quickactions-overlay: rgba(0, 0, 0, 0.2);
    --spectrum-alias-placeholder-text-color: var(
        --spectrum-global-color-gray-600
    );
    --spectrum-alias-placeholder-text-color-hover: var(
        --spectrum-global-color-gray-900
    );
    --spectrum-alias-placeholder-text-color-down: var(
        --spectrum-global-color-gray-900
    );
    --spectrum-alias-placeholder-text-color-selected: var(
        --spectrum-global-color-gray-800
    );
    --spectrum-alias-label-text-color: var(--spectrum-global-color-gray-700);
    --spectrum-alias-text-color: var(--spectrum-global-color-gray-800);
    --spectrum-alias-text-color-hover: var(--spectrum-global-color-gray-900);
    --spectrum-alias-text-color-down: var(--spectrum-global-color-gray-900);
    --spectrum-alias-text-color-key-focus: var(
        --spectrum-global-color-blue-600
    );
    --spectrum-alias-text-color-mouse-focus: var(
        --spectrum-global-color-blue-600
    );
    --spectrum-alias-text-color-disabled: var(--spectrum-global-color-gray-500);
    --spectrum-alias-text-color-invalid: var(--spectrum-global-color-red-500);
    --spectrum-alias-text-color-selected: var(--spectrum-global-color-blue-600);
    --spectrum-alias-text-color-selected-neutral: var(
        --spectrum-global-color-gray-900
    );
    --spectrum-alias-title-text-color: var(--spectrum-global-color-gray-900);
    --spectrum-alias-heading-text-color: var(--spectrum-global-color-gray-900);
    --spectrum-alias-border-color: var(--spectrum-global-color-gray-400);
    --spectrum-alias-border-color-hover: var(--spectrum-global-color-gray-500);
    --spectrum-alias-border-color-down: var(--spectrum-global-color-gray-500);
    --spectrum-alias-border-color-focus: var(--spectrum-global-color-blue-400);
    --spectrum-alias-border-color-mouse-focus: var(
        --spectrum-global-color-blue-500
    );
    --spectrum-alias-border-color-disabled: var(
        --spectrum-global-color-gray-200
    );
    --spectrum-alias-border-color-extralight: var(
        --spectrum-global-color-gray-100
    );
    --spectrum-alias-border-color-light: var(--spectrum-global-color-gray-200);
    --spectrum-alias-border-color-mid: var(--spectrum-global-color-gray-300);
    --spectrum-alias-border-color-dark: var(--spectrum-global-color-gray-400);
    --spectrum-alias-border-color-transparent: transparent;
    --spectrum-alias-border-color-translucent-dark: rgba(0, 0, 0, 0.05);
    --spectrum-alias-border-color-translucent-darker: rgba(0, 0, 0, 0.1);
    --spectrum-alias-focus-color: var(--spectrum-global-color-blue-400);
    --spectrum-alias-focus-ring-color: var(--spectrum-alias-focus-color);
    --spectrum-alias-track-color-default: var(--spectrum-global-color-gray-300);
    --spectrum-alias-track-color-disabled: var(
        --spectrum-global-color-gray-300
    );
    --spectrum-alias-track-color-over-background: rgba(255, 255, 255, 0.2);
    --spectrum-alias-icon-color: var(--spectrum-global-color-gray-700);
    --spectrum-alias-icon-color-over-background: var(
        --spectrum-global-color-static-white
    );
    --spectrum-alias-icon-color-hover: var(--spectrum-global-color-gray-900);
    --spectrum-alias-icon-color-down: var(--spectrum-global-color-gray-900);
    --spectrum-alias-icon-color-focus: var(--spectrum-global-color-gray-900);
    --spectrum-alias-icon-color-disabled: var(--spectrum-global-color-gray-400);
    --spectrum-alias-icon-color-selected-neutral: var(
        --spectrum-global-color-gray-900
    );
    --spectrum-alias-icon-color-selected: var(--spectrum-global-color-blue-500);
    --spectrum-alias-icon-color-selected-hover: var(
        --spectrum-global-color-blue-600
    );
    --spectrum-alias-icon-color-selected-down: var(
        --spectrum-global-color-blue-700
    );
    --spectrum-alias-icon-color-selected-focus: var(
        --spectrum-global-color-blue-600
    );
    --spectrum-alias-icon-color-error: var(--spectrum-global-color-red-400);
    --spectrum-alias-toolbar-background-color: var(
        --spectrum-global-color-gray-100
    );
    --spectrum-alias-colorhandle-outer-border-color: rgba(0, 0, 0, 0.42);
    --spectrum-alias-categorical-color-1: var(
        --spectrum-global-color-static-seafoam-200
    );
    --spectrum-alias-categorical-color-2: var(
        --spectrum-global-color-static-indigo-700
    );
    --spectrum-alias-categorical-color-3: var(
        --spectrum-global-color-static-orange-500
    );
    --spectrum-alias-categorical-color-4: var(
        --spectrum-global-color-static-magenta-500
    );
    --spectrum-alias-categorical-color-5: var(
        --spectrum-global-color-static-indigo-200
    );
    --spectrum-alias-categorical-color-6: var(
        --spectrum-global-color-static-celery-200
    );
    --spectrum-alias-categorical-color-7: var(
        --spectrum-global-color-static-blue-500
    );
    --spectrum-alias-categorical-color-8: var(
        --spectrum-global-color-static-purple-800
    );
    --spectrum-alias-categorical-color-9: var(
        --spectrum-global-color-static-yellow-500
    );
    --spectrum-alias-categorical-color-10: var(
        --spectrum-global-color-static-orange-700
    );
    --spectrum-alias-categorical-color-11: var(
        --spectrum-global-color-static-green-600
    );
    --spectrum-alias-categorical-color-12: var(
        --spectrum-global-color-static-chartreuse-300
    );
    --spectrum-alias-categorical-color-13: var(
        --spectrum-global-color-static-blue-200
    );
    --spectrum-alias-categorical-color-14: var(
        --spectrum-global-color-static-fuchsia-500
    );
    --spectrum-alias-categorical-color-15: var(
        --spectrum-global-color-static-magenta-200
    );
    --spectrum-alias-categorical-color-16: var(
        --spectrum-global-color-static-yellow-200
    );
}

/* stylelint-enable */
`,a=document.createElement("style"),t=document.createTextNode(e);a.type="text/css",a.appendChild(t),document.head.appendChild(a)}

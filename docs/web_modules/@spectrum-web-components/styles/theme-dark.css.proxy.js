if(typeof document!="undefined"){const o=`/*
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
    --spectrum-global-color-status: Verified;
    --spectrum-global-color-version: 5.1;
    --spectrum-global-color-celery-400: rgb(68, 181, 86);
    --spectrum-global-color-celery-500: rgb(75, 195, 95);
    --spectrum-global-color-celery-600: rgb(81, 210, 103);
    --spectrum-global-color-celery-700: rgb(88, 224, 111);
    --spectrum-global-color-chartreuse-400: rgb(133, 208, 68);
    --spectrum-global-color-chartreuse-500: rgb(142, 222, 73);
    --spectrum-global-color-chartreuse-600: rgb(155, 236, 84);
    --spectrum-global-color-chartreuse-700: rgb(163, 248, 88);
    --spectrum-global-color-yellow-400: rgb(223, 191, 0);
    --spectrum-global-color-yellow-500: rgb(237, 204, 0);
    --spectrum-global-color-yellow-600: rgb(250, 217, 0);
    --spectrum-global-color-yellow-700: rgb(255, 226, 46);
    --spectrum-global-color-magenta-400: rgb(216, 55, 144);
    --spectrum-global-color-magenta-500: rgb(226, 73, 157);
    --spectrum-global-color-magenta-600: rgb(236, 90, 170);
    --spectrum-global-color-magenta-700: rgb(245, 107, 183);
    --spectrum-global-color-fuchsia-400: rgb(192, 56, 204);
    --spectrum-global-color-fuchsia-500: rgb(207, 62, 220);
    --spectrum-global-color-fuchsia-600: rgb(217, 81, 229);
    --spectrum-global-color-fuchsia-700: rgb(227, 102, 239);
    --spectrum-global-color-purple-400: rgb(146, 86, 217);
    --spectrum-global-color-purple-500: rgb(157, 100, 225);
    --spectrum-global-color-purple-600: rgb(168, 115, 233);
    --spectrum-global-color-purple-700: rgb(180, 131, 240);
    --spectrum-global-color-indigo-400: rgb(103, 103, 236);
    --spectrum-global-color-indigo-500: rgb(117, 117, 241);
    --spectrum-global-color-indigo-600: rgb(130, 130, 246);
    --spectrum-global-color-indigo-700: rgb(144, 144, 250);
    --spectrum-global-color-seafoam-400: rgb(27, 149, 154);
    --spectrum-global-color-seafoam-500: rgb(32, 163, 168);
    --spectrum-global-color-seafoam-600: rgb(35, 178, 184);
    --spectrum-global-color-seafoam-700: rgb(38, 192, 199);
    --spectrum-global-color-red-400: rgb(227, 72, 80);
    --spectrum-global-color-red-500: rgb(236, 91, 98);
    --spectrum-global-color-red-600: rgb(247, 109, 116);
    --spectrum-global-color-red-700: rgb(255, 123, 130);
    --spectrum-global-color-orange-400: rgb(230, 134, 25);
    --spectrum-global-color-orange-500: rgb(242, 148, 35);
    --spectrum-global-color-orange-600: rgb(249, 164, 63);
    --spectrum-global-color-orange-700: rgb(255, 181, 91);
    --spectrum-global-color-green-400: rgb(45, 157, 120);
    --spectrum-global-color-green-500: rgb(51, 171, 132);
    --spectrum-global-color-green-600: rgb(57, 185, 144);
    --spectrum-global-color-green-700: rgb(63, 200, 156);
    --spectrum-global-color-blue-400: rgb(38, 128, 235);
    --spectrum-global-color-blue-500: rgb(55, 142, 240);
    --spectrum-global-color-blue-600: rgb(75, 156, 245);
    --spectrum-global-color-blue-700: rgb(90, 169, 250);
    --spectrum-global-color-gray-50: rgb(37, 37, 37);
    --spectrum-global-color-gray-75: rgb(47, 47, 47);
    --spectrum-global-color-gray-100: rgb(50, 50, 50);
    --spectrum-global-color-gray-200: rgb(62, 62, 62);
    --spectrum-global-color-gray-300: rgb(74, 74, 74);
    --spectrum-global-color-gray-400: rgb(90, 90, 90);
    --spectrum-global-color-gray-500: rgb(110, 110, 110);
    --spectrum-global-color-gray-600: rgb(144, 144, 144);
    --spectrum-global-color-gray-700: rgb(185, 185, 185);
    --spectrum-global-color-gray-800: rgb(227, 227, 227);
    --spectrum-global-color-gray-900: rgb(255, 255, 255);
    --spectrum-alias-background-color-modal-overlay: rgba(0, 0, 0, 0.5);
    --spectrum-alias-dropshadow-color: rgba(0, 0, 0, 0.5);
    --spectrum-alias-background-color-hover-overlay: rgba(255, 255, 255, 0.06);
    --spectrum-alias-highlight-hover: rgba(255, 255, 255, 0.07);
    --spectrum-alias-highlight-active: rgba(255, 255, 255, 0.1);
    --spectrum-alias-highlight-selected: rgba(55, 142, 240, 0.15);
    --spectrum-alias-highlight-selected-hover: rgba(55, 142, 240, 0.25);
    --spectrum-alias-text-highlight-color: rgba(55, 142, 240, 0.25);
    --spectrum-alias-background-color-quickactions: rgba(50, 50, 50, 0.9);
    --spectrum-alias-radial-reaction-color-default: rgba(227, 227, 227, 0.6);
    --spectrum-alias-pasteboard-background-color: var(
        --spectrum-global-color-gray-50
    );
    --spectrum-alias-appframe-border-color: var(
        --spectrum-global-color-gray-50
    );
    --spectrum-alias-appframe-separator-color: var(
        --spectrum-global-color-gray-50
    );
    --spectrum-colorarea-border-color: rgba(255, 255, 255, 0.1);
    --spectrum-colorarea-border-color-hover: rgba(255, 255, 255, 0.1);
    --spectrum-colorarea-border-color-down: rgba(255, 255, 255, 0.1);
    --spectrum-colorarea-border-color-key-focus: rgba(255, 255, 255, 0.1);
    --spectrum-colorslider-border-color: rgba(255, 255, 255, 0.1);
    --spectrum-colorslider-border-color-hover: rgba(255, 255, 255, 0.1);
    --spectrum-colorslider-border-color-down: rgba(255, 255, 255, 0.1);
    --spectrum-colorslider-border-color-key-focus: rgba(255, 255, 255, 0.1);
    --spectrum-colorslider-vertical-border-color: rgba(255, 255, 255, 0.1);
    --spectrum-colorslider-vertical-border-color-hover: rgba(
        255,
        255,
        255,
        0.1
    );
    --spectrum-colorslider-vertical-border-color-down: rgba(255, 255, 255, 0.1);
    --spectrum-colorslider-vertical-border-color-key-focus: rgba(
        255,
        255,
        255,
        0.1
    );
    --spectrum-colorwheel-border-color: rgba(255, 255, 255, 0.1);
    --spectrum-colorwheel-border-color-hover: rgba(255, 255, 255, 0.1);
    --spectrum-colorwheel-border-color-down: rgba(255, 255, 255, 0.1);
    --spectrum-colorwheel-border-color-key-focus: rgba(255, 255, 255, 0.1);
    --spectrum-miller-column-item-background-color-selected: rgba(
        55,
        142,
        240,
        0.1
    );
    --spectrum-miller-column-item-background-color-selected-hover: rgba(
        55,
        142,
        240,
        0.2
    );
    --spectrum-tabs-compact-selection-indicator-color: var(
        --spectrum-global-color-blue-500
    );
    --spectrum-tabs-compact-vertical-rule-color: var(
        --spectrum-global-color-gray-200
    );
    --spectrum-tabs-compact-vertical-emphasized-selection-indicator-color: var(
        --spectrum-global-color-blue-500
    );
    --spectrum-tabs-compact-vertical-emphasized-rule-color: var(
        --spectrum-global-color-gray-200
    );
    --spectrum-tabs-emphasized-selection-indicator-color: var(
        --spectrum-global-color-blue-500
    );
    --spectrum-tabs-quiet-compact-emphasized-selection-indicator-color: var(
        --spectrum-global-color-blue-500
    );
    --spectrum-tabs-quiet-compact-vertical-emphasized-selection-indicator-color: var(
        --spectrum-global-color-blue-500
    );
    --spectrum-tabs-quiet-emphasized-selection-indicator-color: var(
        --spectrum-global-color-blue-500
    );
    --spectrum-tabs-quiet-vertical-emphasized-selection-indicator-color: var(
        --spectrum-global-color-blue-500
    );
    --spectrum-tray-background-color: var(--spectrum-global-color-gray-100);
    --spectrum-well-background-color: rgba(227, 227, 227, 0.02);
    --spectrum-well-border-color: rgba(255, 255, 255, 0.05);
}

/* stylelint-enable */
`,r=document.createElement("style"),l=document.createTextNode(o);r.type="text/css",r.appendChild(l),document.head.appendChild(r)}
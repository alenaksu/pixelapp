if(typeof document!="undefined"){const i=`/*
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
:host,
:root {
    --spectrum-global-dimension-scale-factor: 1;
    --spectrum-global-dimension-size-0: 0px;
    --spectrum-global-dimension-size-10: 1px;
    --spectrum-global-dimension-size-25: 2px;
    --spectrum-global-dimension-size-40: 3px;
    --spectrum-global-dimension-size-50: 4px;
    --spectrum-global-dimension-size-65: 5px;
    --spectrum-global-dimension-size-75: 6px;
    --spectrum-global-dimension-size-85: 7px;
    --spectrum-global-dimension-size-100: 8px;
    --spectrum-global-dimension-size-115: 9px;
    --spectrum-global-dimension-size-125: 10px;
    --spectrum-global-dimension-size-130: 11px;
    --spectrum-global-dimension-size-150: 12px;
    --spectrum-global-dimension-size-160: 13px;
    --spectrum-global-dimension-size-175: 14px;
    --spectrum-global-dimension-size-185: 15px;
    --spectrum-global-dimension-size-200: 16px;
    --spectrum-global-dimension-size-225: 18px;
    --spectrum-global-dimension-size-250: 20px;
    --spectrum-global-dimension-size-275: 22px;
    --spectrum-global-dimension-size-300: 24px;
    --spectrum-global-dimension-size-325: 26px;
    --spectrum-global-dimension-size-350: 28px;
    --spectrum-global-dimension-size-400: 32px;
    --spectrum-global-dimension-size-450: 36px;
    --spectrum-global-dimension-size-500: 40px;
    --spectrum-global-dimension-size-550: 44px;
    --spectrum-global-dimension-size-600: 48px;
    --spectrum-global-dimension-size-650: 52px;
    --spectrum-global-dimension-size-675: 54px;
    --spectrum-global-dimension-size-700: 56px;
    --spectrum-global-dimension-size-750: 60px;
    --spectrum-global-dimension-size-800: 64px;
    --spectrum-global-dimension-size-900: 72px;
    --spectrum-global-dimension-size-1000: 80px;
    --spectrum-global-dimension-size-1125: 90px;
    --spectrum-global-dimension-size-1200: 96px;
    --spectrum-global-dimension-size-1250: 100px;
    --spectrum-global-dimension-size-1600: 128px;
    --spectrum-global-dimension-size-1700: 136px;
    --spectrum-global-dimension-size-1800: 144px;
    --spectrum-global-dimension-size-2000: 160px;
    --spectrum-global-dimension-size-2400: 192px;
    --spectrum-global-dimension-size-2500: 200px;
    --spectrum-global-dimension-size-3000: 240px;
    --spectrum-global-dimension-size-3400: 272px;
    --spectrum-global-dimension-size-3600: 288px;
    --spectrum-global-dimension-size-4600: 368px;
    --spectrum-global-dimension-size-5000: 400px;
    --spectrum-global-dimension-size-6000: 480px;
    --spectrum-global-dimension-font-size-25: 10px;
    --spectrum-global-dimension-font-size-50: 11px;
    --spectrum-global-dimension-font-size-75: 12px;
    --spectrum-global-dimension-font-size-100: 14px;
    --spectrum-global-dimension-font-size-150: 15px;
    --spectrum-global-dimension-font-size-200: 16px;
    --spectrum-global-dimension-font-size-300: 18px;
    --spectrum-global-dimension-font-size-400: 20px;
    --spectrum-global-dimension-font-size-500: 22px;
    --spectrum-global-dimension-font-size-600: 25px;
    --spectrum-global-dimension-font-size-700: 28px;
    --spectrum-global-dimension-font-size-800: 32px;
    --spectrum-global-dimension-font-size-900: 36px;
    --spectrum-global-dimension-font-size-1000: 40px;
    --spectrum-global-dimension-font-size-1100: 45px;
    --spectrum-global-dimension-font-size-1200: 50px;
    --spectrum-global-dimension-font-size-1300: 60px;
    --spectrum-alias-focus-ring-radius-default: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-alias-item-text-padding-top-l: var(
        --spectrum-global-dimension-size-115
    );
    --spectrum-alias-item-text-padding-bottom-s: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-alias-item-mark-padding-top-m: var(
        --spectrum-global-dimension-static-size-75
    );
    --spectrum-alias-item-mark-padding-bottom-m: var(
        --spectrum-global-dimension-static-size-75
    );
    --spectrum-alias-item-workflow-padding-left-m: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-alias-item-rounded-workflow-padding-left-m: var(
        --spectrum-global-dimension-size-175
    );
    --spectrum-alias-item-rounded-workflow-padding-left-xl: 21px;
    --spectrum-alias-item-mark-padding-left-m: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-alias-item-control-1-size-l: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-alias-item-control-1-size-xl: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-alias-item-control-2-size-s: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-alias-item-control-3-height-s: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-alias-item-control-3-width-s: 23px;
    --spectrum-alias-item-control-3-width-m: var(
        --spectrum-global-dimension-static-size-325
    );
    --spectrum-alias-item-control-3-width-l: 29px;
    --spectrum-alias-item-control-3-width-xl: 33px;
    --spectrum-alias-item-mark-size-m: var(
        --spectrum-global-dimension-size-250
    );
    --spectrum-alias-workflow-icon-size-l: var(
        --spectrum-global-dimension-static-size-250
    );
    --spectrum-alias-ui-icon-chevron-size-75: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-alias-ui-icon-chevron-size-100: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-alias-ui-icon-chevron-size-200: var(
        --spectrum-global-dimension-static-size-150
    );
    --spectrum-alias-ui-icon-chevron-size-300: var(
        --spectrum-global-dimension-static-size-175
    );
    --spectrum-alias-ui-icon-chevron-size-400: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-alias-ui-icon-chevron-size-500: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-alias-ui-icon-checkmark-size-50: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-alias-ui-icon-checkmark-size-75: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-alias-ui-icon-checkmark-size-100: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-alias-ui-icon-checkmark-size-200: var(
        --spectrum-global-dimension-static-size-150
    );
    --spectrum-alias-ui-icon-checkmark-size-300: var(
        --spectrum-global-dimension-static-size-175
    );
    --spectrum-alias-ui-icon-checkmark-size-400: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-alias-ui-icon-checkmark-size-500: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-alias-ui-icon-checkmark-size-600: var(
        --spectrum-global-dimension-static-size-225
    );
    --spectrum-alias-ui-icon-dash-size-50: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-alias-ui-icon-dash-size-75: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-alias-ui-icon-dash-size-100: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-alias-ui-icon-dash-size-200: var(
        --spectrum-global-dimension-static-size-150
    );
    --spectrum-alias-ui-icon-dash-size-300: var(
        --spectrum-global-dimension-static-size-150
    );
    --spectrum-alias-ui-icon-dash-size-400: var(
        --spectrum-global-dimension-static-size-175
    );
    --spectrum-alias-ui-icon-dash-size-500: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-alias-ui-icon-dash-size-600: var(
        --spectrum-global-dimension-static-size-225
    );
    --spectrum-alias-ui-icon-cross-size-75: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-alias-ui-icon-cross-size-100: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-alias-ui-icon-cross-size-200: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-alias-ui-icon-cross-size-300: var(
        --spectrum-global-dimension-static-size-150
    );
    --spectrum-alias-ui-icon-cross-size-400: var(
        --spectrum-global-dimension-static-size-150
    );
    --spectrum-alias-ui-icon-cross-size-500: var(
        --spectrum-global-dimension-static-size-175
    );
    --spectrum-alias-ui-icon-cross-size-600: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-alias-ui-icon-arrow-size-75: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-alias-ui-icon-arrow-size-100: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-alias-ui-icon-arrow-size-200: var(
        --spectrum-global-dimension-static-size-150
    );
    --spectrum-alias-ui-icon-arrow-size-300: var(
        --spectrum-global-dimension-static-size-175
    );
    --spectrum-alias-ui-icon-arrow-size-400: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-alias-ui-icon-arrow-size-500: var(
        --spectrum-global-dimension-static-size-225
    );
    --spectrum-alias-ui-icon-arrow-size-600: var(
        --spectrum-global-dimension-static-size-250
    );
    --spectrum-alias-ui-icon-triplegripper-size-100-width: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-alias-ui-icon-doublegripper-size-100-height: var(
        --spectrum-global-dimension-static-size-50
    );
    --spectrum-alias-ui-icon-singlegripper-size-100-height: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-alias-ui-icon-cornertriangle-size-100: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-alias-ui-icon-cornertriangle-size-300: var(
        --spectrum-global-dimension-static-size-85
    );
    --spectrum-alias-ui-icon-asterisk-size-200: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-alias-ui-icon-asterisk-size-300: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-alias-avatar-size-100: var(--spectrum-global-dimension-size-250);
    --spectrum-alias-avatar-size-400: var(--spectrum-global-dimension-size-350);
    --spectrum-alias-avatar-size-600: var(--spectrum-global-dimension-size-450);
    --spectrum-actionbutton-l-emphasized-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-emphasized-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-emphasized-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-emphasized-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-emphasized-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-emphasized-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-emphasized-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-emphasized-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-emphasized-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-emphasized-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-emphasized-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-emphasized-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-emphasized-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-emphasized-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-emphasized-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-emphasized-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-emphasized-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-emphasized-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-emphasized-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-emphasized-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-quiet-emphasized-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-quiet-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-quiet-emphasized-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-quiet-emphasized-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-quiet-emphasized-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-quiet-emphasized-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-quiet-emphasized-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-quiet-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-quiet-emphasized-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-quiet-emphasized-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-quiet-emphasized-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-quiet-emphasized-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-quiet-emphasized-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-quiet-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-quiet-emphasized-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-quiet-emphasized-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-quiet-emphasized-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-quiet-emphasized-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-quiet-emphasized-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-quiet-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-quiet-emphasized-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-quiet-emphasized-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-quiet-emphasized-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-quiet-emphasized-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-quiet-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-quiet-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-quiet-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-quiet-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-quiet-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-quiet-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-quiet-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-quiet-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-quiet-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-quiet-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-quiet-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-quiet-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-quiet-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-quiet-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-quiet-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-quiet-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-quiet-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-quiet-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-quiet-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-quiet-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-l-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-m-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-s-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-icononly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-icononly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-xl-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-breadcrumb-compact-item-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-breadcrumb-compact-button-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-breadcrumb-item-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-breadcrumb-button-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-breadcrumb-multiline-item-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-breadcrumb-multiline-button-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-l-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-l-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-m-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-cta-m-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-m-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-m-textonly-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-cta-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-s-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-s-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-xl-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-xl-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-l-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-l-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-m-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-over-background-m-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-m-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-m-textonly-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-over-background-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-s-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-s-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-xl-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-xl-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-l-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-l-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-m-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-quiet-over-background-m-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-m-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-m-textonly-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-quiet-over-background-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-s-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-s-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-xl-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-xl-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-l-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-l-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-m-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-primary-m-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-m-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-m-textonly-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-primary-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-s-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-s-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-xl-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-xl-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-l-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-l-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-m-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-quiet-primary-m-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-m-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-m-textonly-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-quiet-primary-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-s-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-s-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-xl-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-xl-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-l-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-l-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-m-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-quiet-secondary-m-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-m-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-m-textonly-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-quiet-secondary-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-s-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-s-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-xl-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-xl-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-l-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-l-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-m-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-secondary-m-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-m-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-m-textonly-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-secondary-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-s-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-s-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-xl-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-xl-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-l-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-l-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-m-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-quiet-warning-m-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-m-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-m-textonly-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-quiet-warning-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-s-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-s-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-xl-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-xl-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-l-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-l-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-m-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-warning-m-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-m-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-m-textonly-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-warning-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-s-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-s-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-xl-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-xl-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-checkbox-l-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-checkbox-m-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-checkbox-s-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-checkbox-xl-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-checkbox-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-checkbox-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-checkbox-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-checkbox-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-colorloupe-colorhandle-gap: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-colorslider-touch-hit-y: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-colorslider-vertical-touch-hit-x: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-colorwheel-min-size: var(--spectrum-global-dimension-size-2400);
    --spectrum-colorwheel-touch-hit-outer: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-colorwheel-touch-hit-inner: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-cyclebutton-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-cyclebutton-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-dialog-confirm-max-width: var(
        --spectrum-global-dimension-static-size-6000
    );
    --spectrum-dialog-confirm-title-text-size: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-dialog-confirm-description-text-size: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-dialog-confirm-padding: var(
        --spectrum-global-dimension-static-size-500
    );
    --spectrum-dialog-confirm-description-margin-bottom: var(
        --spectrum-global-dimension-static-size-600
    );
    --spectrum-dialog-destructive-max-width: var(
        --spectrum-global-dimension-static-size-6000
    );
    --spectrum-dialog-destructive-title-text-size: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-dialog-destructive-description-text-size: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-dialog-destructive-padding: var(
        --spectrum-global-dimension-static-size-500
    );
    --spectrum-dialog-destructive-description-margin-bottom: var(
        --spectrum-global-dimension-static-size-600
    );
    --spectrum-dialog-error-max-width: var(
        --spectrum-global-dimension-static-size-6000
    );
    --spectrum-dialog-error-title-text-size: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-dialog-error-description-text-size: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-dialog-error-padding: var(
        --spectrum-global-dimension-static-size-500
    );
    --spectrum-dialog-error-description-margin-bottom: var(
        --spectrum-global-dimension-static-size-600
    );
    --spectrum-dialog-info-max-width: var(
        --spectrum-global-dimension-static-size-6000
    );
    --spectrum-dialog-info-title-text-size: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-dialog-info-description-text-size: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-dialog-info-padding: var(
        --spectrum-global-dimension-static-size-500
    );
    --spectrum-dialog-info-description-margin-bottom: var(
        --spectrum-global-dimension-static-size-600
    );
    --spectrum-icon-arrow-down-small-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-arrow-left-medium-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-checkmark-medium-width: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-icon-checkmark-medium-height: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-icon-checkmark-small-width: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-checkmark-small-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-chevron-down-medium-width: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-chevron-left-large-width: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-icon-chevron-left-medium-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-chevron-right-large-width: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-icon-chevron-right-medium-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-cross-large-width: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-icon-cross-large-height: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-icon-dash-small-width: var(--spectrum-global-dimension-size-125);
    --spectrum-icon-dash-small-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-skip-left-width: 9px;
    --spectrum-icon-skip-left-height: var(--spectrum-global-dimension-size-125);
    --spectrum-icon-skip-right-width: 9px;
    --spectrum-icon-skip-right-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-triplegripper-width: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-meter-negative-m-border-radius: var(
        --spectrum-global-dimension-static-size-40
    );
    --spectrum-meter-negative-m-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-40
    );
    --spectrum-meter-negative-s-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-meter-negative-s-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-meter-negative-xl-border-radius: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-meter-negative-xl-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-meter-notice-m-border-radius: var(
        --spectrum-global-dimension-static-size-40
    );
    --spectrum-meter-notice-m-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-40
    );
    --spectrum-meter-notice-s-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-meter-notice-s-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-meter-notice-xl-border-radius: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-meter-notice-xl-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-meter-positive-m-border-radius: var(
        --spectrum-global-dimension-static-size-40
    );
    --spectrum-meter-positive-m-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-40
    );
    --spectrum-meter-positive-s-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-meter-positive-xl-border-radius: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-meter-positive-xl-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-pagination-page-button-line-height: 26px;
    --spectrum-panel-l-header-height: var(--spectrum-global-dimension-size-600);
    --spectrum-panel-l-collapsible-header-height: var(
        --spectrum-global-dimension-size-600
    );
    --spectrum-panel-s-header-height: var(--spectrum-global-dimension-size-600);
    --spectrum-panel-s-collapsible-header-height: var(
        --spectrum-global-dimension-size-600
    );
    --spectrum-picker-quiet-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-picker-quiet-l-min-width: var(
        --spectrum-global-dimension-size-250
    );
    --spectrum-picker-quiet-l-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-picker-quiet-l-textonly-min-width: var(
        --spectrum-global-dimension-size-250
    );
    --spectrum-picker-quiet-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-picker-quiet-m-min-width: var(
        --spectrum-global-dimension-size-225
    );
    --spectrum-picker-quiet-m-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-picker-quiet-m-textonly-min-width: var(
        --spectrum-global-dimension-size-225
    );
    --spectrum-picker-quiet-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-picker-quiet-s-min-width: var(
        --spectrum-global-dimension-size-200
    );
    --spectrum-picker-quiet-s-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-picker-quiet-s-textonly-min-width: var(
        --spectrum-global-dimension-size-200
    );
    --spectrum-picker-quiet-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-picker-quiet-xl-min-width: var(
        --spectrum-global-dimension-size-275
    );
    --spectrum-picker-quiet-xl-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-picker-quiet-xl-textonly-min-width: var(
        --spectrum-global-dimension-size-275
    );
    --spectrum-picker-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-l-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-l-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-m-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-m-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-s-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-s-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-xl-textonly-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-xl-textonly-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-progressbar-m-border-radius: var(
        --spectrum-global-dimension-static-size-40
    );
    --spectrum-progressbar-m-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-40
    );
    --spectrum-progressbar-s-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progressbar-s-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progressbar-xl-border-radius: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-progressbar-xl-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-progressbar-m-indeterminate-border-radius: var(
        --spectrum-global-dimension-static-size-40
    );
    --spectrum-progressbar-m-indeterminate-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-40
    );
    --spectrum-progressbar-s-indeterminate-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progressbar-s-indeterminate-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progressbar-xl-indeterminate-border-radius: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-progressbar-xl-indeterminate-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-progresscircle-medium-border-size: 3px;
    --spectrum-progresscircle-medium-over-background-border-size: 3px;
    --spectrum-progresscircle-small-border-size: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progresscircle-small-indeterminate-border-size: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progresscircle-small-over-background-border-size: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progresscircle-medium-indeterminate-border-size: 3px;
    --spectrum-radio-l-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-radio-m-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-radio-s-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-radio-xl-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-radio-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-radio-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-radio-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-radio-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-rating-icon-width: 24px;
    --spectrum-rating-indicator-width: 16px;
    --spectrum-rating-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-rating-emphasized-icon-width: 24px;
    --spectrum-rating-emphasized-indicator-width: 16px;
    --spectrum-rating-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-quiet-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-quiet-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-quiet-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-quiet-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-quiet-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-quiet-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-quiet-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-quiet-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-sidenav-item-touch-hit-bottom: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-sidenav-multilevel-item-touch-hit-bottom: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-slider-l-track-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-slider-l-handle-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-l-handle-touch-hit-y: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-m-track-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-slider-m-handle-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-m-handle-touch-hit-y: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-s-track-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-slider-s-handle-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-s-handle-touch-hit-y: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-xl-track-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-slider-xl-handle-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-xl-handle-touch-hit-y: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-editable-track-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-slider-editable-handle-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-editable-handle-touch-hit-y: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-tick-l-track-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-slider-tick-l-handle-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-tick-l-handle-touch-hit-y: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-tick-m-track-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-slider-tick-m-handle-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-tick-m-handle-touch-hit-y: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-tick-s-track-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-slider-tick-s-handle-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-tick-s-handle-touch-hit-y: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-tick-xl-track-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-slider-tick-xl-handle-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-tick-xl-handle-touch-hit-y: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-switch-l-emphasized-focus-ring-border-radius-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-l-emphasized-focus-ring-border-radius-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-l-emphasized-focus-ring-border-radius-error-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-l-emphasized-focus-ring-border-radius-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-l-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-switch-l-emphasized-handle-border-radius: 7px;
    --spectrum-switch-m-emphasized-focus-ring-border-radius-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-m-emphasized-focus-ring-border-radius-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-m-emphasized-focus-ring-border-radius-error-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-m-emphasized-focus-ring-border-radius-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-m-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-switch-m-emphasized-handle-border-radius: 7px;
    --spectrum-switch-s-emphasized-focus-ring-border-radius-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-s-emphasized-focus-ring-border-radius-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-s-emphasized-focus-ring-border-radius-error-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-s-emphasized-focus-ring-border-radius-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-s-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-switch-s-emphasized-handle-border-radius: 7px;
    --spectrum-switch-xl-emphasized-focus-ring-border-radius-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-xl-emphasized-focus-ring-border-radius-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-xl-emphasized-focus-ring-border-radius-error-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-xl-emphasized-focus-ring-border-radius-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-xl-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-switch-xl-emphasized-handle-border-radius: 7px;
    --spectrum-switch-l-focus-ring-border-radius-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-l-focus-ring-border-radius-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-l-focus-ring-border-radius-error-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-l-focus-ring-border-radius-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-switch-l-handle-border-radius: 7px;
    --spectrum-switch-m-focus-ring-border-radius-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-m-focus-ring-border-radius-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-m-focus-ring-border-radius-error-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-m-focus-ring-border-radius-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-switch-m-handle-border-radius: 7px;
    --spectrum-switch-s-focus-ring-border-radius-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-s-focus-ring-border-radius-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-s-focus-ring-border-radius-error-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-s-focus-ring-border-radius-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-switch-s-handle-border-radius: 7px;
    --spectrum-switch-xl-focus-ring-border-radius-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-xl-focus-ring-border-radius-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-xl-focus-ring-border-radius-error-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-xl-focus-ring-border-radius-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-switch-xl-handle-border-radius: 7px;
    --spectrum-tabs-quiet-s-compact-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-s-compact-emphasized-margin-left: -7px;
    --spectrum-tabs-quiet-s-compact-emphasized-margin-right: -7px;
    --spectrum-tabs-quiet-s-compact-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-s-compact-margin-left: -7px;
    --spectrum-tabs-quiet-s-compact-margin-right: -7px;
    --spectrum-tabs-quiet-s-compact-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-s-compact-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-s-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-s-emphasized-margin-left: -7px;
    --spectrum-tabs-quiet-s-emphasized-margin-right: -7px;
    --spectrum-tabs-quiet-s-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-s-margin-left: -7px;
    --spectrum-tabs-quiet-s-margin-right: -7px;
    --spectrum-tabs-quiet-s-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-s-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-m-compact-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-m-compact-emphasized-margin-left: -8px;
    --spectrum-tabs-quiet-m-compact-emphasized-margin-right: -8px;
    --spectrum-tabs-quiet-m-compact-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-m-compact-margin-left: -8px;
    --spectrum-tabs-quiet-m-compact-margin-right: -8px;
    --spectrum-tabs-quiet-m-compact-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-m-compact-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-m-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-m-emphasized-margin-left: -8px;
    --spectrum-tabs-quiet-m-emphasized-margin-right: -8px;
    --spectrum-tabs-quiet-m-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-m-margin-left: -8px;
    --spectrum-tabs-quiet-m-margin-right: -8px;
    --spectrum-tabs-quiet-m-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-m-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-l-compact-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-l-compact-emphasized-margin-left: -9px;
    --spectrum-tabs-quiet-l-compact-emphasized-margin-right: -9px;
    --spectrum-tabs-quiet-l-compact-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-l-compact-margin-left: -9px;
    --spectrum-tabs-quiet-l-compact-margin-right: -9px;
    --spectrum-tabs-quiet-l-compact-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-l-compact-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-l-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-l-emphasized-margin-left: -9px;
    --spectrum-tabs-quiet-l-emphasized-margin-right: -9px;
    --spectrum-tabs-quiet-l-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-l-margin-left: -9px;
    --spectrum-tabs-quiet-l-margin-right: -9px;
    --spectrum-tabs-quiet-l-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-l-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-xl-compact-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-xl-compact-emphasized-margin-left: -10px;
    --spectrum-tabs-quiet-xl-compact-emphasized-margin-right: -10px;
    --spectrum-tabs-quiet-xl-compact-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-xl-compact-margin-left: -10px;
    --spectrum-tabs-quiet-xl-compact-margin-right: -10px;
    --spectrum-tabs-quiet-xl-compact-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-xl-compact-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-xl-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-xl-emphasized-margin-left: -10px;
    --spectrum-tabs-quiet-xl-emphasized-margin-right: -10px;
    --spectrum-tabs-quiet-xl-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-xl-margin-left: -10px;
    --spectrum-tabs-quiet-xl-margin-right: -10px;
    --spectrum-tabs-quiet-xl-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-xl-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-s-compact-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-s-compact-emphasized-margin-left: -7px;
    --spectrum-tabs-s-compact-emphasized-margin-right: -7px;
    --spectrum-tabs-s-compact-focus-ring-border-radius: 5px;
    --spectrum-tabs-s-compact-margin-left: -7px;
    --spectrum-tabs-s-compact-margin-right: -7px;
    --spectrum-tabs-s-compact-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-s-compact-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-s-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-s-emphasized-margin-left: -7px;
    --spectrum-tabs-s-emphasized-margin-right: -7px;
    --spectrum-tabs-s-focus-ring-border-radius: 5px;
    --spectrum-tabs-s-margin-left: -7px;
    --spectrum-tabs-s-margin-right: -7px;
    --spectrum-tabs-s-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-s-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-m-compact-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-m-compact-emphasized-margin-left: -8px;
    --spectrum-tabs-m-compact-emphasized-margin-right: -8px;
    --spectrum-tabs-m-compact-focus-ring-border-radius: 5px;
    --spectrum-tabs-m-compact-margin-left: -8px;
    --spectrum-tabs-m-compact-margin-right: -8px;
    --spectrum-tabs-m-compact-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-m-compact-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-m-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-m-emphasized-margin-left: -8px;
    --spectrum-tabs-m-emphasized-margin-right: -8px;
    --spectrum-tabs-m-focus-ring-border-radius: 5px;
    --spectrum-tabs-m-margin-left: -8px;
    --spectrum-tabs-m-margin-right: -8px;
    --spectrum-tabs-m-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-m-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-l-compact-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-l-compact-emphasized-margin-left: -9px;
    --spectrum-tabs-l-compact-emphasized-margin-right: -9px;
    --spectrum-tabs-l-compact-focus-ring-border-radius: 5px;
    --spectrum-tabs-l-compact-margin-left: -9px;
    --spectrum-tabs-l-compact-margin-right: -9px;
    --spectrum-tabs-l-compact-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-l-compact-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-l-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-l-emphasized-margin-left: -9px;
    --spectrum-tabs-l-emphasized-margin-right: -9px;
    --spectrum-tabs-l-focus-ring-border-radius: 5px;
    --spectrum-tabs-l-margin-left: -9px;
    --spectrum-tabs-l-margin-right: -9px;
    --spectrum-tabs-l-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-l-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-xl-compact-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-xl-compact-emphasized-margin-left: -10px;
    --spectrum-tabs-xl-compact-emphasized-margin-right: -10px;
    --spectrum-tabs-xl-compact-focus-ring-border-radius: 5px;
    --spectrum-tabs-xl-compact-margin-left: -10px;
    --spectrum-tabs-xl-compact-margin-right: -10px;
    --spectrum-tabs-xl-compact-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-xl-compact-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-xl-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-xl-emphasized-margin-left: -10px;
    --spectrum-tabs-xl-emphasized-margin-right: -10px;
    --spectrum-tabs-xl-focus-ring-border-radius: 5px;
    --spectrum-tabs-xl-margin-left: -10px;
    --spectrum-tabs-xl-margin-right: -10px;
    --spectrum-tabs-xl-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-xl-vertical-focus-ring-border-radius: 5px;
    --spectrum-textarea-quiet-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-quiet-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-quiet-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-quiet-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-quiet-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-quiet-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-quiet-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-quiet-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-quiet-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-quiet-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-quiet-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-quiet-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-quiet-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-quiet-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-quiet-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-quiet-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-l-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-l-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-m-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-m-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-s-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-s-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-xl-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-xl-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-tooltip-info-padding-bottom: 5px;
    --spectrum-tooltip-negative-padding-bottom: 5px;
    --spectrum-tooltip-padding-bottom: 5px;
    --spectrum-tooltip-positive-padding-bottom: 5px;
}
/* stylelint-enable */
`,t=document.createElement("style"),n=document.createTextNode(i);t.type="text/css",t.appendChild(n),document.head.appendChild(t)}

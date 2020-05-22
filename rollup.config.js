import merge from 'deepmerge';
// use createSpaConfig for bundling a Single Page App
import { createSpaConfig } from '@open-wc/building-rollup';
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import glsl from 'rollup-plugin-glsl';
import { wasm } from '@rollup/plugin-wasm';
import { string } from "rollup-plugin-string";

// use createBasicConfig to do regular JS to JS bundling
// import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
    // use the outputdir option to modify where files are output
    // outputDir: 'dist',

    // if you need to support older browsers, such as IE11, set the legacyBuild
    // option to generate an additional build just for this browser
    // legacyBuild: true,

    // development mode creates a non-minified build for debugging or development
    developmentMode: process.env.ROLLUP_WATCH === 'true',

    // set to true to inject the service worker registration into your index.html
    injectServiceWorker: false,
});

export default merge(baseConfig, {
    // if you use createSpaConfig, you can use your index.html as entrypoint,
    // any <script type="module"> inside will be bundled by rollup
    input: './src/index.ts',

    plugins: [
        typescript(),
        image(),
        glsl({
            // By default, everything gets included
            include: 'src/**/*.{glsl,frag,vert}',

            // Source maps are on by default
            sourceMap: false,
        }),
        wasm(),
        string({
            include: "**/*.css",
        })
    ],

    output: {
        dir: './dist',
        format: 'es'
    },

    // alternatively, you can use your JS as entrypoint for rollup and
    // optionally set a HTML template manually
    // input: './app.js',
});

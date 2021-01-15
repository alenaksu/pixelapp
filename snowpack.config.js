const fs = require('fs');
const path = require('path');
const url = require('url');

const isTS = fs.existsSync(url.pathToFileURL(path.join(process.cwd(), 'tsconfig.json')));

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        src: '/static',
        public: { url: '/', static: true },
    },
    plugins: [
        '@snowpack/plugin-babel',
        '@snowpack/plugin-dotenv',
        ['./tools/glslPlugin.js', {}],
        './tools/cssImportTextPlugin.js',
        // [
        //     '@snowpack/plugin-optimize',
        //     {
        //         target: 'es2018',
        //     },
        // ],
    ],
    devOptions: {
        out: './docs',
    },
    packageOptions: {
        sourceMap: false,
        treeshake: false,
        installTypes: isTS,
    },
    buildOptions: {
        baseUrl: '/pixelapp/',
        clean: true,
    },
    optimize: {
        bundle: false,
        minify: true,
        manifest: true,
        preload: true,
        target: 'es2018',
    },
};

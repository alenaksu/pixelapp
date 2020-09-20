module.exports = {
    extends: '@snowpack/app-scripts-lit-element',
    plugins: [
        './tools/glslPlugin.js',
        './tools/cssImportTextPlugin.js',
        '@snowpack/plugin-optimize',
    ],
};

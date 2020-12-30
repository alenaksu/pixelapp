const fs = require('fs/promises');
const glsl = require('glslify');

module.exports = function (snowpackConfig, options = {}) {
    return {
        name: 'glsl-plugin',
        resolve: {
            input: ['.frag', '.vert', '.glsl'],
            output: ['.js'],
        },
        async load({ filePath }) {
            return `export default ${JSON.stringify(glsl.file(filePath, options))};`;
        },
    };
};

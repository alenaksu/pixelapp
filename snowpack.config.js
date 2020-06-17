module.exports = {
    plugins: ['@snowpack/plugin-babel'],
    scripts: {
        'mount:public': 'mount public --to /',
        'mount:src': 'mount src --to /_dist_',
        'build:js,jsx': '@snowpack/plugin-babel',
        'run:tsc': 'tsc --noEmit',
        'run:tsc::watch': '$1 --watch',
    },
    installOptions: {
        rollup: {
            plugins: [
                require('rollup-plugin-glslify')({
                    compress: true,
                }),
            ],
        },
    },
    devOptions: {},
};

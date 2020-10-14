const editParams = {
    crop: {
        translate: [0, 0],
        rotate: 0,
        angle: 0,
        scale: 1,
        flip: 0
    },
    light: {
        exposure: 0,
        brightness: 0,
        contrast: 0,
        highlights: 0,
        shadows: 0,
        whites: 0,
        blacks: 0,
    },
    color: {
        temp: 0,
        tint: 0,
        vibrance: 0,
        saturation: 0,
        hue: 0
    },
    detail: {
        sharpen: {
            amount: 0,
            radius: 3,
        },
        blur: {
            radius: 1,
            pass: 0,
        },
    },
    effects: {
        edgeDetection: {
            threshold: 0.3,
            radius: 1,
            blend: 0,
        },
        dither: {
            threshold: 0,
            size: 1,
        },
        pixelate: 1,
    },
};
const initialState = {
    history: {
        stack: [editParams],
        cursor: 0,
        canUndo: false,
        canRedo: false,
        maxEntries: 20,
    },
    ui: {
        crop: {
            adjusting: false
        }
    },
    image: {},
    editParams,
};

export default initialState;

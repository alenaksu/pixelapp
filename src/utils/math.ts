import { Point } from '../types';

const { PI, max, min, abs, sin, cos } = Math;

export const RAD = PI / 180;

export function degToRad(deg: number) {
    return deg * RAD;
}

export function clamp(x, minValue, maxValue) {
    return min(maxValue, max(minValue, x));
}

export function identityMatrix() {
    return DOMMatrix.fromMatrix({
        m11: 1,
        m22: 1,
        m33: 1,
        m44: 1,
    });
}

export function absMax(...values) {
    let maxIndex = -1;
    for (let i = 0; i < values.length; i++) {
        maxIndex = maxIndex !== -1 && abs(values[maxIndex]) > abs(values[i]) ? maxIndex : i;
    }

    return values[maxIndex];
}

export function rotatePoint(angle: number, [x, y]: Point, [ox, oy]: Point = [0, 0]) {
    const s = sin(angle);
    const c = cos(angle);
    const x0 = (x - ox) * c - (y - oy) * s + ox;
    const y0 = (x - ox) * s + (y - oy) * c + oy;

    return [x0, y0];
}

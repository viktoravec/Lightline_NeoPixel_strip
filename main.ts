type Color = {
    r: number
    g: number
    b: number
}
let stripLength = 15;
let time = 100
let strip = neopixel.create(DigitalPin.P2, stripLength, NeoPixelMode.RGB)

const colors: Array<Color> = [
    (r:255, g:0, b:0)
    (r: 0, g: 255, b: 0)
    (r: 0, g: 0, b: 255)
    (r: 255, g: 0, b: 0)
    (r: 255, g: 0, b: 0)
];

let middle = Math.floor(stripLength / 2);
let maxStep = Math.floor(stripLength / 2);
let colorIndex = 0;

function hslToRgb(h: number, s: number, l: number): NeoPixelMode.RGB {
    return neopixel.hsl(h, s, l)
}

basic.forever(function () {
    let color: Color = colors[colorIndex % colors.length]
    let rgbColor = hslToRgb(color.h, color.s, color.l);
    strip.setPixelColor(middle, rgbColor);
    strip.show();
    basic.pause(time);

    for (let step = 1; step <= maxStep; step++) {
        strip.clear();

        color = colors[(colorIndex + step) % colors.length]

        strip.setPixelColor(middle, rgbColor);
        strip.setPixelColor(middle + step, rgbColor);
        strip.setPixelColor(middle - step, rgbColor);

        for (let i = 0; i <= step; i++) {
            strip.setPixelColor(middle + i, hslToRgb(colors[(colorIndex + i) % colors.length].h, colors[(colorIndex + i) % colors.length].s, colors[(colorIndex + i) % colors.length].l))
            strip.setPixelColor(middle - i, hslToRgb(colors[(colorIndex + i) % colors.length].h, colors[(colorIndex + i) % colors.length].s, colors[(colorIndex + i) % colors.length].l))
        }

        strip.show();
        basic.pause(time);
    }

    for (let step = maxStep; step >= 1; step--) {
        strip.clear();

        color = colors[(colorIndex + step) % colors.length]
        rgbColor = hslToRgb(color.h, color.s, color.l);

        strip.setPixelColor(middle + step, rgbColor);
        strip.setPixelColor(middle - step, rgbColor);

        for (let i = 0; i <= step; i++) {
            strip.setPixelColor(middle + i, hslToRgb(colors[(colorIndex + i) % colors.length].h, colors[(colorIndex + i) % colors.length].s, colors[(colorIndex + i) % colors.length].l))
            strip.setPixelColor(middle - i, hslToRgb(colors[(colorIndex + i) % colors.length].h, colors[(colorIndex + i) % colors.length].s, colors[(colorIndex + i) % colors.length].l))
        }
        strip.show();
        basic.pause(time);
    }
})
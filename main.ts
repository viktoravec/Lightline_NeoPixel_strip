type Color = {
    h: number;
    s: number;
    l: number;
}

let stripLength = 29;
let strip = neopixel.create(DigitalPin.P0, stripLength, NeoPixelMode.RGB)

const colors: Array<Color> = [
{ h: 0, s: 100, l: 50 },
{ h: 30, s: 100, l: 50 },
{ h: 60, s: 100, l: 50 },
{ h: 120, s: 100, l: 50 },
{ h: 240, s: 100, l: 50 },
];

let middle = Math.floor(stripLength/2);
let maxStep = Math.floor(stripLength/2);
let colorIndex = 0;

function hslToRgb(h: number, s: number, l: number): NeoPixelMode.RGB {
    return neopixel.hsl(h, s, l)
}

basic.forever(function() {
    let color: Color = colors[colorIndex % colors.length]
    let rgbColor = hslToRgb(color.h, color.s, color.l);
    strip.setPixelColor(middle, rgbColor);
    strip.show();
    basic.pause(100);

    for(let step = 1; step <= maxStep; step++) {
        strip.clear();

        color = colors[(colorIndex + step) % colors.length]
        rgbColor = hslToRgb(color.h, color.s, color.l);

        strip.setPixelColor(middle + step, rgbColor);
        strip.setPixelColor(middle - step, rgbColor);

        for(let i = 0; i <= step; i++) {
            strip.setPixelColor(middle + i, hslToRgb(colors[(colorIndex + i) % colors.length].h, colors[(colorIndex + i) % colors.length].s, colors[(colorIndex + i) % colors.length].l))
            strip.setPixelColor(middle - i, hslToRgb(colors[(colorIndex + i) % colors.length].h, colors[(colorIndex + i) % colors.length].s, colors[(colorIndex + i) % colors.length].l))
        }

        strip.show();
        basic.pause(100);
    }

    for(let step = maxStep; step >= 1; step--) {
        strip.clear();

        color = colors[(colorIndex + step) % colors.length]
        rgbColor = hslToRgb(color.h, color.s, color.l);

        strip.setPixelColor(middle + step, rgbColor);
        strip.setPixelColor(middle - step, rgbColor);

        for(let i = 0; i <= step; i++) {
            strip.setPixelColor(middle + i, hslToRgb(colors[(colorIndex + i) % colors.length].h, colors[(colorIndex + i) % colors.length].s, colors[(colorIndex + i) % colors.length].l))
            strip.setPixelColor(middle - i, hslToRgb(colors[(colorIndex + i) % colors.length].h, colors[(colorIndex + i) % colors.length].s, colors[(colorIndex + i) % colors.length].l))
        }
        strip.show();
        basic.pause(100);

}

colorIndex++
})
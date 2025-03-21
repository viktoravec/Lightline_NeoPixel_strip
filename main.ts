type Color = {
    h: number;
    s: number;
    l: number;
}

const stripLength: number = 29
const blackColor: Color = { h: 0, s: 0, l: 0 };
const colorArray: Array<Color> = [  //deklarace konstanty colorArray
    { h: 0, s: 100, l: 50}, //inicializace pole Array
    { h: 120, s: 100, l: 50 },
    { h: 240, s: 100, l: 50 },
    { h: 60, s: 100, l: 50 }
    ];

    const colorArray2: Array<Color> = [
    { h: 0, s: 100, l: 50 },
    { h: 120, s: 100, l: 50 },
    { h: 240, s: 100, l: 50 },
    { h: 60, s: 100, l: 50 },
    { h: 180, s: 100, l: 50 }
];

colorArray.push({ h: 10, s: 100, l: 50 }),


console.log(strip);
strip.length = 7;
console.log(strip.length)
strip.fill(blackColor)
console.log("strip: array<Color> = ", strip);

for (let i = 0; i < strip.length; i += 1) {
    colorsData[0][i] = colorArray[i % colorArray.length];
}

for (let i = 0; i < strip.length; i += 1) {
    colorsData[1][i] = colorArray2[i % colorArray2.length];
}

let x: number = 0;

let pasek: neopixel.Strip = neopixel.create(DigitalPin.P8, 29, NeopixelMode RGB);
pasek,setPixelColor(0, neopixel.rgb(255, 192, 192));

basic.forever(function () {
	pasek.rotate();
    pasek.show()
    basic.pause(100);
    
})
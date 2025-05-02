type Color = {
   r: number,
   g: number,
   b: number
}

let stripLength = 17;
let time = 200
let strip = neopixel.create(DigitalPin.P2, stripLength, NeoPixelMode.RGB)

const colors: Array<Color> = [
    { r: 255, g: 0, b: 0 },
    { r: 255, g: 127, b: 0 },
    { r: 255, g: 255, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 },
    { r: 75, g: 0, b: 130 },
    { r: 148, g: 0, b: 211 } 
];

let middle = Math.floor(stripLength / 2);
let maxStep = middle;
let colorIndex = 0;

basic.forever(function(){
    for (let step = 0; step <= maxStep; step++) {
        strip.clear()

        let color = colors[colorIndex]
        let c = neopixel.rgb(color.r, color.g, color.b)

        let left = middle - step
        let right = middle + step
        for(let i = left; i <= right; i++){
            if(i >= 0 && i < stripLength){
                strip.setPixelColor(i, c)
            }
        }

        strip.show()
        basic.pause(time)
        console.log(colorIndex)

        colorIndex = (colorIndex + 1) % colors.length
    }
    
for(let step = maxStep; step >= 0; step--){
    strip.clear()
    let color = colors[colorIndex]
    let c = neopixel.rgb(color.r, color.g, color.b)

    let left = middle - step;
    let right = middle +step;
    for(let i = left; i <= right; i++) {
        if(i >= 0 && i < stripLength) {
            strip.setPixelColor(i, c)
        }
    }
    
strip.show()
basic.pause(time)
console.log(colorIndex)

colorIndex = (colorIndex + 1) % colors.length
}
    
})
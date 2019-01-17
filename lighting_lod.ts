
enum pattern {
    //% block="ooo"
    ooo = 7,
    //% block="oxx"
    oxx = 1,
    //% block="xox"
    xox = 2,
    //% block="oox"
    oox = 3,
    //% block="xxo"
    xxo = 4,
    //% block="oxo"
    oxo = 5,
    //% block="xoo"
    xoo = 6,
    //% block="xxx"
    xxx = 0,
}

enum color {
    //% block="white"
    white = 7,
    //% block="red"
    red = 1,
    //% block="green"
    green = 2,
    //% block="yellow"
    yellow = 3,
    //% block="blue"
    blue = 4,
    //% block="violet"
    violet = 5,
    //% block="water"
    water = 6,
    //% block="black"
    black = 0,

}


/**
 * カスタムブロック
 */
//% weight=100 color=#0fbc11 icon=""

namespace lighting_lod {

    //% block
    export function sendir(e1: pattern, e2: color): void {
        data = e2 * 8 + e1;
        ir_send();
    }

    //% block
    export function patterncolor(e1: pattern, e2: color): number {
        return e2 * 8 + e1;
    }
}

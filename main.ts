input.onButtonPressed(Button.A, function () {
    角度 = 45
    pins.servoWritePin(AnalogPin.P2, 角度)
    for (let index = 0; index < 4; index++) {
        角度 += 90
        pins.servoWritePin(AnalogPin.P2, 角度)
        basic.pause(500)
        角度 += -90
        pins.servoWritePin(AnalogPin.P2, 角度)
        basic.pause(500)
    }
    pins.servoWritePin(AnalogPin.P2, 105)
})
let 角度 = 0
角度 = 105
pins.servoWritePin(AnalogPin.P2, 角度)

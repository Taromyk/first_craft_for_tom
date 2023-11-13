let 角度 = 90
pins.servoWritePin(AnalogPin.P2, 角度)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        角度 += -90
        pins.servoWritePin(AnalogPin.P2, 角度)
        basic.pause(500)
        角度 += 90
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(500)
    } else {
        角度 = 90
        pins.servoWritePin(AnalogPin.P2, 角度)
    }
})

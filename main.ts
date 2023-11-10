input.onButtonPressed(Button.A, function () {
    角度 = 45
    servos.P1.setAngle(角度)
    for (let index = 0; index < 4; index++) {
        角度 += 90
        servos.P1.setAngle(角度)
        basic.pause(500)
        角度 += -90
        servos.P1.setAngle(角度)
        basic.pause(500)
    }
    servos.P1.setAngle(105)
})
let 角度 = 0
角度 = 105
servos.P1.setAngle(角度)

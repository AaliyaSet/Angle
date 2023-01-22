input.onButtonPressed(Button.A, function () {
    angle = input.rotation(Rotation.Pitch)
    music.playMelody("C5 G B A F A C5 B ", 120)
    basic.showString("Angle is")
    basic.showNumber(angle)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    degrees = angle * 0.01745329251
    height = distance * Math.tan(degrees) + eyelevel
    basic.showNumber(height)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    distance += 10
    basic.showString("Distance is")
    basic.showNumber(distance)
    basic.showString("Press A+B")
    basic.clearScreen()
})
let distance = 0
let height = 0
let degrees = 0
let angle = 0
let eyelevel = 0
basic.showString("Press A")
eyelevel = 1.47

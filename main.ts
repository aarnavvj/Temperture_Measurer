input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 1000; index++) {
        serial.writeValue("Temperature", input.temperature())
        basic.pause(2000)
    }
})

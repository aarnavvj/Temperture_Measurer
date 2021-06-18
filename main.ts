input.onButtonPressed(Button.A, function () {
    // This code gets temperature values and stores the values using the "serial" block.
    for (let index = 0; index <= 1000; index++) {
        serial.writeValue("Temperature", input.temperature())
        basic.pause(2000)
    }
})

OLED.init(128, 64)
basic.forever(function () {
    if (tinkercademy.MoistureSensor(AnalogPin.P1) < 50) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        OLED.writeNumNewLine(tinkercademy.MoistureSensor(AnalogPin.P1))
        OLED.writeStringNewLine("ARROSE LA PLANTE")
        music.stopAllSounds()
    } else {
        OLED.clear()
        OLED.writeNumNewLine(tinkercademy.MoistureSensor(AnalogPin.P1))
        basic.pause(200)
        OLED.writeStringNewLine("JE VAIS BIEN")
    }
})

radio.setGroup(1)
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    for (let index = 0; index < 60; index++) {
        radio.sendNumber(2)
        basic.pause(50)
    }
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    for (let index = 0; index < 10; index++) {
        radio.sendNumber(1)
        basic.pause(50)
    }
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    for (let index = 0; index < 60; index++) {
        radio.sendNumber(0)
        basic.pause(50)
    }
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    for (let index = 0; index < 10; index++) {
        radio.sendNumber(1)
        basic.pause(50)
    }
})

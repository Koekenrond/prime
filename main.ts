input.onButtonPressed(Button.A, function () {
    basic.showString(prime)
})
let uitkomstbeneden = 0
let uitkomstboven = 0
let uitkomst = 0
let geen_priemgetal = 0
let B = 0
let prime = ""
let A = 1
basic.forever(function () {
    B = 1
    geen_priemgetal = 0
    while (!(B == A)) {
        uitkomst = A / B
        uitkomstboven = Math.ceil(uitkomst)
        uitkomstbeneden = Math.floor(uitkomst)
        if (uitkomst == (uitkomstbeneden || uitkomstboven)) {
            if (uitkomst == A || uitkomst == 1) {
                B += 1
            } else {
                geen_priemgetal = 1
                B += 1
            }
        } else {
            B += 1
        }
    }
    if (geen_priemgetal == 0) {
        prime = "" + prime + A + "/"
    }
    A += 1
})

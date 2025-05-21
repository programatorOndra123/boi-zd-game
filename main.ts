input.onButtonPressed(Button.A, function () {
    ja.turn(Direction.Right, 180)
    JA_DVAN.turn(Direction.Right, 180)
    ja.move(1)
    JA_DVAN.move(1)
    ja.turn(Direction.Left, 180)
    JA_DVAN.turn(Direction.Left, 180)
})
input.onButtonPressed(Button.B, function () {
    ja.move(1)
    JA_DVAN.move(1)
})
let win = 0
let JA_DVAN: game.LedSprite = null
let ja: game.LedSprite = null
game.setLife(20)
basic.showLeds(`
    # # # # #
    # # # # #
    . . . . .
    . # . # .
    . . # # .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    . . . . .
    . # . . .
    . # # . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    . . # . .
    . . . . .
    . # # . .
    `)
basic.showLeds(`
    # # # # #
    # # . # #
    . . . . .
    . # . . .
    . # # . .
    `)
ja = game.createSprite(2, 4)
JA_DVAN = game.createSprite(3, 4)
let point = game.createSprite(2, 2)
game.setLife(5)
let e1 = game.createSprite(0, 0)
basic.pause(100)
let e2 = game.createSprite(1, 0)
basic.pause(100)
let e3 = game.createSprite(2, 0)
basic.pause(100)
let e4 = game.createSprite(3, 0)
basic.pause(100)
let e5 = game.createSprite(4, 0)
basic.pause(100)
let e6 = game.createSprite(5, 0)
basic.pause(100)
let _7e = game.createSprite(0, 1)
basic.pause(100)
let e8 = game.createSprite(1, 1)
basic.pause(100)
let e9 = game.createSprite(2, 1)
basic.pause(100)
let e10final = game.createSprite(3, 1)
let gůkbodgkrhkgihihtjiht = game.createSprite(4, 1)
let S4 = game.createSprite(0, 4)
let S3 = game.createSprite(1, 4)
let S1 = game.createSprite(4, 4)
point.turn(Direction.Right, 45)
basic.forever(function () {
    point.ifOnEdgeBounce()
    if (game.isGameOver()) {
        game.startCountdown(10000)
        basic.clearScreen()
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    point.move(1)
    basic.pause(699)
})
basic.forever(function () {
    if (win == 10) {
        game.gameOver()
        basic.showString("JSI VITEZ BLAHOPREJI.")
        music.play(music.stringPlayable("A E C5 F D G C B ", 120), music.PlaybackMode.UntilDone)
        control.reset()
    }
})
basic.forever(function () {
    if (point.isTouching(ja)) {
        point.turn(Direction.Right, 90)
        point.move(1)
    }
    if (point.isTouching(e1)) {
        e1.delete()
        point.turn(Direction.Right, 180)
        point.move(2)
        win = win + 1
        game.addScore(1)
    }
    if (point.isTouching(e2)) {
        e2.delete()
        point.turn(Direction.Right, 180)
        point.move(2)
        win = win + 1
        game.addScore(1)
    }
    if (point.isTouching(e3)) {
        e3.delete()
        point.turn(Direction.Right, 180)
        point.move(2)
        win = win + 1
    }
    if (point.isTouching(e4)) {
        e4.delete()
        point.turn(Direction.Right, 180)
        point.move(2)
        win = win + 1
    }
    if (point.isTouching(e5)) {
        e5.delete()
        point.turn(Direction.Right, 180)
        point.move(2)
        win = win + 1
        game.addScore(1)
    }
    if (point.isTouching(e6)) {
        e6.delete()
        point.turn(Direction.Right, 180)
        point.move(2)
        win = win + 1
        game.addScore(1)
    }
    if (point.isTouching(_7e)) {
        _7e.delete()
        point.turn(Direction.Right, 180)
        point.move(2)
        game.addScore(1)
        win = win + 1
    }
    if (point.isTouching(e8)) {
        e8.delete()
        point.turn(Direction.Right, 180)
        point.move(2)
        win = win + 1
        game.addScore(1)
    }
    if (point.isTouching(e9)) {
        e9.delete()
        point.turn(Direction.Right, 180)
        point.move(2)
        win = win + 1
        game.addScore(1)
    }
    if (point.isTouching(e10final)) {
        e10final.delete()
        point.turn(Direction.Right, 180)
        point.move(2)
        win = win + 1
        game.addScore(1)
    }
    if (point.isTouching(S4)) {
        game.removeLife(1)
    }
    if (point.isTouching(S3)) {
        game.removeLife(1)
    }
    if (point.isTouching(S1)) {
        game.removeLife(1)
    }
    S1.set(LedSpriteProperty.Brightness, 0)
    S3.set(LedSpriteProperty.Brightness, 0)
    S4.set(LedSpriteProperty.Brightness, 0)
})

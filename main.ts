input.onButtonPressed(Button.A, function () {
    Ninja.change(LedSpriteProperty.Y, -1)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    Ninja.change(LedSpriteProperty.Y, 1)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
let Ninja: game.LedSprite = null
Ninja = game.createSprite(0, 4)
game.setLife(10)
game.setScore(0)
let Rain = game.createSprite(4, 1)
let Point00 = game.createSprite(0, 0)
let Point04 = game.createSprite(0, 4)
Point00.set(LedSpriteProperty.Brightness, 0)
Point04.set(LedSpriteProperty.Brightness, 0)
basic.forever(function () {
    Rain.set(LedSpriteProperty.Brightness, 20)
    Rain.change(LedSpriteProperty.X, -1)
    basic.pause(80)
    if (game.isGameOver()) {
        basic.showString("Game Over")
    }
    if (Rain.isTouching(Ninja)) {
        basic.showIcon(IconNames.Skull)
        game.addScore(-1)
    }
    if (Rain.isTouchingEdge()) {
        Rain.delete()
        Rain = game.createSprite(4, randint(1, 2))
    }
})
basic.forever(function () {
    if (Ninja.isTouching(Point00)) {
        game.addScore(1)
    }
    if (Ninja.isTouching(Point04) && game.score() != 0) {
        game.addScore(1)
    }
})

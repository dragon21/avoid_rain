input.onButtonPressed(Button.A, function () {
    Ninja.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Ninja.change(LedSpriteProperty.Y, 1)
})
let Ninja: game.LedSprite = null
Ninja = game.createSprite(0, 4)
game.setLife(100)
game.setScore(0)
let Rain = game.createSprite(4, 1)
basic.forever(function () {
    Rain.change(LedSpriteProperty.X, -1)
    basic.pause(500)
    if (Rain.isTouching(Ninja)) {
        game.removeLife(-10)
        if (game.isGameOver()) {
            basic.showString("Game Over")
        }
    }
    if (Rain.isTouchingEdge()) {
        Rain.delete()
        Rain = game.createSprite(4, randint(1, 3))
    }
})

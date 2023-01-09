def on_button_pressed_a():
    Ninja.change(LedSpriteProperty.Y, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Ninja.change(LedSpriteProperty.Y, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

Ninja: game.LedSprite = None
Ninja = game.create_sprite(0, 4)
game.set_life(10)
game.set_score(0)
Rain = game.create_sprite(4, 1)
Point00 = game.create_sprite(0, 0)
Point04 = game.create_sprite(0, 4)
Point00.set(LedSpriteProperty.BRIGHTNESS, 0)
Point04.set(LedSpriteProperty.BRIGHTNESS, 0)

def on_forever():
    global Rain
    Rain.set(LedSpriteProperty.BRIGHTNESS, 20)
    Rain.change(LedSpriteProperty.X, -1)
    basic.pause(50)
    if game.is_game_over():
        basic.show_string("Game Over")
    if Rain.is_touching(Ninja):
        basic.show_icon(IconNames.SKULL)
        game.add_score(-1)
    if Rain.is_touching_edge():
        Rain.delete()
        Rain = game.create_sprite(4, randint(1, 3))
basic.forever(on_forever)

def on_forever2():
    if Ninja.is_touching(Point00):
        game.add_score(1)
    if Ninja.is_touching(Point04):
        game.add_score(1)
basic.forever(on_forever2)

let list = [
[
game.createSprite(0, 0),
game.createSprite(0, 1),
game.createSprite(0, 2),
game.createSprite(0, 3),
game.createSprite(0, 4)
],
[
game.createSprite(1, 0),
game.createSprite(1, 1),
game.createSprite(1, 2),
game.createSprite(1, 3),
game.createSprite(1, 4)
],
[
game.createSprite(2, 0),
game.createSprite(2, 1),
game.createSprite(2, 2),
game.createSprite(2, 3),
game.createSprite(2, 4)
],
[
game.createSprite(3, 0),
game.createSprite(3, 1),
game.createSprite(3, 2),
game.createSprite(3, 3),
game.createSprite(3, 4)
],
[
game.createSprite(4, 0),
game.createSprite(4, 1),
game.createSprite(4, 2),
game.createSprite(4, 3),
game.createSprite(4, 4)
]
]
basic.forever(function () {
    list._pickRandom()._pickRandom().set(LedSpriteProperty.Brightness, randint(0, 200))
})

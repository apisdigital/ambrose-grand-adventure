@namespace
class SpriteKind:
    Housing = SpriteKind.create()
    btnNumber = SpriteKind.create()
    Game_Option = SpriteKind.create()
    nu1 = SpriteKind.create()
    btnOK = SpriteKind.create()
    btnERASE = SpriteKind.create()
    Dialoguer = SpriteKind.create()
    puntero = SpriteKind.create()
"""

Password = 3526

1: Karen: Hey, you haven't won me over yet.

2: Karen: There are 5 skeletons I'll make appear.

3: Karen: On the count of 1, on the count of 2, and on the count of 3!

4: Karen: While you kill them, I'm going to sit there.

5: Ambrose: Okeeeeeee.

6:

6: To go to level "1" or "Racing Competition" again, you must enter the password "1616" or restart the game.

"""


#pantalla inicial-------------------------------
# tilemap
tiles.set_current_tilemap(tilemap("""level2"""))

#numeros
n1 = sprites.create(assets.image("""
    myImage
"""), SpriteKind.btnNumber)
tiles.place_on_tile(n1, tiles.get_tile_location(2, 4))

n2 = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.btnNumber)
tiles.place_on_tile(n2, tiles.get_tile_location(3, 4))

n3 = sprites.create(assets.image("""
    myImage1
"""), SpriteKind.btnNumber)
tiles.place_on_tile(n3, tiles.get_tile_location(4, 4))
n4 = sprites.create(assets.image("""
    myImage2
"""), SpriteKind.btnNumber)
tiles.place_on_tile(n4, tiles.get_tile_location(5, 4))

n5 = sprites.create(assets.image("""
    myImage3
"""), SpriteKind.btnNumber)
tiles.place_on_tile(n5, tiles.get_tile_location(6, 4))

n6 = sprites.create(assets.image("""myImage4"""), SpriteKind.btnNumber)
tiles.place_on_tile(n6, tiles.get_tile_location(7, 4))

#cursor

cursor = sprites.create(assets.image("""
    myImage8
"""), SpriteKind.puntero)
controller.move_sprite(cursor)
cursor.set_stay_in_screen(True)



# Personajes
def crear_ambrose():
    ambrose = sprites.create(assets.image("""
        Ambrosium
    """), SpriteKind.player)

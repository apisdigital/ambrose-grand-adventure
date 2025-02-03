namespace SpriteKind {
    export const Housing = SpriteKind.create()
    export const btnNumber = SpriteKind.create()
    export const Game_Option = SpriteKind.create()
    export const nu1 = SpriteKind.create()
    export const btnOK = SpriteKind.create()
    export const btnERASE = SpriteKind.create()
    export const Dialoguer = SpriteKind.create()
    export const puntero = SpriteKind.create()
}

/** 

Password = 3526

1: Karen: Hey, you haven't won me over yet.

2: Karen: There are 5 skeletons I'll make appear.

3: Karen: On the count of 1, on the count of 2, and on the count of 3!

4: Karen: While you kill them, I'm going to sit there.

5: Ambrose: Okeeeeeee.

6:

6: To go to level "1" or "Racing Competition" again, you must enter the password "1616" or restart the game.


 */
// pantalla inicial-------------------------------
//  tilemap
tiles.setCurrentTilemap(tilemap`level2`)
// numeros
let n1 = sprites.create(assets.image`
    myImage
`, SpriteKind.btnNumber)
tiles.placeOnTile(n1, tiles.getTileLocation(2, 4))
let n2 = sprites.create(assets.image`
    myImage0
`, SpriteKind.btnNumber)
tiles.placeOnTile(n2, tiles.getTileLocation(3, 4))
let n3 = sprites.create(assets.image`
    myImage1
`, SpriteKind.btnNumber)
tiles.placeOnTile(n3, tiles.getTileLocation(4, 4))
let n4 = sprites.create(assets.image`
    myImage2
`, SpriteKind.btnNumber)
tiles.placeOnTile(n4, tiles.getTileLocation(5, 4))
let n5 = sprites.create(assets.image`
    myImage3
`, SpriteKind.btnNumber)
tiles.placeOnTile(n5, tiles.getTileLocation(6, 4))
let n6 = sprites.create(assets.image`myImage4`, SpriteKind.btnNumber)
tiles.placeOnTile(n6, tiles.getTileLocation(7, 4))
// cursor
let cursor = sprites.create(assets.image`
    myImage8
`, SpriteKind.puntero)
controller.moveSprite(cursor)
cursor.setStayInScreen(true)
//  Personajes
function crear_ambrose() {
    let ambrose = sprites.create(assets.image`
        Ambrosium
    `, SpriteKind.Player)
}


const player = add([
  sprite ('Sprite1'),
  pos(20,20),
  body()
])
const MOVE_SPEED = 200
keyDown('right', () => {
  player.move(MOVE_SPEED,0)
})

keyDown('left', () => {
  player.move(-MOVE_SPEED,0)
})

addLevel([
  '    ',
  '    ',
  '  @ ',
  'xxxx',
  'xx   ',
  '  x  ',
  '  @ ',
  'xxxx'
  ], {
  width: 50,
  height: 50,
  'x' : [sprite('ground'), solid()],
  '@' : [sprite('enemy'), body(), 'dangerous']
  })

  player.collides('dangerous', () => {
    destroy(player)
  })
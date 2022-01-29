
var config = {
    type: Phaser.AUTO,
    width: 675,
    height: 353,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('lutadorA', 'karatea.png', { frameWidth: 75, frameHeight: 75 });
    this.load.spritesheet('lutadorB', 'karateb.png', { frameWidth: 75, frameHeight: 75 });
    this.load.image('fundo', 'fundonoite.png');
    this.load.image('plata', 'plataforma.png');
}

function create ()
{
    this.add.image(332, 175, 'fundo');
}

function update ()
{
}
   


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
    this.load.image('fundo', 'fundonoite.png');
}

function create ()
{
    this.add.image(332, 175, 'fundo');
}

function update ()
{
}
   

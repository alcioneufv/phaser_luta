
var config = {
    type: Phaser.AUTO,
    width: 675,
    height: 353,
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
}

function update ()
{
}
   

var game = new Phaser.Game(675, 353, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

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
}

function create ()
{
}

function update ()
{
}
   

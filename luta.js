var config = {
    type: Phaser.AUTO,
    width: 675,
    height: 353,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
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

var cursors;
var plataformas;
var lutA;
var lutB;
var chao = 277;
var cont = 0;
var key1;
var key2;
var acoes = ['chuta', 'mortal', 'soca', 'kika', 'bloqueia', 'bloqueia' ];
var golpes = ['chuta',  'soca', 'voadora' ];
var valorVidaA = 100;
var valorVidaB = 100;
var vidaA, vidaB;

function preload ()
{
    this.load.spritesheet('lutadorA', 'karatea.png', { frameWidth: 75, frameHeight: 75 });
    this.load.spritesheet('lutadorB', 'karateb.png', { frameWidth: 75, frameHeight: 75 });
    this.load.image('fundo', 'fundonoite.png');
    this.load.image('plata', 'plataforma.png');
}

function create ()
{
    cursors = this.input.keyboard.createCursorKeys();

    this.add.image(0, 0, 'fundo').setOrigin(0, 0);
    
    plataformas = this.physics.add.staticGroup();
    plataformas.create(18, chao, 'plata').setOrigin(0, 0).setScale(1).refreshBody();
    
    vidaA = this.add.rectangle(560, 320, valorVidaA, 10, 0x6666ff).setOrigin(0, 0);
    vidaB = this.add.rectangle(20, 320, valorVidaB, 10, 0xff33cc).setOrigin(0, 0);
 
    //*******************
    // Cria a lutador A *
    //*******************
    lutA = this.physics.add.sprite(530, 180, 'lutadorA').setOrigin(0, 0);
    lutA.setBounce(0.2);
    lutA.setCollideWorldBounds(true);
    lutA.body.setGravityY(300)
    
        
     this.anims.create({ key: 'idleA',
        frames: this.anims.generateFrameNumbers('lutadorA', { start: 8, end: 10 }),
        frameRate: 5, repeat: -1 });
    
    lutA.anims.play('idleA', true);

    //*******************
    // Cria a lutador B *
    //*******************
    lutB = this.physics.add.sprite(230, 180, 'lutadorB').setOrigin(0, 0);
    lutB.setBounce(0.2);
    lutB.setCollideWorldBounds(true);
    lutB.body.setGravityY(300)

    
    this.anims.create({ key: 'left',
        frames: this.anims.generateFrameNumbers('lutadorB', { start: 0, end: 3 }),
        frameRate: 10, repeat: -1 });

     this.anims.create({  key: 'right',
        frames: this.anims.generateFrameNumbers('lutadorB', { start: 0, end: 3 }),
        frameRate: 10,  repeat: -1   });
    
     this.anims.create({ key: 'idle',
        frames: this.anims.generateFrameNumbers('lutadorB', { start: 0, end: 1 }),
        frameRate: 5, repeat: -1 });
    
    lutB.anims.play('idle', true);
    
    
    this.physics.add.collider(lutA, plataformas);
    this.physics.add.collider(lutB, plataformas);
    this.physics.add.collider(lutB, lutA);
}

function update ()
{
    
    if (cursors.left.isDown)
    {
        lutB.setVelocityX(-160);
        lutB.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        lutB.setVelocityX(160);
        lutB.anims.play('right', true);
    }
    else {
        lutB.anims.play('idle', true);
    }


}
   

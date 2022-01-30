
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
    plataformas.create(18, chao, 'plata').setOrigin(0, 0);
    
    vidaA = this.add.rectangle(560, 320, valorVidaA, 10, 0x6666ff).setOrigin(0, 0);
    vidaB = this.add.rectangle(20, 320, valorVidaB, 10, 0xff33cc).setOrigin(0, 0);
 
    //*******************
    // Cria a lutador A *
    //*******************
    lutA = this.physics.add.sprite(530, 180, 'lutadorA').setOrigin(0, 0);
    lutA.setBounce(0.2);
    lutA.setCollideWorldBounds(true);
    lutA.body.setGravityY(300)

    //*******************
    // Cria a lutador B *
    //*******************
    lutB = this.physics.add.sprite(230, 180, 'lutadorB').setOrigin(0, 0);
    lutB.setBounce(0.2);
    lutB.setCollideWorldBounds(true);
    lutB.body.setGravityY(300)

    
    this.physics.add.collider(lutA, platformas);
    this.physics.add.collider(lutB, platformas);
}

function update ()
{
}
   

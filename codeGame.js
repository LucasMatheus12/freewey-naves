// ============== NAVES =================

/*Declarando as variaveis de cada posição das naves, depois declarando a velocidade das naves*/ 

let xNave=[540, 540, 540, 540, 540, 540,];
let yNave=[70, 150, 230, 325, 400, 480, ];
let wNave=[50, 50, 50, 50, 50, 50,];
let hNave=[40, 40, 40, 40, 40, 40,];
let velocidadeNaves=[1.5, 2.8, 4.7, 1.8, 3, 2.8,];

let positionStart = 620;
let valueStart = 0;


function movimentaNaves(){
    for(let aux = 0; aux < naves.length; aux ++){
        if(xNave[aux] < valueStart){ 
            xNave[aux] = positionStart  
        };
        xNave[aux] -= velocidadeNaves[aux];
    };
}

//=============================================================================================



// ================================== COLISAO ========================================== 

function reiniciaPosicaoY(){
    yFoguete = 557;
}


//Pontos Foguete 
let points = 0;

/*função que  vai verificar a colisão dos foguetes com  a nave e se o foguete colidir com as naves vai diminuir um ponto.*/
function collisionCheck(){
    for(let aux = 0; aux < naves.length; aux++){
        if(
            (xFoguete + wFoguete) > xNave[aux] && 
            xFoguete < (xNave[aux] + wNave[aux]) &&
            yFoguete < (yNave[aux] + hNave[aux]) &&
            yFoguete + hFoguete > yNave[aux]
        ){
            reiniciaPosicaoY();
            playColider();

            if(points > 0){
                points--
            };
        };
        
    };
}


/*Função que vai verificar a pontuação do foguete */
function scoreVerification(){
    if(yFoguete < 15){
        reiniciaPosicaoY();
        playPoints()
        
        points++
    };
}

// ===============================================================================



// ====================================== IMAGENS =====================================


// tamanho do fundoTela
const xfundoTela = 0;
const yfundoTela = 0;
const wfundoTela = 600;
const hfundoTela = 600;

//imagens das naves
let fundoTela = './material/espaco.png'; 
let foguete = './material/foguete.png';
let naves = [
    './material/nave1.png', 
    './material/nave2.png', 
    './material/nave3.png',
    './material/nave1.png', 
    './material/nave2.png', 
    './material/nave3.png',
];


/*Função que vai permitir desenhar as imagens no cenário*/ 
function drawPictures(){
    drawScene(fundoTela, xfundoTela, yfundoTela, wfundoTela, hfundoTela);

    drawScene(foguete, xFoguete, yFoguete, wFoguete, hFoguete);

    for(let aux = 0; aux < naves.length; aux++){
        drawScene(
            naves[aux], 
            xNave[aux],
            yNave[aux], 
            wNave[aux], 
            hNave[aux],
        ); 
    };

    

}

//================================================================================


// ==================================== FOGUETE =================================== 

//Personagem
let xFoguete= 300;
let yFoguete = 557; 
let wFoguete = 28;
let hFoguete = 28;

//teclado
let teclaCima = 38;
let teclaBaixo = 40;
let taxaTeclado = 4;

function movimentoPersonagem(evento){
    if(evento.keyCode == teclaCima){
        yFoguete -= taxaTeclado

    }else if(evento.keyCode == teclaBaixo){
        if(yFoguete < 557){
            yFoguete += taxaTeclado
        }
    }
}

document.onkeydown = movimentoPersonagem;


// ======================================= MUSICA DO GAME ========================================


/* Função que vai permitir ouvir a musica durante o game, obs: a musica vai está em loop, ou seja, não vai parar*/
function playSong(){
    const audio = new Audio('./material/sons/music.mp3');
    audio.addEventListener('canplaythrough', function() {
    audio.play();
    audio.loop = true;
});
}

/* Função que permite ouvir o audio de colisão*/
function playColider(){
    const audio = new Audio('./material/sons/colider.mp3');
    audio.addEventListener('canplaythrough', function() {
    audio.play();
});


}function playPoints(){
    const audio = new Audio('./material/sons/points.wav');
    audio.addEventListener('canplaythrough', function() {
    audio.play();
});
}





// ===================================================================


// =================================== DESENHAR CENÁRIO ===========================================

/* Função que vai permitir desenhar o cenário, dentro dos parametros pode ser passado a estrada, carros e o personagem do game.*/ 

function drawScene(url, x1, y1, w1, h1){
    let scene = new Image(); 
    scene.src = url;
    let x = x1;
    let y = y1;
    let w = w1;
    let h = h1;

    scene.onload = function(){
        tool.drawImage(scene, x, y, w, h);
    };
};
// =======================================================================================


// =================================== PLACAR DO GAME =====================================

/* Função que vai permitir a visualização do placar do game */ 


function mostraPontuacao(){
    tool.font = "bold 20px Arial";
    tool.fillStyle = 'blue';
    tool.textAlign = 'center';
    tool.strokeStyle = "black";
    tool.strokeRect(500, 8, 40, 20);
    tool.fillRect(500, 8, 40, 20);
    tool.fillStyle = 'white';
    tool.fillText(points, 520, 26);
}
// ======================================================================================



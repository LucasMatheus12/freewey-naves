let viewfinder = document.querySelector('canvas'); 
let tool = viewfinder.getContext('2d');
viewfinder.width = 600;
viewfinder.height = 600; 


function atualizaTela(){
    
    drawPictures();
    movimentaNaves();
    collisionCheck();   
    scoreVerification();
}

playSong(); 

setInterval(atualizaTela,20);
setInterval(mostraPontuacao,0);




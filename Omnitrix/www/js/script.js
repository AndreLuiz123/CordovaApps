$(function(){

    var imagens = ["OmnitrixSymbol.png","chama.jpg","besta.jpg","diamante.jpg","quatro-bracos.jpg","fantasmatico.jpg","massa-cinzenta.jpg","aquatico.jpg","insectoide.jpg",];
    var i = 1;

    $(".heroi").click(function(){
        var fig = "url( img/"+imagens[i]+")";
        $(this).css("background",fig);
        $(this).css("background-repeat","no-repeat");
        $(this).css("background-size","100% 100%");
        i++;
        if(i>8)
          i=0;
    })

})
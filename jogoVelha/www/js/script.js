$(function(){
    var vez=1;
    var vencedor = "";
    
    var IA = new AI(1);
    IA.arvorePossibilidades();
    console.log(IA);
    
    function casasIguais(a,b,c){
        var casaA = $("#casa"+a);        
        var casaB = $("#casa"+b);
        var casaC = $("#casa"+c);

        var bgA = $("#casa"+a).css("background-image");
        var bgB = $("#casa"+b).css("background-image");
        var bgC = $("#casa"+c).css("background-image");

        if((bgA == bgB && bgB == bgC) && (bgA != "none" && bgA != "")){
            if(bgA.indexOf("1.png") >=0)
                vencedor = "X";
            else
                vencedor = "O";

                return true;
        }else
            return false;

    }

    function verificaVencedor(){
        if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
        casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
        casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
        ){
            $("#resultado").html("O jogador " + vencedor + " venceu!");
            $(".casa").off("click");
        }

    }

    $(".casa").click(function(){
        var bg = $(this).css("background-image");
        if(bg == "none"|| bg == ""){
            var fig = "url( img/"+vez.toString()+".png)";
            $(this).css("background",fig);
            $(this).css("background-repeat","no-repeat");
            $(this).css("background-size","100% 100%");
            vez = (vez == 1? 2:1);
        }
        verificaVencedor();
    })

    function restartSquares(){
        $(".casa").click(function(){
            var bg = $(this).css("background-image");
            if(bg == "none"|| bg == ""){
                var fig = "url( img/"+vez.toString()+".png)";
                $(this).css("background",fig);
                $(this).css("background-repeat","no-repeat");
                $(this).css("background-size","100% 100%");
                vez = (vez == 1? 2:1);
            }
            verificaVencedor();
        })  
    }
    

    $("#reiniciar").click(function(){
        for(var i=1; i<=9; i++)
        {
            var fig = "";
            $("#casa"+i).css("background",fig);
            $("#casa"+i).on("click",restartSquares);
        }

        vez = 1;
        vencedor = "";
        $("#resultado").html("");

    })

})
class ArvMinMax{

    constructor(){
        var casas = [".",".",".",".",".",".",".",".","."]
        var noRaiz = new NoArvMinMax(casas, null, 1);
        this.noRaiz = noRaiz;
    }

    constroiArvore(){
        this.noRaiz.criaFilhos();

        let i=0;

        for(i=0; i<this.noRaiz.nosFilhos.length; i++)
        {
            this.constroiArvoreAux(this.noRaiz.nosFilhos[i]);
        }
    }

    constroiArvoreAux(no){

        let i=0;

        if(no.criaFilhos()){   
            for(i=0; i<no.nosFilhos.length; i++)
            {
                this.constroiArvoreAux(no.nosFilhos[i]);
            }
        }
    }

}
class NoArvMinMax{

    constructor(casas, noPai, vez){
        this.casas = casas;
        this.noPai = noPai;
        this.nosFilhos = [];
        this.vez = vez;
    }

    criaFilhos(){
        var next = false;

        if(this.vez == 1)
        {
            for(var i=0; i<9; i++)
            {
                if(this.casas[i] == ".")
                {
                    next = true;
                    var casasAux = this.casasNovoNo();
                    var novoNo = new NoArvMinMax(casasAux,this,2);
                    this.nosFilhos.push(novoNo);
                    novoNo.casas[i] = "x";
                }
            }
        }else
        {
            for(var i=0; i<9; i++)
            {
                if(this.casas[i] == ".")
                {
                    next = true;
                    var casasAux = this.casasNovoNo();
                    var novoNo = new NoArvMinMax(casasAux,this,1);
                    this.nosFilhos.push(novoNo);
                    novoNo.casas[i] = "o";
                }
            }
        }

        return next;
    }

    casasNovoNo(){
        var casasAux = [];
        var valorAux;
        for(var i=0; i<9; i++)
        {
            valorAux = this.casas[i];
            casasAux.push(valorAux);
        }
        return casasAux;
    }


    debugNo(){
        console.log("| "+this.casas[0]+" | "+this.casas[1]+" | "+this.casas[2]+" |");
        console.log("| "+this.casas[3]+" | "+this.casas[4]+" | "+this.casas[5]+" |");
        console.log("| "+this.casas[6]+" | "+this.casas[7]+" | "+this.casas[8]+" |");
    }


}
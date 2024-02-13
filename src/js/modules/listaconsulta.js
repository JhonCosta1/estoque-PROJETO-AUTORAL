export class Listaconsulta{
    constructor(){
        this.recuperarFinal = JSON.parse(localStorage.getItem("listaFinal")) || []
        this.listaFinalGerar()
    }
    
    testeG(){
        localStorage.setItem('listaFinal', JSON.stringify(this.recuperarFinal))
    }

    listaFinalGerar(){
        this.geralProdutosFinal = document.querySelector("#lista-consulta");
        for(const produto of this.recuperarFinal){
        this.tr = document.createElement("tr");
        this.td1 = document.createElement("td");
        this.td1.textContent = produto.nome;
        this.td2 = document.createElement("td");
        this.td2.textContent = produto.validade;
        this.td3 = document.createElement("td");
        this.td3.textContent = produto.fabricante;
        this.td4 = document.createElement("td");
        this.td4.textContent = produto.quantidade;
        this.td5 = document.createElement("td");
        this.td5.textContent = produto.grupo;
        this.tr.appendChild(this.td1);
        this.tr.appendChild(this.td2);
        this.tr.appendChild(this.td3);
        this.tr.appendChild(this.td4);
        this.tr.appendChild(this.td5);
        this.geralProdutosFinal.appendChild(this.tr);
        }
    }
}

//const listagem = new Listaconsulta()
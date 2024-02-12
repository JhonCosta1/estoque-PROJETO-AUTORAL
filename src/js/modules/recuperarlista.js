
export class Recuperarlista{
    constructor(){
        this.recuperarProdutos = JSON.parse(localStorage.getItem("previsualizacao")) || []
        this.criarLista()
    }


    criarLista(){
        this.geralProdutos = document.querySelector("#geral-produtos");
        this.geralProdutos.innerHTML = "";
        for(const produto of this.recuperarProdutos){
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
        this.geralProdutos.appendChild(this.tr);
        }
    }

}
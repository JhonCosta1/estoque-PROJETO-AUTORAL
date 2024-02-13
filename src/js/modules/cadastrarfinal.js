export class Cadastrarfinal{
    constructor(){
        this.enviarListaFinal()
    }


    enviarListaFinal(){
        this.btnEnviar = document.querySelector("#btn-enviarF")
        this.geralProdutos = document.querySelector("#geral-produtos")
        this.btnEnviar.addEventListener("click", (e)=>{
            e.preventDefault()
            this.recuperarDefinitivo = JSON.parse(localStorage.getItem("previsualizacao")) || []
            localStorage.setItem("listaFinal", JSON.stringify(this.recuperarDefinitivo));
            this.geralProdutos.innerHTML = ""
        })
        
    }
}
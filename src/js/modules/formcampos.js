export class Formadicionar{
    constructor(){
        this.configurarListeners()
        this.listaPreVisualizacao = JSON.parse(localStorage.getItem('previsualizacao')) || []
    }

    previsualizacaoLocalStorage(){
        localStorage.setItem('previsualizacao', JSON.stringify(this.listaPreVisualizacao));
    }

    validarCampos(){
        return (
            this.nomeProduto !== "" &&
            this.validade !== "" &&
            this.fabricante !== "" &&
            this.quantidade !== "" &&
            this.grupo !== ""
        )
    }


    adicionarProdutos(){
        const produto = {
            nome: this.nomeProduto,
            validade: this.validade,
            fabricante: this.fabricante,
            quantidade: this.quantidade,
            grupo: this.grupo,
        }
        this.listaPreVisualizacao.push(produto)
        this.previsualizacaoLocalStorage()
        this.div.remove()
    }


    exibirPreencherTodos() {
        this.seletormodal = document.querySelector(".h4-modalcampos")
        if(!this.seletormodal){
            this.div = document.createElement("h4")
            this.div.textContent = "Preencha todos os campos!"
            this.div.classList.add("h4-modalcampos")
            this.h1Titulo.parentNode.insertBefore(this.div, this.h1Titulo.nextSibling)
        }
    }

    configurarListeners() {
        this.btnAdc = document.querySelector("#btn-adc")
        this.btnAdc.addEventListener("click", (e) => {
            e.preventDefault()

            this.nomeProduto = document.querySelector("#nome-produto").value.trim()
            this.validade = document.querySelector("#validade").value.trim()
            this.fabricante = document.querySelector("#fabricante").value.trim()
            this.quantidade = document.querySelector("#quantidade").value.trim()
            this.grupo = document.querySelector("#grupo-produto").value.trim()
            this.h1Titulo = document.querySelector(".h1-cadastroproduto")

            if (this.validarCampos()) {
                this.adicionarProdutos()
            } else {
                this.exibirPreencherTodos()
            }
        })
    }
}
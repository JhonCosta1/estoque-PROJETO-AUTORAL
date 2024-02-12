import { Recuperarlista } from '../modules/recuperarlista.js'
export class Formadicionar extends Recuperarlista{
    constructor(){
        super()
        this.configurarListeners()
        this.criarLista()
    }

    previsualizacaoLocalStorage(){
        localStorage.setItem('previsualizacao', JSON.stringify(this.recuperarProdutos))
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
        this.recuperarProdutos.push(produto)
        this.criarLista()
        this.previsualizacaoLocalStorage()
        if(this.div){
            this.div.remove()
        }
        this.limparCampos()
        this.exibirPreencherTodos("Produto enviado para lista")
    }


    exibirPreencherTodos(msg) {
        this.seletormodal = document.querySelector(".h4-modalcampos")
        if(!this.seletormodal){
            this.div = document.createElement("h4")
            this.div.textContent = msg
            this.div.classList.add("h4-modalcampos")
            this.h1Titulo.parentNode.insertBefore(this.div, this.h1Titulo.nextSibling)
        }
    }

    limparCampos(){
        this.nomeProduto = document.querySelector("#nome-produto").value = ""
        this.validade = document.querySelector("#validade").value = ""
        this.fabricante = document.querySelector("#fabricante").value = ""
        this.quantidade = document.querySelector("#quantidade").value = ""
        this.grupo = document.querySelector("#grupo-produto").value = ""
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
                this.exibirPreencherTodos("Preencha todos os campos!")
            }
        })
    }
}



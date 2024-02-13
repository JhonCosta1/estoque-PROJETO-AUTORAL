export class Direcionarconsulta{
    constructor(){
        this.btnConsultar = document.querySelector(".btn-consultar")
        this.btnInicio = document.querySelector(".btn-inicial")
        this.redirecionar()
    }

    alterarPagina(valor){
        this.a = document.createElement("a")
        this.a.href = valor
        this.a.target = "_self"
        this.a.click()
    }

    redirecionar(){
        this.btnConsultar.addEventListener("click", (e)=>{
            e.preventDefault()
            this.alterarPagina("consulta.html")
        })

        this.btnInicio.addEventListener("click", (e)=>{
            e.preventDefault()
            this.alterarPagina("index.html")
        })
    }
}

const direcionarConsulta = new Direcionarconsulta()
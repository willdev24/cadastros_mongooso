
const main ={

    init: function(){
        this.buscarhtml()
        this.AdicionarEventos()    

    },

    buscarhtml: function(){
    this.$excluir = document.querySelectorAll("#excluir")
    this.$alerta = document.querySelector(".alertaPai")    
    this.$apagar = document.querySelector("#sim")
    this.$retornar = document.querySelector("#nao")

},

    AdicionarEventos:function(){
        const self = this
        
        this.$excluir.forEach( itens => {
            itens.addEventListener('click',self.Evento.adicionarClick.bind(self))            
        });

        this.$apagar.addEventListener('click',self.Evento.Prosseguir.bind(self))
        
        this.$retornar.addEventListener('click',self.Evento.retornar.bind(self))
    


    },


Evento:{

adicionarClick:function(e){ 

const done = this.$alerta.classList.contains("abrir")

if(done == false){
    this.$alerta.classList.add("abrir")

}

},

Prosseguir: function(e){

    const id = e.target.dataset.local  
    console.log(id)
console.log(e.target)
    const test = "/deletar"

   // window.location.href = window.location.origin + test 
      

},

retornar:function(e){

    const test = "/listar"

    window.location.href = window.location.origin + test
        
}



}    

 }

main.init()
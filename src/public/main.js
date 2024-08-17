
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

        this.$retornar.addEventListener('click',self.Evento.retornar.bind(self))
    


    },


Evento:{

adicionarClick:function(e){ 

const self = this
const done = this.$alerta.classList.contains("abrir")

if(done == false){
    this.$alerta.classList.add("abrir")

}

self.id = e.target.dataset.local


this.$apagar.addEventListener('click',function(e){
  

    const a = self.id
    const as = JSON.stringify(a)
    
   window.location.href = window.location.origin +"/deletar?id=" + a
    
})

},


retornar:function(e){

    window.location.href = window.location.origin + "/listar"
        
}



}    

 }

main.init()

const main ={

    init: function(){
        this.buscarhtml()
        this.AdicionarEventos()    

    },

    buscarhtml: function(){
    this.$excluir = document.querySelectorAll("#excluir")
    this.$alerta = document.querySelector(".alertaPai")    
    },


    AdicionarEventos:function(){
        const self = this
        
        this.$excluir.forEach( itens => {
            itens.addEventListener('click',self.Evento.adicionarClick.bind(self))
            
        });

                
    },


Evento:{

adicionarClick:function(e){ 

const done = this.$alerta.classList.contains("abrir")

if(done == false){
    this.$alerta.classList.add("abrir")

}
}



}    

 }

main.init()
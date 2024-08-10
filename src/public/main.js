
const main ={

    init: function(){
        this.buscarhtml()
        this.AdicionarEventos()    

    },

    buscarhtml: function(){
    this.$excluir = document.querySelectorAll("#excluir")
    
    },


    AdicionarEventos:function(){
        const self = this
        
        this.$excluir.forEach( itens => {
            itens.addEventListener('click',self.Evento.adicionarClick.bind(self))
            
        });

                
    },


Evento:{

adicionarClick:function(e){ 

console.log(e)

}


}    

 }

main.init()
var manipuladoresHTML = {
    criaElementos : function (tag, arrayAtributos) {
        arrayAtributos = arrayAtributos || [];
        let createTag = document.createElement(tag);
        arrayAtributos.forEach(function(attr){
            createTag.setAttribute(attr.nomeAttr, attr.valor);
        });

        return createTag;
    },
    criaClasses : function (criarClasseDestaque, callback) {
        if ( criarClasseDestaque ) {  
            return callback();
        } else {
            return ''
        }
    },
    toggleClass : function (element, classe) {
        let listClass = element.classList;
        if ( listClass.value.indexOf(classe) < 0 ) {
            element.classList.add(classe)
        } else {
            element.classList.remove(classe);
        }
    } 
}
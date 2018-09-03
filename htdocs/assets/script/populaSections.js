(function(){
    let $ = document.querySelector.bind(document);
    let data = 'http://localhost:3000/data.json';
    let populaHTML = {
        init : function () {
            ajax.get(data, function(result){
                console.log(JSON.parse(result));
                populaHTML.populaCategorias(result);
            });
        }, 
        defineAcordeon : function ({botao, conteudo}) {
            DOMAnimations.slideUp(conteudo);
            botao.addEventListener('click', function() {
                DOMAnimations.slideToggle(conteudo);
            });
        },
        populaCategorias : function (result) {
            let data = JSON.parse(result);
            data.section.forEach(function(section){
                
                $(`#${section.name}`).innerHTML = populaHTML.populaNoticias(section);
                
            })  
            
            this.defineAcordeon({
                botao: $('#Brasil .maisNoticias'),
                conteudo: $('#Brasil .acordeon')
            });

            $('#Brasil .maisNoticias').addEventListener('click', function(){
                manipuladoresHTML.toggleClass(this, 'active');
            });
            
            this.defineAcordeon({
                botao: $('#Mundo .maisNoticias'),
                conteudo: $('#Mundo .acordeon')
            });

            $('#Mundo .maisNoticias').addEventListener('click', function(){
                manipuladoresHTML.toggleClass(this, 'active');
            });

        },
        populaNoticias : function (noticia) {
            let contDestaque = manipuladoresHTML.criaElementos('ul', [{nomeAttr: 'class', valor: 'destaque'}]);
            let conteudo = manipuladoresHTML.criaElementos('ul', [{nomeAttr: 'class', valor: 'grid'}]);            
            let conteudoAcordeon = manipuladoresHTML.criaElementos('ul', [{nomeAttr: 'class', valor: 'grid acordeon'}]);
            let div = manipuladoresHTML.criaElementos('ul');
            let titulo = manipuladoresHTML.criaElementos('h2', [{nomeAttr: 'class', valor: 'titulo-secao'}]);
            let botaoMaisNoticia = manipuladoresHTML.criaElementos('a', [{nomeAttr: 'class', valor: 'maisNoticias'},{nomeAttr: 'href', valor: 'javascript:;'}])
            
            noticia.data.forEach(function(data, idx){
                if ( noticia.name === 'main' && idx < 4 ) {
                    contDestaque.innerHTML += '\n'+templates.noticias(data, idx, true);
                } else if (noticia.name !== 'main' && idx > 3) {
                    conteudoAcordeon.innerHTML += '\n'+templates.noticias(data, idx);
                } else {
                    conteudo.innerHTML += '\n'+templates.noticias(data, idx);
                }
            });

            if ( noticia.name === 'main' ) {
                div.appendChild(contDestaque);
                div.appendChild(conteudo);
            } else {
                
                titulo.innerHTML = noticia.name;
                botaoMaisNoticia.innerHTML = noticia.name;
                
                div.appendChild(titulo);      
                div.appendChild(conteudo);
                if ( conteudoAcordeon.innerHTMl != '' ) {
                    div.appendChild(conteudoAcordeon);
                }
                div.appendChild(botaoMaisNoticia);
            }
            
            return div.innerHTML;
        }
    }

    populaHTML.init();
}())

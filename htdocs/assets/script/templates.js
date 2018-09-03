let templates = {
    noticias : function (data, idx, destaque) {
        return `<li class="${
            manipuladoresHTML.criaClasses(destaque, function(){
                if ( idx < 2 ) {
                    return 'destaque';
                } else if (idx > 1 && idx < 4){ 
                    return 'destaque2';
                }
            })
        }">
            <a href="${data.url}" class="cotNoticias">   
                <picture><img src="images/${data.image}" alt="${data.title}"></picture>
                <div>
                    <h2>${data.label}</h2>
                    <h3>${data.title}</h3>
                ${!destaque?'</div>':''} 
                    <p>${data.description}</p>
                ${destaque?'</div>':''}

            </a>
            <a href="javascript:(share);" class="share"></a>
        </li>`
    }
}
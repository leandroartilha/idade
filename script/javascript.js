function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade < 12){
                //criança
                img.setAttribute('src', '../imagens/menino.png')
            }else if(idade < 21){
                //adolescente
                img.setAttribute('src', '../imagens/harry.png')
            }else if(idade<55){
                //adulto
                img.setAttribute('src', '../imagens/tirulipa.png')
            }else{
                //idoso
                img.setAttribute('src' , '../imagens/velho.png')

            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade < 12){
                img.setAttribute('src', '../imagens/menina.png')
            }else if(idade < 21){
                //adolescente
                img.setAttribute('src', '../imagens/puzzoli.png')
            }else if(idade<55){
                //adulto
                img.setAttribute('src', '../imagens/calabresaa.png')
            }else{
                //idoso
                img.setAttribute('src', '../imagens/velha.png')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
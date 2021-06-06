// 1 -> CONTROLE DAS AREAS DA TELA

// 1.1 Criar uma variável para  cada uma das informações,

// 1.2 Variáveis de controle de interface
let seuvotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector(".d-1-4");
let aviso = document.querySelector('.d-2');
let fotosLaterais = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');


// 2 PREENCHENDO A INTERFACE COM NÚMEROS

// 2.1 Variáveis de controle de ambiente
let etapaAtual = 0;
let numero = ""; // 2.4 -> vai receber o numeros digitados


// 2.2 => essa  função vai limpar a tela, vai pegar as informações da  etapaAtual e vai preencher
function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml ="";
    
    for(let i=0; i < etapa.numeros; i++){
        if(i === 0){
            numeroHtml +='<div class="numero pisca"></div>';
        }else{
            numeroHtml +='<div class="numero"></div>';
        }
        
    }
    seuvotoPara.style.display="none";
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = "";
    aviso.style.display='none';
    fotosLaterais.innerHTML="";
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface(){ // 2.3 
    let etapa = etapas[etapaAtual]; // 3 -> PROCURANDO CANDIDATOS
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){ // se o numero do candidato for igual ao numero digitado
            return true;
        }else{
            return false;
        }

    });
    if(candidato.length > 0){  //3.1
        candidato = candidato[0];
        seuvotoPara.style.display="block";
        aviso.style.display='block';
        descricao.innerHTML = `Nome: ${candidato.name}<br/>Partido:${candidato.partido}`;

        let fotos = "";
        for(let i in candidato.fotos){
            fotos +=`<div class="d-1-image">
            <img src="/imagens/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}
        </div>`
        }
       
        fotosLaterais.innerHTML= fotos
        
    }
    console.log("Candidato", candidato);

}

function clicado(n){ // 2
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null){  //se elNumero for diferente de nulo ele preenche
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){ // se o proximo elemento de elNumero for diferente de nulo, ele adiciona a classe
            elNumero.nextElementSibling.classList.add('pisca');
        }else{   // se não, ele atualiza a interface
            setTimeout(atualizaInterface,1000);
           /*  atualizaInterface(); */
        }
        
    }
};

function branco(){ // 2
    alert('clicou em branco');

};

function corrige(){ // 2
    alert('clicou em corrige')


};

function confirma(){ // 2
    alert('clicou em confirma')

};
comecarEtapa();
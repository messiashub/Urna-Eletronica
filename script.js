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
let numero = "";


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

function atualizaInterface(){
    alert('finalizou o voto')

}

function clicado(n){
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero} ${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface();
        }
        
    }
};

function branco(){
    alert('clicou em branco');

};

function corrige(){
    alert('clicou em corrige')


};

function confirma(){
    alert('clicou em confirma')

};
comecarEtapa();
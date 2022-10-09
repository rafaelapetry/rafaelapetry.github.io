
function entradactor() {
    let celsius = document.getElementById('entrada-ctor').value ;

    let ctor = ((celsius * 21/40) + 7.5);
    (celsius < -273.15) ? document.getElementById('resultado').value= "Valor inexistente abaixo de 0 K!" :
    document.getElementById('resultado').value= ctor;
}

document.getElementById('btn-ctor').addEventListener('click', entradactor);


function entradawatt() {
    let watt = document.getElementById('entrada-watt').value ;

    let watt0 = (watt * 0.00135962).toFixed (5);
    let watt1 = (watt * 0.00134102).toFixed (5);
    let watt2 = (watt * 3.4121416331279).toFixed (5);

    document.getElementById('resultado-cv').value= watt0;
    document.getElementById('resultado-hp').value= watt1;
    document.getElementById('resultado-btu').value= watt2;

}

document.getElementById('btn-watt').addEventListener('click', entradawatt);


function area() {
    let a = document.getElementById('entrada-comp').value ;
    let b = document.getElementById('entrada-larg').value;
    let c = document.getElementById('entrada-altu').value;

    let area = (2 * (a * b + b * c +  a * c ));

    document.getElementById('resultado-area').value= area;

}
document.getElementById('btn-area').addEventListener('click', area);


function volume() {
    let a = document.getElementById('entrada-comp').value ;
    let b = document.getElementById('entrada-larg').value;
    let c = document.getElementById('entrada-altu').value;

    let volume = ( a * b * c );

    document.getElementById('resultado-volume').value= volume;

}
document.getElementById('btn-volume').addEventListener('click', volume);


function seleciona( aba ){
    let lista = document.getElementsByClassName('wrapper');
    for (let i = 0; i < lista.length ; i++){
        document.getElementById('wrapper-' + i).style.display ='none';
        //document.getElementById('btn-' + i).style.background ='#transparent';
        document.getElementById('btn-' + i).classList.remove('ativa');
    }
    document.getElementById('wrapper-' + aba).style.display ='grid';
    //document.getElementById('btn-' + aba).style.background ='#eee';
    document.getElementById('btn-' + aba).classList.add('ativa');
}

window.onload = seleciona(0);

document.getElementById('btn-0').addEventListener('click', function(){seleciona(0)});
document.getElementById('btn-1').addEventListener('click', function(){seleciona(1)});
document.getElementById('btn-2').addEventListener('click', function(){seleciona(2)});

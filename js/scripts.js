/* Atividade 1 */

function mostrarErro(mensagem) {
    let divErro = document.getElementById('mensagem-erro');

    divErro.style.display = 'block';
    divErro.innerText = mensagem;
}

function esconderErro() {

    let divErro = document.getElementById('mensagem-erro');
    divErro.style.display = 'none';
}

function validarDados() {

    let data = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let produto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let ValorUnitario = frmRegistro.inVal.value;

    esconderErro();

    if (data.trim() == '') {
        mostrarErro('O campo "Data" não pode estar vazio!');
        frmRegistro.inData.focus();
        return false;
    }


    if (nome.trim() == '' || nome.trim().length < 5) {
        mostrarErro('O campo "Nome" não pode estar vazio ou ter menos que cinco caracteres!');
        frmRegistro.inCli.focus();
        return false;
    }


    if (telefone.trim() == '' || telefone.trim().length < 5) {
        mostrarErro('O campo "Telefone" não pode estar vazio ou ter menos que cinco caracteres!');
        frmRegistro.inFone.focus();
        return false;
    }


    if (email.trim() == '' || email.trim().length < 5) {
        mostrarErro('O campo "E-mail" não pode estar vazio ou ter menos que cinco caracteres!');
        frmRegistro.inMail.focus();
        return false;
    }


    if (produto.trim() == '' || produto.trim().length < 5) {
        mostrarErro('O campo "Produto" não pode estar vazio ou ter menos que cinco caracteres!');
        frmRegistro.inProd.focus();
        return false;
    }


    if (quantidade.trim() == '' || quantidade < 0) {
        mostrarErro('O campo "Quantidade" não pode estar vazio ou ser negativo!');
        frmRegistro.inQtd.focus();
        return false;
    }


    if (ValorUnitario.trim() == '' || ValorUnitario < 0) {
        mostrarErro('O campo "Valor Unitário" não pode estar vazio ou ser negativo!');
        frmRegistro.inVal.focus();
        return false;
    }

}


/* Atividade 2*/

function fotos() {
    let quantidade = document.getElementById('inQtdImg').value;
    let canvas = document.getElementById('canvas');
    canvas.innerHTML = '';
    let imagensHTML = '';
    for (let i = 0; i < quantidade; i++) {
        imagensHTML += `<img src="img/logo.png" class="imagens" alt="Imagem ${i + 1}">`;
    }
    canvas.innerHTML = imagensHTML;
}



/* Atividade 3*/

function acender() {

    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);

    if (arquivo == 'acesa.jpg' || arquivo == '') {
        imagem.src = 'img/apagada.jpg';
    }
    else {
        imagem.src = 'img/acesa.jpg';
    }

}

/* Atividade 4 */

function enviar() {
    let valorPedido = parseFloat(document.getElementById("inValorPedido").value);

    let percentualDesconto = 0;
    let valorDesconto = 0;
    let valorLiquido = 0;
    if (valorPedido >= 2000) {
        percentualDesconto = 1.5;
    } else if (valorPedido >= 1500) {
        percentualDesconto = 1.0;
    } else if (valorPedido >= 1000) {
        percentualDesconto = 0.8;
    } else if (valorPedido >= 500) {
        percentualDesconto = 0.5;
    }
    valorDesconto = (percentualDesconto / 100) * valorPedido;
    valorLiquido = valorPedido - valorDesconto;
    document.getElementById("inPercDesc").value = percentualDesconto;
    document.getElementById("inValDesc").value = valorDesconto;
    document.getElementById("inValFinal").value = valorLiquido;
}


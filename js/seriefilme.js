function getStorageLogada() {
    return JSON.parse(localStorage.getItem('pessoaLogada')||[]);
}

function setArrayStorage(arr) {
    localStorage.setItem('listaProdutos', JSON.stringify(arr)) || [];

}

function getArrayStorage() {
    return JSON.parse(localStorage.getItem('listaProdutos')) || [];
}

$(function () {
    var pessoalogada = getStorageLogada();

    document.getElementById("nomeusuariologado").innerHTML = pessoalogada.nome;
    
    let botao = document.getElementsByClassName('btn-success');

    for (let i = 0; i < botao.length; i++) {
        let buttonselecionado = botao[i];
        buttonselecionado.addEventListener('click', function () {


            let div = buttonselecionado.parentElement.parentElement.parentElement;

            let titulo = div.querySelector('.produtos-titulo').textContent;
            let preco = div.querySelector('.produtos-preco').textContent;
            var imagem = div.querySelector(".produtos-img").src;
            let produto = {
                titulo,
                preco,
                imagem
            }
            let prod = [];
            prod.push(produto);

            arrayCarrinho = getArrayStorage();
            arrayCarrinho.forEach(element => {
                prod.push(element);
            });
            setArrayStorage(prod);

        });
    }




})
const btAdicionar = document.querySelector("#btAdicionar");


btAdicionar.addEventListener('click', function (e) {
    e.preventDefault();
   
    setProduto();
    
    
    
})

function novoProduto() {
    let titulo = document.querySelector('.produtos-titulo');
    let preco = document.querySelector('.produtos-preco');
    var imagem = document.querySelector(".produtos-img");
    let produto = {
        titulo: titulo.innerHTML,
        preco: preco.innerHTML,
        imagem: imagem.src
    }
    return produto;
}

function setArrayStorage(arr) {
    localStorage.setItem('listaProdutos', JSON.stringify(arr))|| [];
    //Storage.length('listaProdutos');
}

function getArrayStorage() {
    return JSON.parse(localStorage.getItem('listaProdutos')) || [];
}

function setProduto() {

    let produto = novoProduto();
    let prod = [];
    prod.push(produto);
    
    arrayCarrinho = getArrayStorage();
    arrayCarrinho.forEach(element => {
        prod.push(element);
    });
    setArrayStorage(prod);
    

    


}
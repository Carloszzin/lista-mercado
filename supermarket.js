/* var items = []

document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');

    items.push({
        nome:nomeProduto.value,
        valor:precoProduto.value
    });
    

        let listaProdutos = document.querySelector('.lista-produtos');
        let soma = 0;
        listaProdutos.innerHTML="";
        items.map(function(val){
            soma += parseFloat(val.valor);
            listaProdutos.innerHTML+=`
        <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
            <button class="delete-button" name="delete">Excluir</button>
        </div>`;
    })


    soma = soma.toFixed(2);
    nomeProduto.value ="";
    precoProduto.value= "";

    let total = document.querySelector('.soma-total h1');
    total.innerHTML = "Total: R$"+soma;
})


document.querySelector('button[name=clean]')
.addEventListener('click',()=>{
    items = [];

    listaProdutos = document.querySelector('.lista-produtos').innerHTML = "";
    total = document.querySelector('.soma-total h1').innerHTML = "Total: R$ 0,00";
})*/


        var items = [];

        document.querySelector('input[type=submit').addEventListener('click', () => {
            var nomeProduto = document.querySelector('input[name=nome_produto');
            var precoProduto = document.querySelector('input[name=price');

            items.push({
                nome: nomeProduto.value,
                valor: precoProduto.value
            });

            updateList();

            nomeProduto.value = "";
            precoProduto.value = "";
        });

        document.querySelector('.lista-produtos').addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-button')) {
                const itemIndex = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
                items.splice(itemIndex, 1);
                updateList();
            }
        });

        function updateList() {
            let listaProdutos = document.querySelector('.lista-produtos');
            let soma = 0;
            listaProdutos.innerHTML = "";

            items.map(function (val) {
                soma += parseFloat(val.valor);
                listaProdutos.innerHTML += `
                <div class="lista-produto-single">
                    <h3>${val.nome}</h3>
                    <h3 class="price-produto"><span>R$${val.valor}</span></h3>
                    <button class="delete-button" name="delete">Excluir</button>
                </div>`;
            });

            soma = soma.toFixed(2);
            let total = document.querySelector('.soma-total h1');
            total.innerHTML = "Total: R$" + soma;
        }

        document.querySelector('button[name=clean]')
        .addEventListener('click',()=>{
            items = [];

            listaProdutos = document.querySelector('.lista-produtos').innerHTML = "";
            total = document.querySelector('.soma-total h1').innerHTML = "Total: R$ 0,00";
        });

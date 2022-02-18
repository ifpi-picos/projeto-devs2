const divImoveis = document.querySelector("#imovel")
const mostrarImoveis = document.getElementById('btt')
const limpar = document.querySelector('#bttSalvar')

async function consutaImoveis() {
    const retorno = await fetch('http://localhost:3000/imoveis')
    const imovels = await retorno.json()
    mostrarImoveis.addEventListener('click', () => {
        preencheTela(imovels)
    })
}

function preencheTela(imovels) {
    imovels.forEach(imovel => {
        const imoveisHTML = `
        <div class="imovel">
        <tr>
            <td>${imovel.cidade}</td>
            <td>${imovel.bairro}</td>
            <td>${imovel.valorAluguel}</td>
            <td>${imovel.quantInquilinos}</td>
            <td>${imovel.telefone}</td>
        </tr>
        `
        divImoveis.innerHTML = divImoveis.innerHTML + imoveisHTML
    });
}
consutaImoveis()

limpar.addEventListener('click', () => {
    divImoveis.innerHTML = ''
})
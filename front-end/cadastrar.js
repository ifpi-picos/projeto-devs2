const btn = document.querySelector('#bttSalvar')

btn.addEventListener('click', () => {
    const imovel = getDadosForm()
    enviarDadosParaAPI(imovel)
})

function getDadosForm() {
    const inputCidade = document.querySelector('#cidade')
    const inputBairro = document.querySelector('#bairro')
    const inputValorAluguel = document.querySelector('#valorAluguel')
    const inputQuantiIquilinos = document.querySelector('#quantInquilinos')
    const inputTelefone = document.querySelector('#telefone')

    const imovels = {
        cidade: inputCidade.value,
        bairro: inputBairro.value,
        valorAluguel: inputValorAluguel.value,
        quantInquilinos: inputQuantiIquilinos.value,
        telefone: inputTelefone.value
    }
    return imovels
}

async function enviarDadosParaAPI(imovels) {
    try {
        const resposta = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(imovels)
        })
        if (resposta.status === 201) {
            limparCampos()
            window.location.href = 'home.html'
        } else {
            console.log('Erro ao adicionar imovel')
        }
    } catch (erro) {
        console.error(erro)
    }
}
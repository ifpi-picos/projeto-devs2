const btn = document.querySelector('#bttSalvar')
const LOCAL_API_URL = 'http://localhost:3000/api'

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
        const resposta = await fetch('http://localhost:3000/imoveis', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(imovels)
        })
        if (resposta.status === 201) {
            limparCampos()
        } else {
            console.log('Erro ao adicionar imovel')
        }
    } catch (erro) {
        console.error(erro)
    }
}

function limparCampos() {
    document.querySelector('#cidade').value = ''
    document.querySelector('#bairro').value = ''
    document.querySelector('#quantInquilinos').value = ''
    document.querySelector('#valorAluguel').value = ''
    document.querySelector('#telefone').value = ''
}
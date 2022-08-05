//Simulação de DB
const login = {
    email: 'xx@xx.com',
    senha: 123,
}

const empresas = [
    {
        nome: 'Empresa X',
        cnpj: 123,
        cidade: 'ecopos',
        coordenadas: 0000,
        informacoesGerais: 'Telefone: 226299561, encarregado Antonio'
    },
    {
        nome: 'Empresa A',
        cnpj: 1231,
        cidade: 'ecopos',
        coordenadas: 0000,
        informacoesGerais: 'Telefone: 226299561, encarregado Antonio'
    },
    {
        nome: 'Empresa D',
        cnpj: 12312,
        cidade: 'xico',
        coordenadas: 0000,
        informacoesGerais: 'Telefone: 226299561, encarregado Antonio'
    },
    {
        nome: 'Empresa T',
        cnpj: 123123,
        cidade: 'ecopos',
        coordenadas: 0000,
        informacoesGerais: 'Telefone: 226299561, encarregado Antonio'
    },
    {
        nome: 'Empresa O',
        cnpj: 1230,
        cidade: 'xico',
        coordenadas: 0000,
        informacoesGerais: 'Telefone: 226299561, encarregado Antonio'
    }
]

/*********************************************************************************/
//     window.location.replace("http://127.0.0.1:5500/infos.html") direciona para a url;


const cpnjInput = document.getElementById('cnpjInput');
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

function pesquisarPorCnpj() {    
    let cnpjEmpresa = empresas.filter((empresa) => {                
        return empresa.cnpj === Number(cpnjInput.value);
    })

    console.log(cnpjEmpresa[0].nome);    
}
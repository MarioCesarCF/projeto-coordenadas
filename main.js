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
const cidadeInput = document.getElementById('cidadeInbut');
let table = document.getElementById('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

function pesquisarPorCnpj() {         
    let cnpjEmpresa = empresas.filter((empresa) => {                
        return empresa.cnpj === Number(cpnjInput.value);
    })

    table.innerHTML.replace('', `        
        <tbody><tr>
            <td>${cnpjEmpresa[0].nome}</td>
            <td>${cnpjEmpresa[0].cnpj}</td>
            <td>${cnpjEmpresa[0].cidade}</td>
            <td>${cnpjEmpresa[0].informacoesGerais}</td>
            <td>${cnpjEmpresa[0].coordenadas}</td>
        </tr></tbody>
    ` )
}

function pesquisarPorCidade() {   
    if(!tbody) {
        tbody.innerHTML += `        
        <tbody><tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr></tbody>
        `  
    } 
    let cidadeEmpresa = empresas.filter((empresa) => {                
        return empresa.cidade === cidadeInput.value;
    })
    
    for(let i = 0; i < cidadeEmpresa.length; i++) {
        table.innerHTML += `        
        <tbody><tr>
            <td>${cidadeEmpresa[i].nome}</td>
            <td>${cidadeEmpresa[i].cnpj}</td>
            <td>${cidadeEmpresa[i].cidade}</td>
            <td>${cidadeEmpresa[i].informacoesGerais}</td>
            <td>${cidadeEmpresa[i].coordenadas}</td>
        </tr></tbody>
        ` 
    }    
}
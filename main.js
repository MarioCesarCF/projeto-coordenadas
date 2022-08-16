//Simulação de DB

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

/************************************************************************************************************************************************/
//     window.location.replace("http://127.0.0.1:5500/infos.html") direciona para a url;


const cnpjInput = document.getElementById('cnpjInput');
const cidadeInput = document.getElementById('cidadeInbut');
const nomeInput = document.getElementById('nomeInput');
let table = document.getElementById('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');
const btnBuscarCnpj = document.getElementById('btnBuscarCnpj');
const btnBuscarCidade = document.getElementById('btnBuscarCidade');
const btnBuscarNome = document.getElementById('btnBuscarNome');

// table.appendChild(thead);
// table.appendChild(tbody);

btnBuscarCnpj.addEventListener('click', (e) => {
  e.preventDefault();
  table.innerHTML = `<thead><tr>
    <th>Nome da Empresa</th>
    <th>CNPJ da Empresa</th>
    <th>Cidade</th>
    <th>Informações gerais</th>
    <th>Coordenadas</th>
    </tr></thead>`;
  let cnpjEmpresa = empresas.filter((empresa) => {
    return empresa.cnpj === Number(cnpjInput.value);
  })

  table.innerHTML += `        
        <tbody><tr>
            <td>${cnpjEmpresa[0].nome}</td>
            <td>${cnpjEmpresa[0].cnpj}</td>
            <td>${cnpjEmpresa[0].cidade}</td>
            <td>${cnpjEmpresa[0].informacoesGerais}</td>
            <td>${cnpjEmpresa[0].coordenadas}</td>
        </tr></tbody>
    `
  cnpjInput.value = '';
})

btnBuscarCidade.addEventListener('click', (e) => {
  e.preventDefault();
  table.innerHTML = `<thead><tr>
    <th>Nome da Empresa</th>
    <th>CNPJ da Empresa</th>
    <th>Cidade</th>
    <th>Informações gerais</th>
    <th>Coordenadas</th>
    </tr></thead>`;
  let cidadeEmpresa = empresas.filter((empresa) => {
    return empresa.cidade === cidadeInput.value;
  })

  for (let i = 0; i < cidadeEmpresa.length; i++) {
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
  cidadeInput.value = '';
})

btnBuscarNome.addEventListener('click', (e) => {
  e.preventDefault();
  table.innerHTML = `<thead><tr>
    <th>Nome da Empresa</th>
    <th>CNPJ da Empresa</th>
    <th>Cidade</th>
    <th>Informações gerais</th>
    <th>Coordenadas</th>
    </tr></thead>`;
  let nomeEmpresa = empresas.filter((empresa) => {
    return empresa.nome === nomeInput.value;
  })

  for (let i = 0; i < nomeEmpresa.length; i++) {
    table.innerHTML += `        
      <tbody><tr>
        <td>${nomeEmpresa[0].nome}</td>
        <td>${nomeEmpresa[0].cnpj}</td>
        <td>${nomeEmpresa[0].cidade}</td>
        <td>${nomeEmpresa[0].informacoesGerais}</td>
        <td>${nomeEmpresa[0].coordenadas}</td>
      </tr></tbody>
    `
  }

  nomeInput.value = '';
})

// function pesquisarPorCnpj() {
//   table.innerHTML = `<thead><tr>
//     <th>Nome da Empresa</th>
//     <th>CNPJ da Empresa</th>
//     <th>Cidade</th>
//     <th>Informações gerais</th>
//     <th>Coordenadas</th>
//     </tr></thead>`;
//   let cnpjEmpresa = empresas.filter((empresa) => {
//     return empresa.cnpj === Number(cpnjInput.value);
//   })

//   table.innerHTML += `
//         <tbody><tr>
//             <td>${cnpjEmpresa[0].nome}</td>
//             <td>${cnpjEmpresa[0].cnpj}</td>
//             <td>${cnpjEmpresa[0].cidade}</td>
//             <td>${cnpjEmpresa[0].informacoesGerais}</td>
//             <td>${cnpjEmpresa[0].coordenadas}</td>
//         </tr></tbody>
//     `
//   cpnjInput.value = '';


// }

// function pesquisarPorCidade() {
//   table.innerHTML = `<thead><tr>
//     <th>Nome da Empresa</th>
//     <th>CNPJ da Empresa</th>
//     <th>Cidade</th>
//     <th>Informações gerais</th>
//     <th>Coordenadas</th>
//     </tr></thead>`;
//   let cidadeEmpresa = empresas.filter((empresa) => {
//     return empresa.cidade === cidadeInput.value;
//   })

//

//   cidadeInput.value = '';
// }
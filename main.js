//Simulação de DB

const empresas = [
  {
    nome: 'Empresa X',
    cnpj: 123,
    cidade: 'ecopos',
    coordenadaX: -18.37186473431609,
    coordenadaY: -40.82827825081433,
    informacoesGerais: 'Telefone: 226299561, encarregado Antonio'
  },
  {
    nome: 'Empresa A',
    cnpj: 1231,
    cidade: 'ecopos',
    coordenadaX: -18.635463248813668,
    coordenadaY: -40.691935068089265,
    informacoesGerais: 'Telefone: 226299561, encarregado Antonio'
  },
  {
    nome: 'Empresa D',
    cnpj: 12312,
    cidade: 'xico',
    coordenadaX: -20.769970807993545,
    coordenadaY: -43.021392711602246,
    informacoesGerais: 'Telefone: 226299561, encarregado Antonio'
  },
  {
    nome: 'Empresa T',
    cnpj: 123123,
    cidade: 'ecopos',
    coordenadaX: -20.813626699520764,
    coordenadaY: -41.185582082672546,
    informacoesGerais: 'Telefone: 226299561, encarregado Antonio'
  },
  {
    nome: 'Empresa O',
    cnpj: 1230,
    cidade: 'xico',
    coordenadaX: -19.823642344295667,
    coordenadaY: -40.27671547241462,
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
            <td>${cnpjEmpresa[0].coordenadaX}/${cnpjEmpresa[0].coordenadaY}</td>
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
        <td>${cidadeEmpresa[i].coordenadaX}/${cidadeEmpresa[i].coordenadaY}</td>
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
        <td>${nomeEmpresa[0].coordenadaX}/${nomeEmpresa[0].coordenadaY}</td>
      </tr></tbody>
    `
    inicializar(nomeEmpresa[0].coordenadaX, nomeEmpresa[0].coordenadaY);
    
  }

  nomeInput.value = '';
})


function inicializar(coordenadaX, coordenadaY) {
            var coordenadas = { lat: coordenadaX, lng: coordenadaY };

            var mapa = new google.maps.Map(document.getElementById('mapa'), {
                zoom: 15,
                center: coordenadas
            });

            var marker = new google.maps.Marker({
                position: coordenadas,
                map: mapa,
                title: 'Meu marcador'
            });
        }

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
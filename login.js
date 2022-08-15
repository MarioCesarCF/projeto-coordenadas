const users = [
  {
    email: 'mc.fialho@hotmail.com',
    senha: '177500'
  },
  {
    email: 'arturcf90@gmail.com',
    senha: '259600'
  },
  {
    email: 'teste@teste.com',
    senha: '123'
  }
];


const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnLogin = document.getElementById('btnLogin');
const linkInfos = document.getElementById('link-infos')

btnLogin.addEventListener( 'click', (e) => {
  e.preventDefault();
  let emailChecked = users.filter((user) => {
    return email.value === user.email && senha.value === user.senha;
  })

  if(emailChecked.length === 0) {
    email.value = '';
    senha.value = '';
    alert('E-mail ou senha incorretos.');    
    return;
  }

  location.href = 'http://127.0.0.1:5500/infos.html'; //essa url deverá ser alterada depois que o projeto for para produção.
})
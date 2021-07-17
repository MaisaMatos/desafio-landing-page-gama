const form = document.getElementById('form')//seleção do formulário

form.addEventListener('submit', (e) => {//"escutando" o evento (e) do botão "cadastrar"
  e.preventDefault();//como a pag sempre é recarregada, não quero isso, previno esse evento padrão
  let nome = document.getElementById('nome').value;//captando o valor dos inputs e armazenando em vars
  let email = document.getElementById('email').value;//captando o valor dos inputs e armazenando em vars
  let data = {//transformando das duas vars em objeto
    nome,
    email,
  }
  let convertData = JSON.stringify(data);//convertendo o objeto numa string

  localStorage.setItem('lead', convertData)//invoca localStorage, "lead" é a chave e "convertData" é o valor

  let content = document.getElementById('content')//captando a div "content", que é o formulário

  let carregando = `<img src="./assets/loader2.gif" >`

  let pronto = `<p>Pronto! Nossas ofertas já chegaram no seu email!</p>`

  content.innerHTML = carregando//nova atribuição de "content"


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})
function validarFormulario() {
   var nome = document.getElementById('nome').value;
   var email = document.getElementById('email').value;
   var senha = document.getElementById('senha').value;
   var confirmarSenha = document.getElementById('confirmarSenha').value;

   // Validar se a senha e a confirmação de senha são iguais
   if (nome == 0 && email == 0 && senha == 0 && confirmarSenha == 0) {
       alert('preencha todos os campos para realizar o cadastro')
       return
   }

   if (nome == 0) {
       alert('preencha o campo do nome para realizar o cadastro');
       return;
   }

   if (email == 0) {
       alert('preencha o campo de email para realizar o cadastro');
       return;
   }

   if (senha == 0) {
       alert('preencha o campo de senha para realizar o cadastro');
       return;
   }

   if (confirmarSenha == 0) {
       alert('preencha o campo de confirmação de senha para realizar o cadastro');
       return;
   }

   if (senha !== confirmarSenha) {
       alert('A senha e a confirmação de senha não coincidem.');
       return;
   }

   else if (senha == 0 && confirmarSenha == 0) {
       alert('digite a senha para realizar o cadastro');
       return;
   }

   // Se tudo estiver válido, o formulário será enviado
   alert('Cadastro realizado com sucesso!');
   // Aqui você pode adicionar lógica adicional, como enviar os dados para o servidor



   // Armazenar os dados localmente
   localStorage.setItem("nome", nome);
   localStorage.setItem("email", email);
   localStorage.setItem("senha", senha);

   // Redirecionar para a página de login
   window.location.href = "login.html";

//-------------------------------------------------------------------------------------------------------------
}

function autenticarUsuario() {
   // Obter os dados do formulário
   var emailDigitado = document.getElementById("username").value;
   var senhaDigitada = document.getElementById("pwd").value;

   // Obter os dados armazenados localmente
   var emailArmazenado = localStorage.getItem("email");
   var senhaArmazenada = localStorage.getItem("senha");

   // Validar os dados de login
   if (emailDigitado === emailArmazenado && senhaDigitada === senhaArmazenada) {
       //alert("Login bem-sucedido!");
       window.location.href = "compra.html";
       // Adicionar redirecionamento ou lógica adicional conforme necessário
   } else {
       alert("Email ou senha incorretos. Por favor, tente novamente.");
   }
}
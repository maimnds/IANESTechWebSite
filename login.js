const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const passwordValue = password.value;

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(username);
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
        setSuccessFor(password);
    }

    if (formIsValid) {
        console.log("O formulário está 100% válido!");
    }

        
   
}
    



    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

 


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Adiciona a mensagem de erro
    small.innerText = message;

    // Adiciona a classe de erro
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
}




 

function entrar(){

    var _login = {}

    document.querySelectorAll(`form[name='login'] input`).forEach((input) => {
        if (input.type != 'submit') {
            if (input.type == 'radio' && input.checked) {
                _login[input.name] = input.value;

            } else if (input.type != 'radio') {
                _login[input.name] = input.value;
            }
        }
    })


    for (let position = 0; position <  localStorage.length;position++) {

        
         var KEY = localStorage.key(position)
         var DATA = JSON.parse(localStorage.getItem(KEY));


         if (_login.user == DATA.usuario_ && _login.senha == DATA.senha_) {

          alert("logado");
          window.location.href = "cursos.html";

            return true;

         }
    }

    return false;
   
    /*emaillogin = document.getElementById("username").value;
    senhalogin = String(document.getElementById("password").value);

    if(localStorage.getItem(emaillogin)){
        var nome_ = String(localStorage.getItem(emaillogin).split('.')[0]);
        var senha_ = String(localStorage.getItem(emaillogin).split('.')[1]);
        var cpf_ = String(localStorage.getItem(emaillogin).split('.')[2]);
     
       
       
    }


    if (emaillogin == "" || senhalogin == ""){
        alert("Existem Campos Vazios ");
        return false;
    }


    if(localStorage.getItem(emaillogin)){
        if(senha_ == senhalogin){
            email = emaillogin_;
            nome = nome_;
            senha = senha_;
            localStorage.setItem('logado', nome+","+email+","+senha);
            window.locale.href = "cursos.html"
            return true;
        }
    }

    alert("Usuário ou Senha Incorretos!");
    return false;
    */

    
}

function deslogar(){
    localStorage.removeItem('logado');
    window.location.href = "index.html"
}



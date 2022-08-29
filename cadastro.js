const form = document.getElementById("form");
const name = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("mail");
const cpf = document.getElementById("cpf");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});



function checkInputs() {
    const nameValue = name.value
    const usernameValue = username.value;
    const emailValue = email.value;
    const cpfValue = cpf.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;


    if (nameValue === "") {
        setErrorFor(name, "O Nome é obrigatório.");
    } else {
        setSuccessFor(name);
    }

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    } else {
        setSuccessFor(email);
    }

    if (cpfValue === "") {
        setErrorFor(cpf, "O CPF é obrigatório.");
    } else if (!checkCpf(cpfValue)) {
        setErrorFor(cpf, "Por favor, insira um CPF válido.");
    } else {
        setSuccessFor(cpf);
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas não conferem.");
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });



}
var key =1;
function cadastrar() {
    key = (localStorage.length + 1);
    var name = document.getElementById("name").value;
    var user = document.getElementById("username").value;
    var mail = document.getElementById("mail").value;
    var cpf =  document.getElementById("cpf").value;
    var password = document.getElementById("password").value;
     var passwordC = document.getElementById("password-confirmation").value;
    
            var usuario = {nome_:name, usuario_:user, email_:mail, cpf_:cpf, senha_:password, ConfSenha_:passwordC};

           
            localStorage.setItem(key, JSON.stringify(usuario));
    }



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

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}


function checkCpf(cpf){

    return /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/.test(
        cpf
    );
}

const input = document.getElementById('cpf')

input.addEventListener('keypress', () =>{
    let inputlenght = input.value.length
    if (inputlenght === 3 || inputlenght===7){
        input.value += '.'
    }else if (inputlenght === 11) {
        input.value += '-'

    }
})
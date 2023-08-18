/**
 * Função de efetuar login
 */
function Login(){

    var user = document.getElementById("usuario").value;
    var password = document.getElementById("senha").value;

    if (user == "" || password == "") {
        alert('Preencha todos os campos!');
    }else{
        alert('Seja bem-vindo(a) a GreenConnect!');
    }
}
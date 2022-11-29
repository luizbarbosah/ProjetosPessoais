/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

/*
function validarFormulario(formulario){
    if(formulario.nome_cliente.value === "" || formulario.nome_cliente.value === null) {
    alert("O campo Nome não pode ficar vazio.");
    formulario.nome_cliente.focus();
    return false;
    }
    //o campo e-mail precisa ser válido, ou seja, deve : "@" e "."
    if(formulario.email_cliente.value.indexOf("@") == -1 || formulario.email_cliente.value.indexOf(".") == -1) {
    alert("O campo E-mail não é válido.");
    formulario.email_cliente.focus();
    return false;
    }
    if(formulario.cpf_cliente.value.length != 11) {
    alert("O campo CPF precisa ter 11 caracteres.");
    formulario.cpf_cliente.focus();
    return false;
    }
    if(formulario.data_nascimento_cliente.value === "" || formulario.data_nascimento_cliente.value === null) {
    alert("O campo Data de Nascimento não pode ficar vazio.");
    formulario.data_nascimento_cliente.focus();
    return false;
}*/

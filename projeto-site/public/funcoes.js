let login_usuario;
let nome_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}
function redirecionar_index() {
    window.location.href = 'index.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    
    if (login_usuario == undefined)  {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = nome_usuario;
        validar_sessao();
    }
    
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_index();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {cache:'no-store'}); 
}

let autores = ['Rick Riordan', 'Raymond E. Feist', 'Janny Wurts']
let sagas = ['Percy Jackson', 'Mago', 'Império']
let assuntos = [
                    ['Bullying', 'Mudancas', 'Vida Adolescente', 'Racismo'],
                    ['Luto','Mudancas','Vida Adolescente','Racismo'],
                    ['Machismo', 'Política', 'Luto', 'Mudancas', 'Racismo']
                ]



function limpar() {
    document.getElementById("saga_sel_id").selectedIndex = "0";
    document.getElementById("autor_sel_id").selectedIndex = "0";
    document.getElementById("tema_sel_id").selectedIndex = "0";
    div_autor_percy.innerHTML = ` <b>Autor:</b>`;
    div_temas_percy.innerHTML = ` <b>Temas Abordados:</b>`;
    div_autor_mago.innerHTML = ` <b>Autor:</b>`;
    div_temas_mago.innerHTML = ` <b>Temas Abordados:</b>`;
    div_autor_imperio.innerHTML = ` <b>Autor:</b>`;
    div_temas_imperio.innerHTML = ` <b>Temas Abordados:</b>`;
    imperio_id.style.display="none"
    percy_id.style.display="none"
    mago_id.style.display="none"
}

function selecionar_autor() {
    if(autor_sel_id.value == "-"){
        limpar();
        imperio_id.style.display="none"
        percy_id.style.display="none"
        mago_id.style.display="none"
    }
    if (autor_sel_id.value == 0){
        limpar();
        div_autor_percy.innerHTML += ` ${autores[0]}`;
        div_temas_percy.innerHTML += ` ${assuntos[0]}`;
        percy_id.style.display="block"
        mago_id.style.display="none"
        imperio_id.style.display="none"
    }
    if (autor_sel_id.value == 1){
        limpar();
        div_autor_mago.innerHTML += ` ${autores[1]}`;
        div_temas_mago.innerHTML += ` ${assuntos[1]}`;
        percy_id.style.display="none"
        mago_id.style.display="block"
        imperio_id.style.display="block"
    }
    if (autor_sel_id.value == 2){
        limpar();
        div_autor_imperio.innerHTML += ` ${autores[1]}, ${autores[2]}`;
        div_temas_imperio.innerHTML += ` ${assuntos[2]}`;
        percy_id.style.display="none"
        mago_id.style.display="none"
        imperio_id.style.display="block"
    }
}
function selecionar_saga() {
    
    
    if(saga_sel_id.value == "default"){
        limpar();
        imperio_id.style.display="none"
        percy_id.style.display="none"
        mago_id.style.display="none"
    }
    if(saga_sel_id.value == 0){
        limpar();
        div_autor_percy.innerHTML += ` ${autores[0]}`;
        div_temas_percy.innerHTML += ` ${assuntos[0]}`;
        percy_id.style.display="block"
        mago_id.style.display="none"
        imperio_id.style.display="none"
    }
    if (saga_sel_id.value == 1){
        limpar();
        div_autor_mago.innerHTML += ` ${autores[1]}`;
        div_temas_mago.innerHTML += ` ${assuntos[1]}`;
        mago_id.style.display="block"
        percy_id.style.display="none"
        imperio_id.style.display="none"
    }
    if (saga_sel_id.value == 2) {
        limpar();
        div_autor_imperio.innerHTML += ` ${autores[2]}`;
        div_temas_imperio.innerHTML += ` ${assuntos[2]}`;
        imperio_id.style.display="block"
        percy_id.style.display="none"
        mago_id.style.display="none"
    }
}

function selecionar_tema() {
    // limpar();
    if(tema_sel_id.value == "default"){
        limpar();
    } else {
        for (i=0; i < assuntos.length ; i++){
        let mat_data = assuntos[i];
        for (j=0 ; j < mat_data.length ; j++){
            if(tema_sel_id.value == mat_data[j]){
                if (i == 0) {
                    div_autor_percy.innerHTML += ` ${autores[0]}`;
                    div_temas_percy.innerHTML += ` ${assuntos[0]}`;
                    percy_id.style.display="block";
                }
                if (i == 1){
                    div_autor_mago.innerHTML += ` ${autores[1]}`;
                    div_temas_mago.innerHTML += ` ${assuntos[1]}`;
                    mago_id.style.display="block";
                }
                if (i == 2){
                    div_autor_imperio.innerHTML += ` ${autores[2]}`;
                    div_temas_imperio.innerHTML += ` ${assuntos[2]}`;
                    imperio_id.style.display="block";                
                }
            }
            }
        }
    }
    }

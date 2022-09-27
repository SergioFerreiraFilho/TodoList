let lista_Tarefas = [];

function salvar(titulo, prioridade) {
    let dados = buscar();

    dados.push({
        titulo: titulo,
        prioridade: prioridade,
    })
    localStorage.setItem('tarefas', JSON.stringify(dados))
}

function buscar () {
    listar_tarefas = JSON.parse(
        localStorage.getItem('tarefas') || '[]'
    return listar_tarefas
)};

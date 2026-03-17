var tarefas = [];
function criarTarefa(titulo) {
    var nova = {
        id: Date.now(),
        titulo: titulo,
        concluida: false
    };
    tarefas.push(nova);
    return nova;
}
function listarTarefas() {
    tarefas.forEach(function (t) {
        console.log("".concat(t.id, " - ").concat(t.titulo, " [").concat(t.concluida ? "✔" : "❌", "]"));
    });
}
function concluirTarefa(id) {
    var tarefa = tarefas.find(function (t) { return t.id === id; });
    if (tarefa) {
        tarefa.concluida = true;
    }
    else {
        console.log("Tarefa não encontrada");
    }
}
var tarefa1 = criarTarefa("Estudar TypeScript");
var tarefa2 = criarTarefa("Fazer exercícios de programação");
concluirTarefa(tarefa1.id);
listarTarefas();

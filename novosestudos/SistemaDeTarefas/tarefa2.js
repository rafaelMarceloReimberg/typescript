var TarefaService = /** @class */ (function () {
    function TarefaService() {
        this.tarefas = [];
    }
    TarefaService.prototype.criar = function (titulo) {
        var nova = {
            id: Date.now(),
            titulo: titulo,
            concluida: false,
        };
        this.tarefas.push(nova);
        return nova;
    };
    TarefaService.prototype.listar = function () {
        this.tarefas.forEach(function (t) {
            console.log("".concat(t.id, " - ").concat(t.titulo, " [").concat(t.concluida ? "✔" : "❌", "]"));
        });
    };
    TarefaService.prototype.concluir = function (id) {
        var tarefa = this.tarefas.find(function (t) { return t.id === id; });
        if (tarefa) {
            tarefa.concluida = true;
        }
        else {
            console.log("Tarefa não encontrada");
        }
    };
    TarefaService.prototype.remover = function (id) {
        this.tarefas = this.tarefas.filter(function (t) { return t.id !== id; });
    };
    TarefaService.prototype.editar = function (id, novoTitulo) {
        var tarefa = this.tarefas.find(function (t) { return t.id === id; });
        if (tarefa) {
            tarefa.titulo = novoTitulo;
        }
        else {
            console.log("Tarefa não encontrada");
        }
    };
    TarefaService.prototype.listarConcluidas = function () {
        return this.tarefas.filter(function (t) { return t.concluida; });
    };
    TarefaService.prototype.listarPendentes = function () {
        return this.tarefas.filter(function (t) { return !t.concluida; });
    };
    return TarefaService;
}());
var service = new TarefaService();
var t1 = service.criar("Estudar TypeScript");
var t2 = service.criar("Fazer exercícios");
service.concluir(t1.id);
service.listar();
service.editar(t2.id, "Fazer exercícios de programação");
service.listar();
service.remover(t2.id);
service.listar();
service.listarConcluidas();
service.listarPendentes().forEach(function (t) {
    console.log("".concat(t.id, " - ").concat(t.titulo));
});
console.log(service.listarPendentes());

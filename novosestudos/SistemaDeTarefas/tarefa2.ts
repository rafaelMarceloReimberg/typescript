class TarefaService {
  private tarefas: Tarefa[] = [];

  criar(titulo: string): Tarefa {
    const nova: Tarefa = {
      id: Date.now(),
      titulo,
      concluida: false,
    };

    this.tarefas.push(nova);
    return nova;
  }

  listar(): void {
    this.tarefas.forEach((t) => {
      console.log(`${t.id} - ${t.titulo} [${t.concluida ? "✔" : "❌"}]`);
    });
  }

  concluir(id: number): void {
    const tarefa = this.tarefas.find((t) => t.id === id);

    if (tarefa) {
      tarefa.concluida = true;
    } else {
      console.log("Tarefa não encontrada");
    }
  }

  remover(id: number): void {
    this.tarefas = this.tarefas.filter((t) => t.id !== id);
  }

  editar(id: number, novoTitulo: string): void {
    const tarefa = this.tarefas.find((t) => t.id === id);

    if (tarefa) {
      tarefa.titulo = novoTitulo;
    } else {
      console.log("Tarefa não encontrada");
    }
  }

  listarConcluidas(): Tarefa[] {
    return this.tarefas.filter((t) => t.concluida);
  }

  listarPendentes(): Tarefa[] {
    return this.tarefas.filter((t) => !t.concluida);
  }
}

const service = new TarefaService();

const t1 = service.criar("Estudar TypeScript");
const t2 = service.criar("Fazer exercícios");

service.concluir(t1.id);

service.listar();

service.editar(t2.id, "Fazer exercícios de programação");

service.listar();

service.remover(t2.id);

service.listar();

service.listarConcluidas();

service.listarPendentes().forEach((t) => {
  console.log(`${t.id} - ${t.titulo}`);
});

console.log(service.listarPendentes());

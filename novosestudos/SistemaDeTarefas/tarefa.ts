interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

let tarefas: Tarefa[] = [];

function criarTarefa(titulo: string): Tarefa {
  const nova: Tarefa = {
    id: Date.now(),
    titulo,
    concluida: false,
  };

  tarefas.push(nova);
  return nova;
}

function listarTarefas(): void {
  tarefas.forEach((t) => {
    console.log(`${t.id} - ${t.titulo} [${t.concluida ? "✔" : "❌"}]`);
  });
}

function concluirTarefa(id: number): void {
  const tarefa = tarefas.find((t) => t.id === id);

  if (tarefa) {
    tarefa.concluida = true;
  } else {
    console.log("Tarefa não encontrada");
  }
}

const tarefa1 = criarTarefa("Estudar TypeScript");
const tarefa2 = criarTarefa("Fazer exercícios de programação");

concluirTarefa(tarefa1.id);

listarTarefas();

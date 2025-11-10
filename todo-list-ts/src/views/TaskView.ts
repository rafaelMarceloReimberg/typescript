import { Task } from "../models/Task";

export class TaskView {
  private listElement: HTMLUListElement;

  constructor(listId: string) {
    this.listElement = document.getElementById(listId) as HTMLUListElement;
  }

  render(tasks: Task[], handlers: { onToggle: (id: string) => void; onDelete: (id: string) => void; }) {
    this.listElement.innerHTML = "";

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="${task.done ? "done" : ""}">${task.description}</span>
        <div>
          <button data-id="${task.id}" class="toggle">${task.done ? "Desfazer" : "Concluir"}</button>
          <button data-id="${task.id}" class="delete">Excluir</button>
        </div>
      `;

      li.querySelector(".toggle")?.addEventListener("click", () => handlers.onToggle(task.id));
      li.querySelector(".delete")?.addEventListener("click", () => handlers.onDelete(task.id));

      this.listElement.appendChild(li);
    });
  }
}

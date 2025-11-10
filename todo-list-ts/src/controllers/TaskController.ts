import { Task } from "../models/Task";
import { TaskView } from "../views/TaskView";
import { StorageService } from "../services/StorageService";

export class TaskController {
  private tasks: Task[] = [];
  private view: TaskView;

  constructor(view: TaskView) {
    this.view = view;
    this.tasks = StorageService.load();
    this.render();
  }

  addTask(description: string) {
    const task = new Task(description);
    this.tasks.push(task);
    this.saveAndRender();
  }

  toggleTask(id: string) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) task.toggleDone();
    this.saveAndRender();
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.saveAndRender();
  }

  private saveAndRender() {
    StorageService.save(this.tasks);
    this.render();
  }

  private render() {
    this.view.render(this.tasks, {
      onToggle: (id) => this.toggleTask(id),
      onDelete: (id) => this.deleteTask(id),
    });
  }
}

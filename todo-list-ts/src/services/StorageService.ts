import { Task } from "../models/Task";

export class StorageService {
  private static key = "tasks";

  static save(tasks: Task[]) {
    localStorage.setItem(this.key, JSON.stringify(tasks));
  }

  static load(): Task[] {
    const data = localStorage.getItem(this.key);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return parsed.map((t: any) => {
      const task = new Task(t.description);
      task.id = t.id;
      task.done = t.done;
      task.createdAt = new Date(t.createdAt);
      return task;
    });
  }
}

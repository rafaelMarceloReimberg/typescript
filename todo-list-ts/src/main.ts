import { TaskController } from "./controllers/TaskController";
import { TaskView } from "./views/TaskView";

const view = new TaskView("taskList");
const controller = new TaskController(view);

document.getElementById("taskForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("taskInput") as HTMLInputElement;
  const description = input.value.trim();
  if (!description) return;
  controller.addTask(description);
  input.value = "";
});

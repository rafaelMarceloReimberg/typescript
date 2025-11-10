export class Task {
  public id: string;
  public description: string;
  public done: boolean;
  public createdAt: Date;

  constructor(description: string) {
    this.id = crypto.randomUUID();
    this.description = description;
    this.done = false;
    this.createdAt = new Date();
  }

  toggleDone() {
    this.done = !this.done;
  }
}

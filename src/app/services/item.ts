
export class TodoItem{
  private readonly id: number;
  public title: string;
  public completed: boolean;

  constructor(title: string) {
    this.title = title;
    this.id = Date.now();
    this.completed = false;
  }

  toggleCompleted(): void{
    this.completed = !this.completed;
  }
}

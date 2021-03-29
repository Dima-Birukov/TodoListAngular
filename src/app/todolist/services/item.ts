export interface Completable{
  isCompleted(): boolean;
}
export class TodoItem implements Completable{
  public readonly id: number;
  public title: string;
  public completed: boolean;


  constructor(title: string, id: number = Date.now(), completed: boolean = false) {
    this.title = title;
    this.id = id;
    this.completed = completed;
  }
  setCompleted(status: boolean): void{
    this.completed = status;
  }
  isCompleted(): boolean {
    return this.completed;
  }

  toggleCompleted(): void{
    this.completed = !this.completed;
  }
}

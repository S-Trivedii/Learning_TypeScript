export class Todo {
  public id: string;
  public text: string;

  // this will get called automatically when an instance is created
  constructor(id: string, text: string) {
    this.id = id;
    this.text = text;
  }
}

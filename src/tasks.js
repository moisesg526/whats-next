export class Tasks {
  constructor(formData) {
    this.title = formData.get("title");
    this.details = formData.get("details");
    this.priority = formData.get("priority");
    this.dueDate = formData.get("dueDate");
  }
}

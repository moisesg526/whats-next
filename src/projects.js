export class ProjectCard {
  constructor(formData) {
    this.title = formData.get("title");
    this.details = formData.get("details");
  }
}

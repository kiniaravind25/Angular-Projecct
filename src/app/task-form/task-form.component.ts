import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-task-form',
  imports : [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  task: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.task.trim()) {
      this.taskService.addTask(this.task);
      this.task = '';
    }
  }
}

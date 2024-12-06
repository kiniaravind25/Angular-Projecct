
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: string[] = [];

  getTasks(): string[] {
    return this.tasks;
  }

  addTask(task: string): void {
    this.tasks.push(task);
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  editTask(index: number, updatedTask: string): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index] = updatedTask;
    }
  }
}

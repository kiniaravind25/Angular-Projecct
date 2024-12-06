import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import {NgIf,NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  imports:[NgFor,NgIf,FormsModule],
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: string[] = [];
  isEditing: boolean = false; // To check if we are editing
  editingIndex: number | null = null; // The index of the task being edited
  editedTask: string = ''; // The new task name entered by the user

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
  }

  startEditing(index: number): void {
    this.isEditing = true;
    this.editingIndex = index;
    this.editedTask = this.tasks[index]; // Pre-fill the input with the current task name
  }

  saveEdit(): void {
    if (this.editingIndex !== null && this.editedTask.trim() !== '') {
      this.taskService.editTask(this.editingIndex, this.editedTask);
      this.isEditing = false; 
      this.editingIndex = null;
    }
  }

  cancelEdit(): void {
    this.isEditing = false; // Hide the edit form without saving
    this.editingIndex = null;
  }
}

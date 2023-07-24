// src/app/todo.service.ts

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private tasksRef: AngularFireList<string>;
  private tasks$: Observable<string[]>;

  constructor(private db: AngularFireDatabase) {
    this.tasksRef = this.db.list('/tasks');
    this.tasks$ = this.tasksRef.valueChanges();
  }

  addTask(task: string): void {
    this.tasksRef.push(task);
  }

  getTasks(): Observable<string[]> {
    return this.tasks$;
  }

  deleteTask(key: string): void {
    this.tasksRef.remove(key);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  APIService,
  CreateTodoInput,
  DeleteTodoInput,
} from 'src/app/API.service';
import { TodoDialogComponent } from '../shared/todo-dialog/todo-dialog.component';

export interface TodoModel {
  index: number;
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.scss'],
})
export class GraphqlComponent implements OnInit {
  todoList: TodoModel[] = [];
  displayedTodoColumns: string[] = [
    'index',
    'name',
    'description',
    'deleteAction',
  ];

  todoName = '';
  todoDescription = '';

  constructor(private apiService: APIService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchTodoList();
  }

  async onClickCreateTodo() {
    await this.openCreateTodoDialog();
  }

  private async openCreateTodoDialog() {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      data: {
        todo: { name: '', description: '' },
        title: 'Create Todo',
      },
    });
    const result = await dialogRef.afterClosed().toPromise();
    if (result != null) {
      console.log(result);
      await this.addTodo(result);
    }
  }

  private async addTodo(todo: TodoModel) {
    const input: CreateTodoInput = {
      name: todo.name,
      description: todo.description,
    };
    const result = await this.apiService.CreateTodo(input);
    console.log(result);
    this.fetchTodoList();
  }

  async fetchTodoList() {
    const result = await this.apiService.ListTodos();
    console.log(JSON.stringify(result));
    this.todoList =
      result.items?.map((item, index) => {
        const todo: TodoModel = {
          index: index + 1,
          id: item?.id ?? '',
          name: item?.name ?? 'no name',
          description: item?.description ?? '',
        };
        return todo;
      }) ?? [];
  }

  async onClickDelete(todo: TodoModel) {
    const input: DeleteTodoInput = {
      id: todo.id,
    };
    const result = await this.apiService.DeleteTodo(input);
    console.log(result);
    this.fetchTodoList();
  }
}

import { Component, OnInit } from '@angular/core';
import {
  APIService,
  CreateTodoInput,
  DeleteTodoInput,
} from 'src/app/API.service';

interface TodoModel {
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

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.fetchTodoList();
  }

  async onClickCreateTodo() {
    const input: CreateTodoInput = {
      name: this.todoName,
      description: this.todoDescription,
    };
    const result = await this.apiService.CreateTodo(input);
    console.log(JSON.stringify(result));
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

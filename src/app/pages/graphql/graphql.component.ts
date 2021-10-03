import { Component, OnInit } from '@angular/core';
import { APIService, CreateTodoInput } from 'src/app/API.service';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.scss'],
})
export class GraphqlComponent implements OnInit {
  todoList: { index: number; name: string; description: string }[] = [];
  displayedTodoColumns: string[] = ['index', 'name', 'description'];

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
        const todo = {
          index,
          name: item?.name ?? 'no name',
          description: item?.description ?? '',
        };
        return todo;
      }) ?? [];
  }
}

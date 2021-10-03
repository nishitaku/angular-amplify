import { Component, OnInit } from '@angular/core';
import { APIService, CreateTodoInput } from 'src/app/API.service';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.scss'],
})
export class GraphqlComponent implements OnInit {
  todoName = '';
  todoDescription = '';

  constructor(private apiService: APIService) {}

  ngOnInit(): void {}

  async onClickCreateTodo() {
    const input: CreateTodoInput = {
      name: this.todoName,
      description: this.todoDescription,
    };
    const result = await this.apiService.CreateTodo(input);
    console.log(JSON.stringify(result));
  }
}

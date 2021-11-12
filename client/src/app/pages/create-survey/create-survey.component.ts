import { Component, OnInit } from '@angular/core';
import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})

//export class CreateSurveyComponent  {
export class CreateSurveyComponent implements OnInit {

  private list = new TodoList("Bob", [
    new TodoItem("Mothly Incomes"," ", "4", true),
    new TodoItem("Mothly Expenditures"," ","5"),
    new TodoItem("Collect tickets", "","6"),
  ]);

  IsForUpdate: boolean = false;  
  IsForAdd: boolean = true;  
  model:any={};
  msg:any="";

  get username(): string {
    return this.list.user;
  }  

  get getItems(): TodoItem[] {    
    return this.list.items.filter( item =>  this.showComplete || !item.complete);
  }

  get itemCount(): number {
    return this.getItems.length;
  }

  addNewItem(newItem: string, newDes: string, questions: string){
    if(newItem != ""){
      this.list.addItem(newItem, newDes, questions);
    }
  }

  myValue: any;
  editItem(i: number, newItem: string, newDes: string, questions: string){
    this.IsForUpdate = true;
    this.IsForAdd = false;
    this.model.name = newItem;
    this.model.description =newDes;
    this.model.questions = questions;
    this.myValue = i

  }
  updateItem(newItem: string, newDes: string, questions: string){
    this.list.update(this.myValue, newItem, newDes, questions)
    this.IsForUpdate = false;

  }

  deleteItem(i: number){
    this.list.delete(i)
  }

  showComplete: boolean = false;
  ngOnInit() { }
    
}



import { TodoItem } from "./todoItem";


export class TodoList {

    constructor(public user: string, private todoItems: TodoItem[] = []) {
        // no statements required
    }

    get items(): TodoItem[] {
        return this.todoItems;
        
    }

    addItem(task: string, description: string, questions: string) {
        this.todoItems.push(new TodoItem(task,description,questions));
    }

    delete(i: number){
        this.todoItems.splice(i, 1)
    }

    
}

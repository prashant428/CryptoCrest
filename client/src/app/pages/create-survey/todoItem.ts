export class TodoItem{

    constructor(taskVal: string, descriptionVal: string, quesVal: string, completeVal: boolean = false){
        this.task = taskVal;
        this.complete = completeVal;
        this.description = descriptionVal
        this.questions=quesVal
    }
    
    task: string;
    description: string;
    complete: boolean;
    questions: string

}
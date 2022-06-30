import { Component, OnInit } from '@angular/core'
import { empty } from 'rxjs';
import { todo } from '../../Model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: todo[] = [];

  inputtodo:string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.todos = []
    if(localStorage.getItem('record')!=null){
      this.todos=JSON.parse(localStorage.getItem('record')!)
    }
  }
  toggleDone(id: number){
    this.todos.map((v,i)=>{
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }
  deletetodo(id: number){
    this.todos= this.todos.filter((v,i)=> i !== id);
  
  localStorage.setItem('record',JSON.stringify(this.todos))
}

  addtodo(){
    if(this.inputtodo!='' && this.inputtodo!=null && this.inputtodo!=undefined ){
     
    this.todos.push({
      content:this.inputtodo,
      completed:false
    })

    localStorage.setItem('record',JSON.stringify(this.todos))
    }
    else{
      alert('Cannot add empty field')
    }
  }

}

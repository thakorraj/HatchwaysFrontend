import { Component, OnInit } from '@angular/core';
import { RestService,Student } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  panelOpenState = false;
  students:Student[] = [];
   stugrades:[]=[];
   term:string;
   tag:String="";

  constructor(public rest: RestService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    
    this.rest.getStudents().subscribe((resp: any) => {
      this.students = resp.students;
      for (var i = 0; i < this.students.length; i++) {
        Object.defineProperty(this.students[i], 'tag', {
          value: [],
          writable: true
        });
    }
    });
  }
  
  
  getSum(stugrades){
    let sum=0;
    let avg=0;
    var arrayOfNumbers = stugrades.map(Number);
    
    for(let i=0;i<arrayOfNumbers.length;i++){
      sum+=arrayOfNumbers[i];
    }
    avg=sum/arrayOfNumbers.length;
    return avg/100;
    }


    
  myFunc(student:any[]){
    student.push(this.tag);
    this.tag="";
  }

}

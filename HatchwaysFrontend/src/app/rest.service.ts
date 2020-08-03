import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
const endpoint = 'https://hatchways.io/api/assessment/students';
export interface Student {
  city:string,
  company:string,
  email:string,
  firstName:string,
  grades:number[],
  id:string,
  lastName:string,
  pic:string,
  skill:string,
  total:string
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  
  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }
  
  getStudents(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData)
    );
  }
}

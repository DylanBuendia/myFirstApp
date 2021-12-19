import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@app/models/Project';
import { LogService } from '@app/services/log.service';

import { BehaviorSubject, Observable, throwError} from 'rxjs';
import { tap, find, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects : Project[] = [
    {
      id: 1,
      code: 'afis1m4mmt',
      name: 'cazz n sacc',
      description: 'k ruttur i pall',
      start: new Date(2019,1,30),
      end:new Date(2021,5,30),
      done: true,
      priority: 'medium',
      task:[],
    },
    {
      id: 2,
      code: '4fis1ktmurt',
      name: 'cazz n vo fò',
      description: 'k ruttur i chigghiun',
      start: new Date(2020,1,15),
      end:new Date(2021,6,30),
      done: true,
      priority: 'high',
      task:[],
    },
    {
      id: 3,
      code: '4fis1k1t4stramurt',
      name: 'u cazz k ti frica',
      start: new Date(2020,6,30),
      done: false,
      priority: 'medium',
      task:[],
    }
  ]

  constructor(private httpClient : HttpClient, private logservice : LogService) { }

  private projectSubject = new BehaviorSubject<Project[]>(this.projects);
  public project$ = this.projectSubject.asObservable();

  getAll() : Observable<Project[]> {
    return this.httpClient.get<Project[]>('http://localhost:3000/projects')
    .pipe(
      tap(data => this.logservice.log(`GetAll eseguito ${data}`)),
      retry(3),
      catchError(this.handleError)
    );

    // return this.project$.pipe(
    //   tap(() => this.logservice.log('getAll Eseguito'))
    // );
  }

  add(project : Project) : Observable<Project> {

    const projectToAdd = {
      ...project,
      code : Math.random().toString(36).replace('0.','').substring(2,9),
      done : false,
      task : [],
    }
    return this.httpClient.post<Project>('http://localhost:3000/projects', projectToAdd)
    .pipe(
      tap(data => this.logservice.log(`Add eseguito ${data}`)),
      retry(3),
      catchError(this.handleError)
    );

    // this.logservice.log('add Eseguito');
    // this.projects.push({
    //   ...project,
    //   id : this.projects.length,
    //   code : Math.random().toString(36).replace('0.','').substring(2,9),
    //   done : false,
    //   task : [],
    // });

    // this.projectSubject.next(this.projects.slice())

  }

  get(id : number) : Observable<Project> {

    return this.httpClient.get<Project>( `http://localhost:3000/projects/${id}` )
    .pipe(
      tap(data => this.logservice.log(`Get eseguito ${data}`)),
      retry(3),
      catchError(this.handleError)
    )
    // this.logservice.log('get Eseguito');
    // return this.projects.find(project => project.id === id) as Project;
  }

  // get(id : number) : Observable<Project> {
  //   this.logservice.log('get Eseguito');
  //   return this.project$.pipe(
  //     find(project => project.id === id) as Project
  //   )
  // }

private handleError(error: HttpErrorResponse){
  if(error.error instanceof ErrorEvent){
    console.error('An error occurred:', error.error.message)
  }else{
    console.error(
      `Backend returned code: ${error.status}` +
      `Body was: ${error.error}`
    )
  }
  return throwError(
    'Something bad happened. Please try again later.'
  )
}

}

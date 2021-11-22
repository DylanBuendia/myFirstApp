import { Injectable } from '@angular/core';
import { Project } from '@app/models/Project';

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

  constructor() { }

  getAll() : Project[] {
    return this.projects;
  }

  add(project : Project) : void {
    this.projects.push({
      ...project,
      id : this.projects.length,
      code : Math.random().toString(36).replace('0.','').substring(2,9),
      done : false,
      task : [],
    });
  }

  get(id : number) : Project {
    return this.projects.find(project => project.id === id) as Project;
  }
}

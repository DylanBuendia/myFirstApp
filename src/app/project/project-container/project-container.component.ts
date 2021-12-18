import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@app/models/Project';
import { Observable } from 'rxjs';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit {

  projects$! : Observable<Project[]>;

  constructor(private projectService : ProjectService, private router : Router) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();
    // this.subscription = this.projectService.getAll().subscribe(data => this.projects = data) ;
  }

  selectProject(project:Project){
    this.router.navigate(['projects', 'detail', project.id])
  }

  submitProjectForm(project : Project){
    this.projectService.add(project).subscribe(data=>this.projects$ = this.projectService.getAll());
  }
}

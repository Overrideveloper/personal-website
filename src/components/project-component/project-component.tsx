import { Component } from '@stencil/core';
import database from '../../firebase/index.js';

interface Project {
  name: string;
  link: string;
  desc1: string;
  desc2: string;
  desc3: string;
  tech: string;
  color: string;
}

@Component({
  tag: 'project-component',
  styleUrl: 'project-component.css'
})

export class ProjectComponent {
  private projects: Array<any>;

  componentWillLoad() {
    return this.fetchProjects().then((projects: Array<any>) => {
      this.projects = projects;
    }).catch((error: any) => {
      console.log(error);
    });
  }

  fetchProjects() {
    return new Promise((resolve, reject) => {
      database.collection('projects').get().then((projects: any) => {
        //console.log(projects)
        const temp = [];
        let count = projects.size;
        projects.forEach((project) => {
          temp.push(project.data());
          count -= 1;
          if (count === 0) {
            resolve(temp)
          }
        })
      }).catch((error: any) => {
        reject(error);
      });
    })
  }

  render() {
    return (
      <div>
        <nav-bar></nav-bar>
        <main>
          <p class="container py-5">
            <h3 id="intro">Projects</h3>
            <p class="mt-5">
            <p>Here are some of my [mostly finished 😅] projects</p>
            <div class="row">
              {
                this.projects.map((project: Project) => {
                  return (
                    <div class="col-md-6 mb-3">
                      <div class="card h-100">
                        <div class="card-body">
                          <h5 style={{color: project.color}} class="card-title bold">
                            {project.name}
                            <span class="pull-right">
                              {project.tech === 'ionic' ? (<img src="../../assets/icon/ionic.svg" class="icon" id="ionic" />) : ''}
                              {project.tech === 'dotnet' ? (<img src="../../assets/icon/dot-net.svg" class="icon" id="ionic" />) : ''}
                              {project.tech === 'js' ? (<i class="fab fa-js-square"></i>) : ''}
                            </span>
                          </h5>
                          <p class="card-text">{project.desc1}</p>
                          <p class="card-text">{project.desc2}</p>
                          <p class="card-text">{project.desc3}</p>
                          <a href={project.link} class="pull-right card-link ul">View</a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </p>
          </p>
        </main>
        <footer-component></footer-component>
      </div>
    )
  }
}
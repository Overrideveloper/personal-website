declare var NProgress: any;
import { Component, State } from '@stencil/core';
import fbase from '../../firebase/index.js';

const database = fbase.database;

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
  @State() projects: Array<any> = [];

  componentDidLoad() {
    NProgress.start();
    return this.fetchProjects().then((projects: Array<any>) => {
      NProgress.done();
      this.projects = projects;
    }).catch((error: any) => {
      console.log(error);
    });
  }

  fetchProjects() {
    return new Promise((resolve, reject) => {
      database.collection('projects').orderBy('name', 'asc').get().then((projects: any) => {
        if (projects.size !== 0) {
          const temp = [];
          let count = projects.size;
          projects.forEach((project) => {
            temp.push(project.data());
            count -= 1;
            if (count === 0) {
              resolve(temp)
            }
          })
        } else {
          resolve([]);
      }
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
                            <span style={{float: 'right'}}>
                              {project.tech === 'ionic' ? (<img alt="ionic" src="../../assets/icon/ionic.svg" class="icon" />) : ''}
                              {project.tech === 'dotnet' ? (<img alt="dotnet" src="../../assets/icon/dot-net.svg" class="icon" />) : ''}
                              {project.tech === 'js' ? (<img alt="javascript" src="../../assets/icon/javascript.svg" class="icon" />) : ''}
                            </span>
                          </h5>
                          <p class="card-text">{project.desc1}</p>
                          <p class="card-text">{project.desc2}</p>
                          <p class="card-text">{project.desc3}</p>
                          <a style={{float: 'right'}} href={project.link} class="card-link ul">View</a>
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

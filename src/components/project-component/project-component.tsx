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
                              {project.tech === 'ionic' ? (
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M12 6.53A5.476 5.476 0 0 0 6.53 12c0 3.014 2.452 5.47 5.47 5.47s5.47-2.456 5.47-5.47S15.014 6.53 12 6.53zM22.345 4.523a2.494 2.494 0 1 1-4.988 0 2.494 2.494 0 0 1 4.988 0z"/><path d="M22.922 7.027l-.103-.23-.169.188c-.408.464-.928.82-1.505 1.036l-.159.061.066.155a9.745 9.745 0 0 1 .75 3.759c0 5.405-4.397 9.806-9.806 9.806S2.194 17.405 2.194 12 6.596 2.194 12 2.194c1.467 0 2.883.319 4.2.947l.155.075.066-.155a3.767 3.767 0 0 1 1.106-1.453l.197-.159-.225-.117A11.905 11.905 0 0 0 12.001.001c-6.619 0-12 5.381-12 12s5.381 12 12 12 12-5.381 12-12c0-1.73-.361-3.403-1.078-4.973z"/>
                                </svg>) : ''}
                              {project.tech === 'dotnet' ? (
                                <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3.1672 7.5655v8.749H4.19v-6.325a8.979 8.979 0 0 0-.0488-1.1998h.0384a2.9082 2.9082 0 0 0 .2784.5473l4.4973 6.9774h1.2569V7.5655H9.1904v6.1526a9.2574 9.2574 0 0 0 .0619 1.286h-.0234c-.0544-.1056-.173-.3002-.3553-.585L4.4964 7.5656zm9.315 0v8.749h4.65l.0048-.9599h-3.6087v-3.0331h3.1579V11.4h-3.1579V8.4916h3.3884v-.926zm5.4374 0v.926h2.5149v7.823h1.0216v-7.823H24v-.926zM.6534 15.067a.643.643 0 0 0-.4565.2062A.6719.6719 0 0 0 0 15.753a.6623.6623 0 0 0 .1968.4799.6479.6479 0 0 0 .4799.2015.6623.6623 0 0 0 .4799-.2015.6575.6575 0 0 0 .2015-.48.667.667 0 0 0-.2015-.4798.6575.6575 0 0 0-.4799-.2062.643.643 0 0 0-.0234 0z"/>
                                </svg>
                                ) : ''}
                              {project.tech === 'js' ? (
                                <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                                </svg>
                              ) : ''}
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

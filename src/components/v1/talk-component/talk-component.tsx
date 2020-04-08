declare var NProgress: any;

import { Component, State, h } from '@stencil/core';
import fbase from '../../../firebase/index.js';
import store from '../../../store';

const database = fbase.database;

interface Talk {
  quote: string;
  title: string;
  year: string;
  event: string;
  link: string;
}


@Component({
  tag: 'talk-component',
  styleUrl: 'talk-component.scss'
})

export class TalkComponent {
  @State() talks: Array<any> = store.get("talks");

  componentDidLoad() {
    NProgress.start();
    return this.fetchTalks().then((talks: Array<any>) => {
      NProgress.done();
      store.set("talks", talks);

      this.talks = talks;
    }).catch((error: any) => {
      console.log(error);
    });
  }

  fetchTalks() {
    return new Promise((resolve, reject) => {
      database.collection('talks').orderBy('year', 'desc').orderBy('title', 'asc').get().then((talks: any) => {
        if (talks.size !== 0) {
          const temp = [];
          let count = talks.size;
          talks.forEach((talk) => {
            temp.push(talk.data());
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
    return(
      <div>
        <nav-bar></nav-bar>
        <main>
          <p class="container py-5">
            <h3 id="intro">Talks</h3>
            <p class="mt-5">
              <p>I mostly speak on machine learning. Here are some of my talks.</p>
              <div class="row">
                {
                  this.talks.map((talk: Talk) => {
                    return (
                      <div class="col-md-6 mb-3">
                        <div class="card h-100">
                          <div class="card-body">
                            <h5 class="card-title bold">
                              {talk.title} ({talk.year})
                            </h5>
                            <p class="card-text">"...{talk.quote}"</p>
                            <span class="card-link pull-left bold">{talk.event}</span>
                            <a style={{float: 'right'}} href={talk.link} class="card-link ul">Slides</a>
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
    );
  }
}

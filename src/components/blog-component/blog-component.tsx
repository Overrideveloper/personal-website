declare var NProgress: any;
import { Component, State } from '@stencil/core';
import fbase from '../../firebase/index.js';

const database = fbase.database;

interface Post {
  blog: string;
  link: string;
  quote: string;
  title: string;
  year: number;
}


@Component({
  tag: 'blog-component',
  styleUrl: 'blog-component.css'
})

export class BlogComponent {
  @State() posts: Array<any> = [];

  componentDidLoad() {
    NProgress.start();
    return this.fetchPosts().then((posts: Array<any>) => {
      this.posts = posts;
      NProgress.done();
    }).catch((error: any) => {
      console.log(error);
    });
  }

  fetchPosts() {
    return new Promise((resolve, reject) => {
      database.collection('posts').orderBy('year', 'desc').orderBy('title', 'asc').get().then((posts: any) => {
        if (posts.size !== 0) {
          const temp = [];
          let count = posts.size;
          posts.forEach((post) => {
            temp.push(post.data());
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
            <h3 id="intro">Posts</h3>
            <p class="mt-5">
              <p>I mostly write on web development and machine learning. Here are some of the things I have written.</p>
              <div class="row">
                {
                  this.posts.map((post: Post) => {
                    return (
                      <div class="col-md-6 mb-3">
                        <div class="card h-100">
                          <div class="card-body">
                            <h5 class="card-title bold">
                              {post.title} ({post.year})
                            </h5>
                            <p class="card-text">"...{post.quote}"</p>
                            <span class="card-link pull-left">
                              {post.blog === 'dev.to' ? (<img alt="dev.to" src="../../assets/icon/dev-dot-to.svg" class="icon" />) : ''}
                            </span>
                            <a href={post.link} style={{float: 'right'}} class="card-link ul">Read</a>
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

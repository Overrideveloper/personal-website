import { Component } from '@stencil/core';

@Component({
  tag: 'blog-component',
  styleUrl: 'blog-component.css'
})

export class BlogComponent {
  render() {
    return(
      <div>
        <nav-bar></nav-bar>
        <main>
          <p class="mt-5">
            <h4 class="bold">Blog</h4>
            <br/>
            <p><h5 class="bold"><a href="https://dev.to/overrideveloper/machine-learning-at-a-glance-1108" class="black">Machine Learning at A Glance</a></h5>
            <span class="text-muted">Nov 27 '18</span></p>
            <p><h5 class="bold"><a href="https://dev.to/overrideveloper/an-intro-to-supervised-learning-the-good-the-bad-and-the-ugly-1oo" class="black">An Intro. To Supervised Learning: The Good, The Bad and The Ugly</a></h5>
            <span class="text-muted">Oct 1 '17</span></p>
            <p><h5 class="bold"><a href="https://dev.to/overrideveloper/securing-your-aspnet-application" class="black">Securing Your ASP.NET Application</a></h5>
            <span class="text-muted">Sep 16 '17</span></p>
            <p><h5 class="bold"><a href="https://dev.to/overrideveloper/cors-in-aspnet-web-api" class="black">CORS in ASP.Net Web API</a></h5>
            <span class="text-muted">Aug 29 '17</span></p>
          </p>
        </main>
        <footer-component></footer-component>
      </div>
    );
  }
}

import { Component } from '@stencil/core';

@Component({
  tag: 'home-component',
  styleUrl: 'home-component.scss',
})

export class HomeComponent{

  render(){
    return(
      <div>
        <nav-bar></nav-bar>
        <main>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <img class="float-left img" src="../../assets/img/3.jpg" id="img2"/>
              </div>
              <div class="col-md-8">
              <div class="container py-5">
                <h3 class="pull-right" id="intro">Hello, I'm Banso D. Wisdom</h3>
              </div>
              <div class="container">
                <p class="pull-right">
                  I write, think and talk about front-end development, cross-platform applications, web components and machine
                  learning.</p>
                <span></span>
                <p>
                  I currently live in Abuja, Nigeria and I work as a developer. I work primarily with <span class="bold ul mr-1">Angular</span>
                  and <span class="bold ul">Ionic</span> to build web and cross-platform mobile applications (hence the self-given title of "software ng-neer", I hope it catches on. 😋).
                </p>
                <p> I also use <span class="bold ul">Stencil</span> to build web components and web applications/sites. Just like this one!</p>
                <p>
                  In addition, I work with with <span class="bold ul">.Net</span> and <span class="bold ul">.Net Core</span> to build web applications and APIs.
                  On some days, I can also be found tinkering with <span class="bold ul">Express.js</span> and <span class="bold ul">Flask</span>.
                </p>
                <p>
                  I am currently not available for work/collaborations, however I am available for a chat 😄.
                </p>
            </div>
              </div>
            </div>
            </div>
          </main>
        <footer-component></footer-component>
      </div>
    );
  }
}

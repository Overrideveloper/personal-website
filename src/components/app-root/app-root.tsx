import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return(
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="home-component" exact={true}></stencil-route>
          <stencil-route url="/posts" component="blog-component"></stencil-route>
          <stencil-route url="/projects" component="project-component"></stencil-route>
          <stencil-route url="/talks" component="talk-component"></stencil-route>
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

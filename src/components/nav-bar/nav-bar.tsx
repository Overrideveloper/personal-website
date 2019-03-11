import { Component } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
})

export class TitleComponent {

  render() {
    return(
      <div>
        <div id="nav" class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-transparent">
          <h5 class="my-0 mr-md-auto" id="title">
            <stencil-route-link url='/'>Banso D. Wisdom, Software ng-neer</stencil-route-link>
          </h5>
          <h5 class="my-0 mr-md-auto black" id="title1">
            <stencil-route-link url='/'>Banso, Software ng-neer</stencil-route-link>
          </h5>
          <nav class="my-2 my-md-0 mr-md-3">
            <stencil-route-link class="p-2 black" url='/posts'>Posts</stencil-route-link>
            <stencil-route-link class="p-2 black" url='/projects'>Projects</stencil-route-link>
            <stencil-route-link class="p-2 black" url='/talks'>Talks</stencil-route-link>
          </nav>
        </div>
      </div>
    );
  }
}

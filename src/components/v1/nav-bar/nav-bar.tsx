import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
})

export class TitleComponent {
  @State() checked: boolean;

  darkMode() {
    document.documentElement.style.setProperty('--v1-background', 'rgb(5, 6, 14)');
    document.documentElement.style.setProperty('--v1-text', 'white');
    document.documentElement.style.setProperty('--v1-border', 'rgb(48, 57, 104)');
    document.documentElement.style.setProperty('--v1-hover', 'rgb(48, 57, 104)');
    document.documentElement.style.setProperty('--v1-header', '#a1a1a1');
    document.documentElement.style.setProperty('--v1-toggle', '#a1a1a1');
    document.documentElement.style.setProperty('--v1-svg', 'white');
    document.documentElement.style.setProperty('--v1-hover-text', 'white');
    document.documentElement.style.setProperty('--v1-card-bg', 'rgb(15, 18, 32)');
    
    document.body.style.background = document.documentElement.style.getPropertyValue("--v1-background");
  }

  lightMode() {
    document.documentElement.style.setProperty('--v1-background', 'white');
    document.documentElement.style.setProperty('--v1-text', 'black');
    document.documentElement.style.setProperty('--v1-border', 'black');
    document.documentElement.style.setProperty('--v1-hover', 'goldenrod');
    document.documentElement.style.setProperty('--v1-header', 'black');
    document.documentElement.style.setProperty('--v1-toggle', 'lightgrey');
    document.documentElement.style.setProperty('--v1-svg', 'black');
    document.documentElement.style.setProperty('--v1-hover-text', 'white');
    document.documentElement.style.setProperty('--v1-card-bg', 'white');
    
    document.body.style.background = document.documentElement.style.getPropertyValue("--v1-background");
  }

  toggleMode() {
    setTimeout(() => {
      switch (localStorage.getItem('MODE')) {
        case '0':
          this.darkMode();
          this.checked = true;
          localStorage.setItem('MODE', '1');
          break;
        case '1':
          this.lightMode();
          this.checked = false;
          localStorage.setItem('MODE', '0');
          break;

        default:
          this.lightMode();
          this.checked = false;
          localStorage.setItem('MODE', '0');
          break;
      }
    }, 300);
  }

  render() {
    if (localStorage.getItem('MODE') === null || localStorage.getItem('MODE') === undefined || localStorage.getItem('MODE') === '') {
      localStorage.setItem('MODE', '0');
      this.lightMode();
    } else {
      localStorage.getItem('MODE') === '1' ? this.darkMode() : this.lightMode();
    }
    
    localStorage.getItem('MODE') === '1' ? this.checked = true : this.checked = false;

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
            <stencil-route-link class="p-2 black" url='/v1/posts'>Posts</stencil-route-link>
            <stencil-route-link class="p-2 black" url='/v1/projects'>Projects</stencil-route-link>
            <stencil-route-link class="p-2 black" url='/v1/talks'>Talks</stencil-route-link>
            <stencil-route-link class="p-2 black" url='/v2'>v2</stencil-route-link>
            <a href="javascript: void(0);" class="p-2 black" onClick={() => this.toggleMode()}>{
              this.checked === true ? ("Light mode") : ("Dark mode")}
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

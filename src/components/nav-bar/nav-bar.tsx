import { Component, State } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
})

export class TitleComponent {
  @State() checked: boolean;

  darkMode() {
    document.documentElement.style.setProperty('--background', 'rgb(5, 6, 14)');
    document.documentElement.style.setProperty('--text', 'white');
    document.documentElement.style.setProperty('--border', 'rgb(48, 57, 104)');
    document.documentElement.style.setProperty('--hover', 'rgb(48, 57, 104)');
    document.documentElement.style.setProperty('--header', '#a1a1a1');
    document.documentElement.style.setProperty('--toggle', '#a1a1a1');
    document.documentElement.style.setProperty('--svg', 'white');
    document.documentElement.style.setProperty('--hover-text', 'white');
    document.documentElement.style.setProperty('--card-bg', 'rgb(15, 18, 32)');
  }

  lightMode() {
    document.documentElement.style.setProperty('--background', 'white');
    document.documentElement.style.setProperty('--text', 'black');
    document.documentElement.style.setProperty('--border', 'black');
    document.documentElement.style.setProperty('--hover', 'goldenrod');
    document.documentElement.style.setProperty('--header', 'black');
    document.documentElement.style.setProperty('--toggle', 'lightgrey');
    document.documentElement.style.setProperty('--svg', 'black');
    document.documentElement.style.setProperty('--hover-text', 'white');
    document.documentElement.style.setProperty('--card-bg', 'white');
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
            <stencil-route-link class="p-2 black" url='/posts'>Posts</stencil-route-link>
            <stencil-route-link class="p-2 black" url='/projects'>Projects</stencil-route-link>
            <stencil-route-link class="p-2 black" url='/talks'>Talks</stencil-route-link>
            <a href="javascript: void(0);" class="p-2 black" onClick={() => this.toggleMode()}>{
              this.checked === true ? ("Light mode") : ("Dark mode")}
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

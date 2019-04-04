import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
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

  render() {
    if (localStorage.getItem('MODE') === null || localStorage.getItem('MODE') === undefined || localStorage.getItem('MODE') === '') {
      localStorage.setItem('MODE', '0');
      this.lightMode();
    } else {
      localStorage.getItem('MODE') === '1' ? this.darkMode() : this.lightMode();
    }
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

import { Component, h } from '@stencil/core';

@Component({
  tag: 'core-root',
  styleUrl: 'core-root.css'
})
export class CoreRoot {

  render() {
    return(
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" exact={true} component="root-redirect" />

          <stencil-route url="/v1" routeRender={() => {
            return (
              <app-v1>
                <div class="app-v1 py-4">
                  <stencil-route url="/v1" exact={true} component="home-component" />
                  <stencil-route url="/v1/posts" component="blog-component" />
                  <stencil-route url="/v1/projects" component="project-component" />
                  <stencil-route url="/v1/talks" component="talk-component" />
                </div>
              </app-v1>
            );
          }}
          />

          <stencil-route url="/v2" routeRender={() => {
            return (
              <app-v2>
                <div class="app-v2 container-fluid px-0">
                  <stencil-route url="/v2" exact={true} component="v2-home" />
                </div>
              </app-v2>
            );
          }}
          />

        </stencil-route-switch>
      </stencil-router>
    );
  }
}

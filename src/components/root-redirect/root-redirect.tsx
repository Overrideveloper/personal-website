import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'root-redirect',
  styleUrl: 'root-redirect.css'
})
export class RootRedirect {
  @Prop() history: RouterHistory;

  rootURLFragment: string = "/v1";

  render() {
    this.history.replace(this.rootURLFragment);
  }
}

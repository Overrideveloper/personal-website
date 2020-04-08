import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'root-redirect'
})
export class RootRedirect {
  @Prop() history: RouterHistory;

  rootURLFragment: string = "/v2";

  render() {
    this.history.replace(this.rootURLFragment);
  }
}

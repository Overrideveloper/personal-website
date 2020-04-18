import { Component, h } from '@stencil/core';

@Component({
  tag: 'core-root',
  styleUrl: 'core-root.css'
})
export class CoreRoot {

  render() {
    return(<v2-home></v2-home>);
  }
}

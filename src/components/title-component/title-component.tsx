import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'title-component',
  styleUrl: 'title-component.css',
  shadow: true
})

export class TitleComponent {
  @Prop() name: string;

  render() {
    return(
      <div>
        <h3>Hello, {this.name}</h3>
      </div>
    );
  }
}

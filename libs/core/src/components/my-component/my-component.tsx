import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Prop() name: string;

  render() {
    return <div>Hello, World! I'm {this.name}</div>;
  }
}

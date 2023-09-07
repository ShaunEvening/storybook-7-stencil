import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cool-button',
  styleUrl: 'cool-button.css',
  shadow: true,
})
export class CoolButton {
  @Prop() isPrimary: boolean;

  render() {
    console.log('isPrimary', this.isPrimary);
    return (
      <Host>
        <button class={{ primary: this.isPrimary }}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}

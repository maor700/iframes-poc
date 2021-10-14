import { LitElement, html, property, customElement, eventOptions } from 'lit-element';

@customElement('hello-component') //Decorator that register as a custom element named <hello-component>
export class HelloComponent extends LitElement {
  @property({ type: Number, attribute: false })
  counter = 0; // You can assign the default value here.


  @eventOptions({ capture: true })
  increase(ev: MouseEvent) {
    ev.stopPropagation();
    this.counter = this.counter + 1;
    this.requestUpdate();
  };

  render() { // Defines a template to be "rendered" as part of the component.
    return html`
    <button @click=${this.increase}>increase</button>
    <p>Hello, ${this.counter}. Welcome to LitElement!</p>
    `;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hello-component': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>; // Normal web component
    }
  }
}
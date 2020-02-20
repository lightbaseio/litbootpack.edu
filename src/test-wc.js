import { LitElement, html } from 'lit-element';

class TestWc extends LitElement {
    constructor() {
        super();
        this.test_name = "LitElement + Bootstrap + SPA"
    }
    firstUpdated() {
      console.log('test-wc firstUpdated()');


    }


    render() {
        return html`
            <app-header>
                <h1 slot="left">TestWC Web Component</h1>
            </app-header>
            <div>
            <p>
              Hello <b>${this.test_name}</b>
            </p>
            </div>
            <app-footer>
                ... footer text ...
            </app-footer>
        `
    }
}
customElements.define('test-wc', TestWc);

import { LitElement, html } from 'lit-element';
import { Router } from 'simple-wc-router';
const globalProp = "version-1.2.3";

class AppRouter extends Router(LitElement) {
  static get routes() {
    return [
      {
        path: "/",
        component: 'test-wc',
        import: () => import(/* webpackChunkName: "adminutils" */ "./test-wc.js")
      },
      {
        path: "/pageone",
        component: 'page-one',
        import: () => import(/* webpackChunkName: "adminutils" */ "./page-one.js")
      },
      {
        path: "/pagetwo",
        component: 'page-two',
        import: () => import(/* webpackChunkName: "adminutils" */ "./page-two.js")
      }
    ];
  } //routes()
  constructor() {
    super();
  }
  firstUpdated() {
    console.log('app-router()');
  }
  render() {
    return html`
      ${this.routeElement}
    `
  }

   createRenderRoot() {
    return this;
  }

}
customElements.define('app-router', AppRouter);


/*
      {
        path: "*",
        render: () => html`<h2>404 The requested page could not be found</h2>`
      }

          import: () => {
            console.log('path /pageone');
            //import('./page-one.js');
            import('./page-one.js');
            console.log('imported /pageone');
          }



*/

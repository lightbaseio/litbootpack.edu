import { LitElement, html } from 'lit-element';
import { RouteMixin } from 'simple-wc-router'; 

class PageTwo extends RouteMixin(LitElement) {
    constructor() {
        super();
    }
    firstUpdated() {
      console.log('page-two started...');
    }
    render() {
        return html`
  <div class="main main-raised">
    <div class="section section-basic">
      <div class="container">
              <!-- Tabs with icons on Card -->
              <div class="card card-nav-tabs">
                <div class="card-header card-header-primary">
                  <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
                  <div class="nav-tabs-navigation">
                    <div class="nav-tabs-wrapper">
                      <ul class="nav nav-tabs" data-tabs="tabs">
                        <li class="nav-item">
                          <a class="nav-link" href="javascript:void(0);" @click="${(e)=>{e.preventDefault(); this.navigate('/pageone')}}" >
                            <i class="material-icons">face</i> Page One
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active" href="javascript:void(0);" @click="${(e)=>{e.preventDefault(); this.navigate('/pagetwo')}}" >
                            <i class="material-icons">chat</i> Page Two
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body ">
                  <div class="tab-content text-center">
                    <div class="tab-pane active" id="profile">
                      <p> <h3>Page Two</h3></p>

              <span class="badge badge-pill badge-secondary">Default</span>
              <span class="badge badge-pill badge-rose">Misc</span>
              <span class="badge badge-pill badge-primary">Primary</span>
              <span class="badge badge-pill badge-info">Info</span>
              <br/>
              <span class="badge badge-pill badge-success">Success</span>
              <span class="badge badge-pill badge-warning">Warning</span>
              <span class="badge badge-pill badge-danger">Danger</span>
              <span class="badge badge-pill badge-rose">Rose</span>

                    </div>
                  </div>
                </div>
              </div>
              <!-- End Tabs with icons on Card -->
  `}

 createRenderRoot() {
    return this;
  }  

}
customElements.define('page-two', PageTwo);

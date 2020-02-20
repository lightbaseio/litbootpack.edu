import { LitElement, html } from 'lit-element';
import { RouteMixin } from 'simple-wc-router'; 

class PageOne extends RouteMixin(LitElement) {
    constructor() {
        super();
    }
    firstUpdated() {
      console.log('page-one started...');
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
                          <a class="nav-link active" href="javascript:void(0);" @click="${(e)=>{e.preventDefault(); this.navigate('/pageone')}}" >
                            <i class="material-icons">face</i> Page One
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="javascript:void(0);" @click="${(e)=>{e.preventDefault(); this.navigate('/pagetwo')}}" >
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
                      <p> <h3>Page One</h3></p>
                       
                      <button class="btn btn-primary">Default</button>
                      <button class="btn btn-primary btn-round">Round</button>
                      <button class="btn btn-primary btn-round">
                        <i class="material-icons">favorite</i> With Icon
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <!-- End Tabs with icons on Card -->


        
      </div>
    </div>
  </div>



  `}

 createRenderRoot() {
    return this;
  }  

}
customElements.define('page-one', PageOne);


/*

<div class="main main-raised">
  <div class="section section-basic">
    <div class="container">
      <div class="title">
        <h2>Basic Elements</h2>dlkfjsdlkfjsdl
      </div>
      <div id="buttons" class="cd-section">
        <div class="title">
          <h3>Buttons
            <br>
            <small>Pick your style</small>
          </h3>
        </div>


    </div>
  </div>
</div>


*/
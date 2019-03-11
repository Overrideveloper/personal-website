declare var NProgress: any;
import { Component , State} from '@stencil/core';
import fbase from '../../firebase/index.js';
import '@stencil/router';

const database = fbase.database;

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.css'
})

export class FooterComponent {
  date = new Date().getFullYear();
  @State() name: string;
  @State() email: string;
  @State() body: string;

  setName(e: any) {
    this.name = e.srcElement.value;
  }

  setEmail(e: any) {
    this.email = e.srcElement.value;
  }

  setBody(e: any) {
    this.body = e.srcElement.value;
  }

  resetForm() {
    this.email = '';
    this.body = '';
    this.name = '';
  }

  handleSubmit(e: any) {
    e.preventDefault();
    NProgress.start();
    database.collection("messages").doc(String(Date.now())).set({
      name: this.name,
      message: this.body,
      email: this.email,
      date: Date.now()
    })
    .then(() => {
      NProgress.done();
      document.getElementById('success-text').style.display = 'block';
      this.resetForm();
    })
  }

  render() {
    return(
      <footer class="pt-4">
        <div class="container-fluid row">
          <div class="col-12 col-md-6">
            <h5 class="text-suplias bold">Banso D. Wisdom
            </h5>
            <h6 class="text-muted">&copy; {this.date}</h6>
            <ul class="list-unstyled text-small">
              <li id="git"><a class="text-muted" href="https://github.com/overrideveloper"><i class="fab fa-github mt-2"></i> @overrideveloper</a><br/></li>
              <li id="tweet"><a class="text-muted" href="https://twitter.com/overrideveloper"><i class="fab fa-twitter mt-2"></i> @overrideveloper</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <form class="pull-right" onSubmit={($event) => this.handleSubmit($event)}>
              <div class="row">
                <div class="form-group col-md-5">
                  <input required value={this.name} onInput={($event) => this.setName($event)} class="form-control" placeholder="Sunday Dagboru" />
                </div>
                <div class="form-group col-md-7">
                  <input required value={this.email} onInput={($event) => this.setEmail($event)} style={{width: '18em'}} type="email" class="form-control" placeholder="sundaydagboru@iyalaya.anybody" />
                </div>
              </div>
              <div class="form-group">
                <textarea required value={this.body} onInput={($event) => this.setBody($event)} class="form-control" placeholder="Hey Banso, check this out....." />
              </div>
              <div class="form-group pull-right">
                <button class="btn btn-secondary btn-sm">Send</button>
              </div>
              <small id="success-text" style={{display: 'none'}} class="form-text">Your message has been sent. Expect a reply soon. 😄</small>
            </form>
          </div>
        </div>
      </footer>
    );
  }
}

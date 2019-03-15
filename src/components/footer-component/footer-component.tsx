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
    const id = this.generateRand();
    database.collection("messages").doc(id).set({
      name: this.name,
      message: this.body,
      email: this.email,
      replied: false,
      date: Date.now(),
      reply: '',
      id: id
    })
    .then(() => {
      NProgress.done();
      document.getElementById('success-text').style.display = 'block';
      this.resetForm();
    })
  }

  generateRand() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text.toUpperCase();
  }

  render() {
    return(
      <footer class="pt-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <h5 class="text-dark bold">Banso D. Wisdom
              </h5>
              <h6 class="text-dark">&copy; {this.date}</h6>
              <ul class="list-unstyled text-small">
                <li class="text-dark" id="git">
                  <a href="https://github.com/overrideveloper">
                    <img alt="github" src="../../assets/icon/github.svg" class="icon mr-2" /> @overrideveloper
                  </a><br/>
                </li>
                <li class="text-dark" id="tweet">
                  <a href="https://twitter.com/overrideveloper">
                    <img alt="twitter" src="../../assets/icon/twitter.svg" class="icon mr-2" /> @overrideveloper
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <form onSubmit={($event) => this.handleSubmit($event)}>
                <div class="row">
                  <div class="form-group col-md-12">
                    <span class="pull-left form-text">Send a message</span>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-5">
                    <label htmlFor="name">Your name</label>
                    <input id="name" required value={this.name} onInput={($event) => this.setName($event)} class="form-control" placeholder="Sunday Dagboru" />
                  </div>
                  <div class="form-group col-md-7">
                    <label htmlFor="email">Your email address</label>
                    <input id="email" required value={this.email} onInput={($event) => this.setEmail($event)} type="email" class="form-control" placeholder="sundaydagboru@iyalaya.anybody" />
                  </div>
                </div>
                <div class="form-group">
                  <label htmlFor="body">Your message</label>
                  <textarea id="body" required value={this.body} onInput={($event) => this.setBody($event)} class="form-control" placeholder="Hey Banso, check this out....." />
                </div>
                <div class="btn-block form-group">
                  <button style={{float: 'right'}} class="btn btn-dark btn-sm">Send</button>
                </div>
                <small id="success-text" style={{display: 'none'}} class="form-text">Your message has been sent. Expect a reply soon. 😄</small>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

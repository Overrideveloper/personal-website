declare var NProgress: any;
import { Component, State, h } from '@stencil/core';
import fbase from '../../../firebase/index.js';
import '@stencil/router';

const database = fbase.database;

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.scss'
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
    });
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
              <h5 class="dark-text bold">Banso D. Wisdom
              </h5>
              <h6 class="dark-text">&copy; {this.date}</h6>
              <ul class="list-unstyled text-small">
                <li class="text-dark" id="git">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="img-icon mr-2">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <a href="https://github.com/overrideveloper"> @overrideveloper
                  </a><br/>
                </li>
                <li class="text-dark" id="tweet">
                  <a href="https://twitter.com/overrideveloper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612" class="img-icon mr-2">
                      <path d="M612 116.258c-22.525 9.98-46.694 16.75-72.088 19.772 25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822 18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836 104.48-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.29 111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253 87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134 0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44 56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253C573.87 163.525 595.21 141.42 612 116.257z">
                      </path>
                    </svg> @overrideveloper
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
                    <input id="name" required value={this.name} onInput={($event) => this.setName($event)} class="form-control" placeholder="Ciroma Chukwuma Adekunle" />
                  </div>
                  <div class="form-group col-md-7">
                    <label htmlFor="email">Your email address</label>
                    <input id="email" required value={this.email} onInput={($event) => this.setEmail($event)} type="email" class="form-control" placeholder="ciroma@chukwuma.adekunle" />
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

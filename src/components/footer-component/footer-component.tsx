import { Component } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.css'
})

export class FooterComponent {
  date = new Date().getFullYear();

  render() {
    return(
      <footer class="py-5">
        <div class="container-fluid row">
          <div class="col-12 col-md">
            <h5 class="text-suplias bold">Banso D. Wisdom
              <h6 class="ml-2 mb-3 text-muted">&copy; {this.date}</h6>
            </h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted ml-2" href="mailto:bansowisdom@gmail.com"><i class="fa fa-envelope"></i></a></li>
              <li><a class="text-muted ml-2" href="https://github.com/overrideveloper"><i class="fa fa-github"></i></a></li>
              <li><a class="text-muted ml-2" href="https://twitter.com/overrideveloper"><i class="fa fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

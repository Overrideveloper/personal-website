import { Component, h } from '@stencil/core';

@Component({
    tag: 'v2-home',
    styleUrl: 'home.scss'
})
  
export class V2Home {
    componentDidLoad() {
        window.onscroll = function() { this.fixNavOnScroll() }.bind(this);
    }

    fixNavOnScroll() {
        const navbar = document.querySelector('v2-nav') as HTMLV2NavElement;
        const sticky = navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }

    render() {
        return (
            <div class="root">
                <div class="main">
                    <div class="main-content">
                        <v2-nav></v2-nav>
                        <v2-content>
                            <v2-hero></v2-hero>
                            <v2-work></v2-work>
                            <v2-experience></v2-experience>
                            <v2-projects></v2-projects>
                            <v2-future></v2-future>
                        </v2-content>
                    </div>
                    
                    <div class="bio">
                        <h3 class="bio-item" id="engineer">Software Engineer,</h3>
                        <h3 class="bio-item" id="writer">Writer,</h3>
                        <h3 class="bio-item" id="speaker">Speaker,</h3>
                        <h3 class="bio-item" id="gamer">Gamer.</h3>
                    </div>
                </div>
            </div>
        )
    }
}
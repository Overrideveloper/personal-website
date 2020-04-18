import { Component, h } from '@stencil/core';

@Component({
    tag: 'v2-nav',
    styleUrl: 'nav.scss'
})
  
export class V2Nav {
    render() {
        return (
            <div>
                <div class="main-nav">
                    <h6 class="active">Banso</h6>

                    <a href="#v2-work">Work</a>
                    <a href="#v2-projects">Projects</a>
                    <a href="#v2-contact">Contact</a>
                </div>

                <div class="main-nav-sm">
                    <h6 class="active">Banso</h6>

                    <div class="nav-sm-items">
                        <a href="#v2-work">Work</a>
                        <a href="#v2-projects">Projects</a>
                        <a href="#v2-contact">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}
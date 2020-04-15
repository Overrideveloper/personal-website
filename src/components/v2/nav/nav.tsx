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
                    <a>Articles</a>
                    <a>Talks</a>
                    <a>Projects</a>
                    <stencil-route-link url='/v1'>v1</stencil-route-link>
                </div>

                <div class="main-nav-sm">
                    <h6 class="active">Banso</h6>

                    <div class="nav-sm-items">
                        <a>Work</a>
                        <a>Articles</a>
                        <a>Talks</a>
                        <a>Projects</a>
                        <stencil-route-link url='/v1'>v1</stencil-route-link>
                    </div>
                </div>
            </div>
        )
    }
}
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
                    <h6>Banso</h6>

                    <a class="active">Home</a>
                    <a>About</a>
                    <a>Work</a>
                    <a>Articles</a>
                    <a>Talks</a>
                    <a>Projects</a>
                </div>

                <div class="main-nav-sm">
                    <h6>Banso</h6>

                    <div class="nav-sm-items">
                        <a class="active">Home</a>
                        <a>About</a>
                        <a>Work</a>
                        <a>Articles</a>
                        <a>Talks</a>
                        <a>Projects</a>
                    </div>
                </div>
            </div>
        )
    }
}
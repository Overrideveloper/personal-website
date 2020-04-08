import { Component, h } from '@stencil/core';

@Component({
    tag: 'v2-home',
    styleUrl: 'home.scss'
})
  
export class V2Home {
    render() {
        return (
            <div class="root">
                <div class="main">
                    <div class="hand-emoji">🖐🏿</div>
                </div>
                <div class="intro">
                    <div class="bar" id="bar-1"></div>
                    <div class="bar" id="bar-2"></div>
                        <div class="bio">
                            <h3 class="bio-item" id="engineer">Software Engineer,</h3>
                            <h3 class="bio-item" id="writer">Writer,</h3>
                            <h3 class="bio-item" id="speaker">Speaker,</h3>
                            <h3 class="bio-item" id="gamer">Gamer.</h3>
                        </div>
                    <div class="bar" id="bar-3"></div>
                    <div class="bar" id="bar-4"></div>
                    <div class="bar" id="bar-5"></div>
                    <div class="bar" id="bar-6"></div>
                    <div class="bar" id="bar-7"></div>
                    <div class="bar" id="bar-8"></div>
                </div>
            </div>
        )
    }
}
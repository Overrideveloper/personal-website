import { Component, h } from '@stencil/core';

@Component({
    tag: 'v2-footer',
    styleUrl: 'footer.scss'
})
  
export class V2Footer {
    render() {
        return (
            <div>
                <div class="v2-footer">
                    <p>Built with <a href="https://stenciljs.com" target="_blank" rel="noopener noreferrer">Stencil</a> and inspiration from
                       <a href="https://dribbble.com/shots/7161649-Hibix-Personal-Portfolio-Design" target="_blank" rel="noopener noreferrer"> Shuvo</a>,
                       <a href="https://dribbble.com/shots/10724776-Carlos-Personal-Portfolio-Website" target="_blank" rel="noopener noreferrer"> Muh</a> and
                       <a href="https://dribbble.com/shots/4950641-Portfolio-3-0" target="_blank" rel="noopener noreferrer"> Gil</a>
                    </p>
                </div>
            </div>
        )
    }
}
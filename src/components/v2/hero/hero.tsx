import { Component, h } from '@stencil/core';

@Component({
    tag: 'v2-hero',
    styleUrl: 'hero.scss'
})
  
export class V2Hero {
    render() {
        return (
            <div>
                <div class="hero-flex">
                    <div class="name-image">
                        <h1 class="hero-name">Wisdom<br/>Banso</h1>
                        <h1 class="hero-name-sm">Wisdom Banso</h1>
                        <img src="../../../assets/v2/img/banso.png" alt="A Image of Banso Wisdom"/>
                    </div>
                    <div class="introduction">
                        <h6 class="intro-title"><span>&#8213;</span>Software Engineer</h6>
                        <p class="intro-location">Based in Nigeria,<br/> I am a software engineer.</p>
                        <p class="intro-summary">I build <span class="emphasis">beautiful</span> and <span class="emphasis">usable [progressive] web applications</span>,
                            <span class="emphasis"> cross-platform mobile</span> and <span class="emphasis">desktop applications</span>, fulfilling the client's desires as best as possible without compromising performance,
                            best practices and usability.
                        </p>
                        <p class="intro-email">E: <a href="mailto:bansowisdom@gmail.com">bansowisdom@gmail.com</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
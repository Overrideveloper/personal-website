import { Component, h } from '@stencil/core';

@Component({
    tag: 'v2-future',
    styleUrl: 'future.scss'
})
  
export class V2Future {

    componentDidLoad() {
        const futureEl = document.querySelector('#v2-contact');

        setTimeout(() => {
            futureEl.classList.remove('hidden');
            
            const futureFlex = document.querySelector('.v2-future-flex');

            const observer = new IntersectionObserver((entries, observer) => {
                entries.map(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(futureEl);
            observer.observe(futureFlex);
        }, 6600);
    }

    render() {
        return (
            <div id="v2-contact" class="v2-future hidden">
                <h3 class="v2-future-title"><span>&#8213;</span>Contact</h3>

                <div class="v2-future-flex">
                    <h3>Do you have an idea?</h3>
                    <h4>Do you need something built?</h4>
                    <h4>Do you want to discuss "software things"?</h4>

                    <div class="v2-future-cta">
                        <p>I am currently available for all of the above.</p>
                        <p>Get in touch, send me a message.</p>
                        <a href="mailto:bansowisdom@gmail.com"><button>Send Message</button></a>
                    </div>
                </div>
            </div>
        )
    }
}
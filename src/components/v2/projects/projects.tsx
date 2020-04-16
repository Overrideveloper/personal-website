import { Component, h, State } from '@stencil/core';
import ADJECTIVER from '@overrideveloper/adjectiver';

const ADJECTIVER_RESULT_COUNT = 4;

@Component({
    tag: 'v2-projects',
    styleUrl: 'projects.scss'
})
  
export class V2Projects {
    @State() adjectiverName: string;
    @State() adjectiverResults: any;

    setAdjectiverName(e: KeyboardEvent) {
        this.adjectiverName = (e.srcElement as HTMLInputElement).value;
    }

    handleAdjectiverSubmit(e: Event) {
        e.preventDefault();

        const adjectives: string[] = ADJECTIVER.getAdjectives(ADJECTIVER_RESULT_COUNT, this.adjectiverName);

        if (this.adjectiverName) {
            this.adjectiverResults = (
                <p>
                    Adjectives gotten for <span class="emphasis">{this.adjectiverName}</span> which begins with a/an <span class="emphasis">"{this.adjectiverName[0]}"</span> are
                    {
                        adjectives.map((adj, i) => {
                            if (i === adjectives.length - 1) {
                                return (<span> and <span class="emphasis">{adj}</span>.</span>)
                            } else {
                                if (i === 0) {
                                    return (<span class="emphasis"> {adj}</span>);
                                }

                                return (<span>, <span class="emphasis">{adj}</span></span>)
                            }
                        })
                    }
                </p>
            );
        }
    }


    componentDidLoad() {
        console.log(ADJECTIVER);
        const projectsEl = document.querySelector('#v2-projects');

        setTimeout(() => {
            projectsEl.classList.remove('hidden');

            const observer = new IntersectionObserver((entries, observer) => {
                entries.map(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(projectsEl);
        }, 8500);
    }

    render() {
        return (
            <div id="v2-projects" class="v2-projects hidden">
                <h3 class="v2-projects-title"><span>&#8213;</span>What I Have Built</h3>
                
                <div class="v2-projects-flex">
                    <div class="project-section">
                        <div class="project-image-container invisible"></div>
                        <div class="project-info-container">
                            <h5 class="project-title"><a class="project-link">[link]</a> Adjectiver</h5>
                            <div class="project-meta-flex">
                                <h6>2019</h6> <h6 class="divider">::</h6> <h6>Miscellaneous</h6>
                            </div>
                            <div class="project-desc-container">
                                <p class="project-desc">
                                    Adjectiver is a <span class="emphasis">simple lightweight npm package</span> that returns adjectives that begin with the first
                                    letter of a word provided to it.
                                </p>
                                
                                <p class="project-desc">
                                    For example, if given the word <span class="emphasis">Tunde</span>, it will return words like <span class="emphasis">Tenacious</span>,
                                    <span class="emphasis"> Tactical</span>, <span class="emphasis">Tough</span> and <span class="emphasis">Thoughtful</span>.
                                </p>
                                
                                <p class="project-desc">
                                    I created <span class="emphasis">Adjectiver</span> while working on a product where pseudo-random adjectives were
                                    needed for use in a user-targeted campaign. It has also been used in building word games.
                                </p>
                            </div>
                            <div class="project-demo">
                                <h6>Try it out</h6>
                                <span class="NB">[N.B: The adjectives have not been filtered and as such contain both positive and negative adjectives]</span>

                                <form class="form" onSubmit={(event: Event) => this.handleAdjectiverSubmit(event)}>
                                    <div class="form-group">
                                        <label>Your name</label>

                                        <div class="form-group-flex">
                                            <input placeholder="ICogBurner" onInput={(event: KeyboardEvent) => this.setAdjectiverName(event)} />
                                            <button class={ !this.adjectiverName ? "disabled": ""} type="submit">Go</button>
                                        </div>
                                    </div>
                                </form>
                                {
                                    this.adjectiverResults ? (
                                        <div class="results">
                                            <h6>Results</h6>
                                            {this.adjectiverResults}
                                        </div>
                                    ) : ""
                                }
                            </div>
                            <div class="project-tools-flex">
                                <span class="project-tool">JavaScript</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="project-section">
                        <div class="project-image-container"></div>
                        <div class="project-info-container"></div>
                    </div>
                </div>
            </div>
        )
    }
}
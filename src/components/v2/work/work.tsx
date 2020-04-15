import { Component, h, State } from '@stencil/core';

@Component({
    tag: 'v2-work',
    styleUrl: 'work.scss'
})
  
export class V2Work {
    DETAIL_TYPES: string[] = ['FE', 'CP', 'BE'];
    SELECTED_CLASS: string = 'selected';
    SELECTED_DETAIL: string = 'FE';

    @State() selectedWorkDetailCard: HTMLDivElement;

    selectWorkDetailCard(el: HTMLDivElement, detailType: string) {
        if (this.selectedWorkDetailCard) {
            this.selectedWorkDetailCard.classList.remove(this.SELECTED_CLASS);
        }

        el.classList.add(this.SELECTED_CLASS);
        this.selectedWorkDetailCard = el;
        this.SELECTED_DETAIL = detailType;
    }

    componentDidLoad() {
        this.selectedWorkDetailCard = document.querySelector('.v2-work-detail-card.selected');
        const workEl = document.querySelector('.v2-work');

        setTimeout(() => {
            workEl.classList.remove('hidden');

            const observer = new IntersectionObserver((entries, observer) => {
                entries.map(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(workEl);
        }, 8500);
    }

    frontEndTechnologies() {
        return (
            <div class="v2-word-detail-info-flex-inner transition">
                <div class="info-section">
                    <span class="title">
                        <h6>Languages</h6>
                    </span>

                    <div class="list">
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>JavaScript</p>
                        <p>Typescript</p>
                        <p>C# (Razor)</p>
                        <p>SCSS</p>
                    </div>
                </div>
            
                <div class="info-section">
                    <span class="title">
                        <h6>Frameworks</h6>
                    </span>

                    <div class="list">
                        <p>Angular</p>
                        <p>Ionic</p>
                        <p>ASP.NET MVC</p>
                        <p>ASP.NET Core MVC</p>
                        <p>Stencil</p>
                        <p>Vue.js</p>
                        <p>Bootstrap</p>
                        <p>Bulma</p>
                    </div>
                </div>

                <div class="info-section">
                    <span class="title">
                        <h6>Other Tools</h6>
                    </span>

                    <div class="list">
                        <p>Firebase Firestore</p>
                        <p>Firebase Storage</p>
                        <p>Firebase Cloud Functions</p>
                        <p>Firebase Realtime Database</p>
                        <p>Ably Serverless Platform</p>
                    </div>
                </div>
            </div>
        );
    }

    backEndTechnologies() {
        return (
            <div class="v2-word-detail-info-flex-inner">
                <div class="info-section">
                    <span class="title">
                        <h6>Languages</h6>
                    </span>

                    <div class="list">
                        <p>C#</p>
                        <p>JavaScript</p>
                        <p>Typescript</p>
                        <p>Python</p>
                    </div>
                </div>
            
                <div class="info-section">
                    <span class="title">
                        <h6>Frameworks</h6>
                    </span>

                    <div class="list">
                        <p>ASP.NET Web API</p>
                        <p>ASP.NET Core Web API</p>
                        <p>Node.js (Express)</p>
                        <p>Flask</p>
                    </div>
                </div>

                <div class="info-section">
                    <span class="title">
                        <h6>Other Tools</h6>
                    </span>

                    <div class="list">
                        <p>Microsoft SQL Server</p>
                        <p>MySQL</p>
                        <p>PostgreSQL</p>
                        <p>Redis</p>
                        <p>Hangfire</p>
                        <p>Firebase Firestore</p>
                        <p>Firebase Storage</p>
                    </div>
                </div>
            </div>
        );
    }

    crossPlatformTechnologies() {
        return (
            <div class="v2-word-detail-info-flex-inner">
                <div class="info-section">
                    <span class="title">
                        <h6>Languages</h6>
                    </span>

                    <div class="list">
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>Typescript</p>
                    </div>
                </div>
            
                <div class="info-section">
                    <span class="title">
                        <h6>Frameworks</h6>
                    </span>

                    <div class="list">
                        <p>Angular</p>
                        <p>Ionic</p>
                    </div>
                </div>

                <div class="info-section">
                    <span class="title">
                        <h6>Other Tools</h6>
                    </span>

                    <div class="list">
                        <p>Firebase Firestore</p>
                        <p>Firebase Storage</p>
                        <p>Firebase Cloud Functions</p>
                        <p>Firebase Realtime Database</p>
                        <p>Cordova</p>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div class="v2-work hidden">
                <h3 class="v2-work-title"><span>&#8213;</span>What I Do</h3>
                <div class="v2-work-flex">
                    <div class="v2-work-detail-flex sm">
                        <div class="v2-work-detail-card">
                            <img src="../../../assets/v2/img/frontend.svg" alt="Front-End Web Development"/>
                            <h6>Front-End Web Development</h6>
                        </div>

                        <div class="v2-work-detail-card">
                            <img src="../../../assets/v2/img/backend.svg" alt="Back-End Web Development"/>
                            <h6>Back-End Web Development</h6>
                        </div>
                        
                        <div class="v2-work-detail-card">
                            <img src="../../../assets/v2/img/crossplatform.svg" alt="Cross-Platform Mobile App Development"/>
                            <h6>Cross-Platform Mobile App Development</h6>
                        </div>
                    </div>

                    <div class="v2-work-detail-flex">
                        <div class="v2-work-detail-card selected" onClick={(event: MouseEvent) => this.selectWorkDetailCard(event.srcElement as HTMLDivElement, this.DETAIL_TYPES[0])}>
                            <h6>Front-End Web <br/> Development</h6>
                        </div>
                        
                        <div class="v2-work-detail-card" onClick={(event: MouseEvent) => this.selectWorkDetailCard(event.srcElement as HTMLDivElement, this.DETAIL_TYPES[1])}>
                            <h6>Cross-Platform <br/> Mobile App Development</h6>
                        </div>

                        <div class="v2-work-detail-card" onClick={(event: MouseEvent) => this.selectWorkDetailCard(event.srcElement as HTMLDivElement, this.DETAIL_TYPES[2])}>
                            <h6>Back-End Web<br/> Development</h6>
                        </div>
                    </div>

                    <div class="v2-word-detail-info-flex">
                        {
                            this.SELECTED_DETAIL === this.DETAIL_TYPES[0] ? this.frontEndTechnologies() :
                            this.SELECTED_DETAIL === this.DETAIL_TYPES[1] ? this.crossPlatformTechnologies() :
                            this.SELECTED_DETAIL === this.DETAIL_TYPES[2] ? this.backEndTechnologies() : ""
                        }
                    </div>
                </div>
            </div>
        )
    }
}
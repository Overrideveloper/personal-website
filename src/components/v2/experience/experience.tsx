import { Component, h, State } from '@stencil/core';

interface JobWorked {
    company: string;
    role: string;
    type: string;
    location: { state: string, country: string };
    duration: string;
    domains: string[];
}

@Component({
    tag: 'v2-experience',
    styleUrl: 'experience.scss'
})
  
export class V2Experience {
    @State() jobsWorked: JobWorked[] = [];

    componentWillLoad() {
        this.jobsWorked = [
            {
                company: 'Suplias Technologies',
                role: 'Software Engineer',
                type: 'Employee',
                location: { state: 'Lagos', country: 'Nigeria' },
                duration: 'Dec 2017 - Feb 2020',
                domains: ['Fast Moving Consumer Goods']
            },
            {
                company: 'REDACTED',
                role: 'Software Engineer',
                type: 'Contract',
                location: { state: 'REDACTED', country: 'REDACTED' },
                duration: 'REDACTED',
                domains: ['E-Commerce']
            },
            {
                company: 'Infodemics (Ingenia)',
                role: 'Front-End Engineer',
                type: 'Contract',
                location: { state: 'Abuja', country: 'Nigeria' },
                duration: 'Jan 2019 - Feb 2020',
                domains: ['Health Risk Communication']
            },
            {
                company: 'REDACTED',
                role: 'Software Engineer',
                type: 'Freelance',
                location: { state: 'REDACTED', country: 'REDACTED' },
                duration: 'Jan 2019 - Jul 2019',
                domains: ['Real Estate']
            },
            {
                company: 'Bizzdesk Global Solutions',
                role: 'Junior Developer',
                type: 'Internship',
                location: { state: 'Abuja', country: 'Nigeria' },
                duration: 'Mar 2018 - Sep 2017',
                domains: ['Education', 'Human Resource Management']
            }
        ]
    }

    componentDidLoad() {
        const experienceEl = document.querySelector('#v2-experience');

        setTimeout(() => {
            experienceEl.classList.remove('hidden');

            const observer = new IntersectionObserver((entries, observer) => {
                entries.map(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(experienceEl);
        }, 8500);
    }

    redactedClass = (field: string) => field.toLowerCase() === 'redacted' ? 'redacted' : '';

    render() {
        return (
            <div id="v2-experience" class="v2-experience hidden">
                <h3 class="v2-experience-title"><span>&#8213;</span>Who I Have Worked With</h3>

                <div class="v2-experience-flex">
                    {
                        this.jobsWorked.map(job => {
                            return (
                                <div class="v2-experience-card">
                                    <h4 class={ `company-name ${this.redactedClass(job.company)}` }>{job.company}</h4>

                                    <div class="job-flex">
                                        <h5 class={ `job-role ${this.redactedClass(job.role)}` }>{job.role}</h5>
                                        <span class={ `job-type ${this.redactedClass(job.type)}` }>{job.type}</span>
                                    </div>

                                    <div class="job-flex">
                                        <h6 class={ `job-location ${this.redactedClass(job.location.state)} ${this.redactedClass(job.location.country)}` }>
                                            {job.location.state} :: {job.location.country}
                                        </h6>
                                        <h6 class={ `job-duration ${this.redactedClass(job.duration)}` }>{job.duration}</h6>
                                    </div>

                                    {
                                        job.domains.map(domain => {
                                            return ( <span class={ `job-domain ${this.redactedClass(domain)}` }>{domain}</span> );
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
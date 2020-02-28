import React, { Component } from 'react';
import jobcase from '../../img/jobcase.png';

export default class Services extends Component {
  render() {
    return (
      <section id='service'>
        <h1 className='font-red mt-4 mb-4'>Support Services</h1>
        <h4>Employment Resource Center</h4>
        <p>
          The Employment Resource Center (ERC) is open Monday through Friday
          between 10am and 4:30pm. This computer lab is available for employment
          purposes only. Within the ERC, additional support is available to not
          just enrolled program participants, but anyone who visits ULEM for
          support. Everyone who utilizes the ERC must complete an intake form.
          The ERC provides:{' '}
        </p>
        <ul className='list-no-style'>
          <li>
            <i className='fas fa-headset mr-2 font-red' />
            Assistance with basic online job searching
          </li>
          <li>
            <i className='fas fa-headset mr-2 font-red' />
            Support for additional cover letter and resume changes
          </li>
          <li>
            <i className='fas fa-headset mr-2 font-red' />
            Information on any newly listed positions by posting them on the job
            board
          </li>
        </ul>
        <p>In general, the ERC serves 600+ people annually.</p>
        <hr />
        <h4>Online Local Jobs Portal</h4>
        <p>ULEM provides a resource for:</p>
        <ul>
          <li>
            <strong>- job seekers</strong> to find local jobs, to apply online,
            & get answers to work questions
          </li>
          <li>
            <strong>- residents</strong> to share help, support, and tips as a
            community
          </li>
          <li>
            <strong>- employers</strong> to connect with local prospective
            applicants and to build awareness of their jobs
          </li>
        </ul>
        <p>
          Follow this link to search jobs or browse the community, to ask a
          question, and more:
        </p>
        <p>
          <a
            target='_blank'
            href='https://www.jobcase.com/ulem'
            rel='noopener noreferrer'
          >
            www.jobcase.com/ulem
          </a>
        </p>
        <p>
          This portal is provided by a generous donation from Jobcase{' '}
          <img src={jobcase} height='40px' alt='jobcse' />
        </p>
        <hr />
        <h4>Job Placement</h4>
        <p>
          Job Placement assistance is available to all participants enrolled in
          our workforce development programs. Depending on the program,
          participants meet with the Job Placement Specialist weekly or as
          needed. Participants receive job descriptions and contact information
          for available positions that best suit their skill set and educational
          background. They are also prepared for job interview(s) through
          one-on-one meetings, in addition to their classroom training in job
          readiness. Participants are offered ongoing support up to 12 months.
        </p>
        <hr />
        <h4>Case Management</h4>
        <p>
          Case Management Services are available to all participants enrolled in
          our WFD programs. Case Management is the most significant asset and
          strongest component of ULEM’s programs, according to feedback received
          from partners and employers. We believe this is because our staff is
          reflective of the constituents that we serve and are able to provide
          resources to overcome obstacles to employment. ULEM’s case manager
          also does follow-up and tracking of the participants’ placements once
          they have completed a program. Our efforts help participants develop
          concrete support and employment plans extending far beyond the time
          they spend training with us. With our referrals and support,
          participants are able to take clearly defined steps toward moving out
          of poverty through employment. We provide post-job placement support
          for up to 24 months.
        </p>
        <hr />
        <h4>Domestic/Sexual Violence Support</h4>
        <p>
          Support for victims and survivors of domestic and sexual violence is
          made available at the Urban League of Eastern Massachusetts through
          the Domestic and Sexual Violence Project. This culturally specific
          project is offered in direct response to address the need for equal
          access to direct services, information and resources, vital in the
          support of victims and survivors of trauma. Founder, Reverend Traci
          Jackson Antoine; along with her team work in collaboration with faith
          leaders and law enforcement to provide training that enhance the
          quality and response that victims of color receive from first
          responders. Additionally, the project works alongside Northeastern
          University Law Students to provide cultural sensitivity training as it
          relates specifically to victims of trauma of color. Trainings have
          garnered positive response from counsel and client; impacting how
          victims of color are perceived and thus represented within the legal
          system. The success and national recognition of the project is
          directly tied to its committed effort to provide victims and survivors
          of Boston’s inner city communities of color with a coordinated
          community response that addresses the individualized needs of victims
          and survivors through a spectrum of quality services, specialized
          training, and support throughout its network of partners, supporters
          and community leaders.
        </p>
        <p>
          <strong>CONFIDENTIAL SERVICES OFFERED.</strong>
        </p>
      </section>
    );
  }
}

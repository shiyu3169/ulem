import React, { Component } from "react";

export default class Programs extends Component {
  render() {
    return (
      <section id="program">
        <h1 className="font-red mt-4 mb-4">
          Workforce Development Training Programs
        </h1>
        <h4>MSIMBO: ULEM Coding Bootcamp</h4>
        <p>
          Msimbo means “code” in Swahili. A twenty (20) week program for
          displaced, unemployed and underemployed workers interested becoming
          computer programmers. This programs seeks to address the IT
          industries’ issue of diversity and skilled workers. ULEM looks to
          enroll 18 students and provide a stipend for $100/ week.
        </p>
        <p>
          MSIMBO bootcamp trains talented, low-income individuals to become
          full-stack web developers and launch a new career. Students are
          trained in web development, effective business communication, and
          leadership. We will conduct a 20 weeks of 120 hours coding technology
          training program and the professional development for ULEM’s MSIMBO
          program.
        </p>
        <p>The targeted population must: </p>
        <ul className="pl-2">
          <li className="inline mr-2">
            <i className="fas fa-check font-red" />
            Be at least 18 years of age
          </li>
          <li className="inline mr-2">
            <i className="fas fa-check font-red" />
            Have a high school diploma or GED
          </li>
          <li className="inline">
            <i className="fas fa-check font-red" />
            Be committed to completing the program
          </li>
        </ul>
        <p>
          MSIMBO: ULEM Coding Bootcamp will offer during the 20 weeks,
          participants are trained in:
        </p>
        <ul className="list-no-style">
          <li>
            <i className="fas fa-book mr-2 font-red" />
            Web Development - Learning to make Web Applications (HTML, CSS,
            JavaScript, MEAN Stack)
          </li>
          <li>
            <i className="fas fa-book mr-2 font-red" />
            Financial Literacy – Our Dollars & Sense Training
          </li>
          <li>
            <i className="fas fa-book mr-2 font-red" />
            National Career Readiness testing and certification
          </li>
          <li>
            <i className="fas fa-book mr-2 font-red" />
            Resume, Cover Letter & Linkedin Profile Building
          </li>
        </ul>
        <p>
          Those who successfully complete the program will be eligible for
          recommendation for employment, internships or apprenticeships with
          various Tech companies in the area. Throughout the program case
          management and job placement services are available. Those who are not
          placed receive job placement assistance from ULEM. Stipend based
          program.<strong>SECTION 30 APPROVED.</strong>
        </p>
        <p>
          For more information visit:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://msimbo.herokuapp.com"
          >
            http://www.msimbo.com
          </a>
        </p>
        <hr />
        <h4>DiGiUL Program</h4>
        <p>
          The DiGiUL program is at full time Monday through Friday 10am – 4pm
          classroom setting program. That teaches you all the fundamentals of
          graphic design, branding, marketing – both from the print and
          interactive perspective. At the end of the 16 week program you will
          have the knowledge to land a job in the field working as a design
          professional, you will have a professional level portfolio – both
          print and online that will have been vetted by working professionals
          in the field and you will have had some working experience in said
          field. Those who successfully complete program will be eligible for
          recommendation for employment, internships or apprenticeships with
          various ad agencies and marketing companies in the area. Throughout
          the program case management and job placement services are available.
          Those who are not placed receive job placement assistance from ULEM.
          Stipend based program. <strong>SECTION 30 APPROVED.</strong>
        </p>
        <hr />
        <h3>Computer Literacy and Internet Knowledge Program</h3>
        <p>
          Powered by the Timothy Smith Network, Computer Literacy and Internet
          Knowledge program (CLIK) is a computer literacy training program for
          individuals who lack basic computer skills critical for job search and
          employment success. During this 5-week course, CLIK teaches Computing
          Fundamentals, Key Applications, and Living Online. The Computing
          Fundamentals covers a foundational understanding of computer hardware,
          software, operating systems, peripherals, and troubleshooting to help
          you get the most value and impact from computer technology. Students
          that complete the CLIK program are eligible to receive a Google
          Chromebook.
        </p>
        <hr />
        {/* <h3>Mature Worker Skills Program (MWSP)</h3>
        <p>
          In partnership with the Brigham & Women Hospital, the MWSP program is
          for individuals 45 or older who are unemployed and seeking a way to
          utilize their skills and re-enter the job market. Trainees receive
          extensive hands on training at the Urban League and community partners
          to become a Certified Nursing Assistant (CNA), Personal Care Assistant
          (PCA), or Home Health Aide. Learn about healthy living and a stress
          free life. Enroll Today!
        </p>
        <hr /> */}
        <h3>Customer Service Sales Training (CSST)</h3>
        <p>
          This training prepares participants for work through classroom
          learning and meaningful service activities. Student prepare for the
          Rise Up ®, Customer Service and Sales Certification through the
          National Retailer Federation. It is designed for people who are
          currently unemployed, have limited work experience, and want to be job
          ready. The CSST program gives graduates the work experience they need
          to build their resumes and promote their skills effectively. This is a
          stipend eligible program. Enroll Today!
        </p>
      </section>
    );
  }
}

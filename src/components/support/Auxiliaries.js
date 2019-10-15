import React, { Component } from "react";

export default class Auxiliaries extends Component {
  render() {
    return (
      <div>
        <section className="container">
          <h1 className="font-red mt-4">Auxiliaries</h1>
          <p>
            There are many significant ways that one can get involved and make
            an impact at ULEM. Several of those opportunities are available
            through both of our auxiliaries – ULEM Guild and YPN-ULEM.
          </p>
        </section>
        <section className="container">
          <h4>Urban League of Eastern Massachusetts Guild (ULEM Guild)</h4>
          <p>
            The ULEM Guild is an auxiliary organization of ULEM. Its primary
            purpose is to further ULEM’s mission of serving as a champion of
            civil rights dedicated to helping people improve their lives and to
            build stronger communities by providing local residents with
            education, job training, and placement at no cost.
          </p>
          <p>
            Guild members serve ULEM through fundraising, volunteering, and
            raising awareness about the agency’s programs and services. The ULEM
            Guild operates under the auspices of both the Urban League of
            Eastern Massachusetts and the National Council of Urban League
            Guilds. For more information, send an email to{" "}
            <a href="mailto:guildpresident@ulem.org">guildpresident@ulem.org</a>
            .
          </p>
        </section>
        <div className="fixed-ypn my-5" />
        <section className="container">
          <h4>
            Young Professionals Network of the Urban League of Eastern
            Massachusetts (YPN-ULEM)
          </h4>
          <p>
            YPN-ULEM is an auxiliary of the Urban League of Eastern
            Massachusetts and a chapter of the National Urban League Young
            Professionals. This chapter is one of over fifty nationwide that
            supports the Urban League Movement through volunteerism,
            philanthropy, and membership development.
          </p>
          <p>
            YPN-ULEM’s purpose is to support the objectives of the National
            Urban League, Urban League of Eastern Massachusetts, and National
            Urban League Young Professionals; and to promote the development of
            young professionals in the Greater Boston and Eastern MA areas.
          </p>
          <p>
            Operating as one of the premier young professionals organization in
            Massachusetts, YPN-ULEM offers professional development, networking,
            and volunteer opportunities. Members of YPN-ULEM develop their
            leadership abilities, improve their marketability, and build their
            networks, while giving back to the Greater Boston Community. Since
            its inception, YPN-ULEM has hosted several professional and social
            programs ranging from the Homelessness and Hunger Awareness
            Initiative and Public Health Seminars to Political Forums and
            Financial Literacy Education. All of our professional and service
            programs are open to all people. For more information, visit{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.ypnulem.org"
            >
              www.ypnulem.org
            </a>
            .
          </p>
        </section>
      </div>
    );
  }
}

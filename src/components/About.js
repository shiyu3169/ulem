import React, { Component } from "react";
import Navbar from "./layout/Navbar";

export default class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-2">
            <div className="sticky-side">
              <h4>About</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item  list-group-item-action">
                  <a href="#mission" className="nav-link-red">
                    Missions & Overview
                  </a>
                </li>
                <li className="list-group-item  list-group-item-action">
                  <a href="#milestone" className="nav-link-red">
                    Our Milestones
                  </a>
                </li>
                <li className="list-group-item  list-group-item-action">
                  <a href="#leadership" className="nav-link-red">
                    Leadership
                  </a>
                </li>
                <li className="list-group-item  list-group-item-action">
                  <a href="#board" className="nav-link-red">
                    Board of Directors
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <main className="col-md-10">
            <section id="mission">
              <h1 className="font-red mt-4">Missions & Overview</h1>
              <p>
                Founded in 1917 and affiliated in 1919, the Urban League of
                Eastern Massachusetts (ULEM) is a 501c3 nonprofit organization
                and one of the oldest affiliates within the National Urban
                League (can “National Urban League” be a link to their webpage:
                http://nul.iamempowered.com/) movement. From the time that our
                doors opened to the at-large Boston community and surrounding
                metropolitan area residents, ULEM has been employing a
                multi-point strategy to deliver services and programs which aim
                to increase self-reliance, specifically in the area of workforce
                development.
              </p>
              <p>
                The mission of the Urban League of Eastern Massachusetts is to
                be a champion of civil rights dedicated to helping people
                improve their lives and to build stronger communities by
                providing local residents with education, job training, and
                placement at no cost. For nearly 100 years, ULEM’s programs and
                services have given hope to our program participants and made a
                lasting, positive impact in the community.
              </p>
              <p>
                Focusing on this overarching goal leads us to provide
                opportunities for every person that walks through our door to
                realize economic empowerment through basic- and mid-level skills
                trainings, certifications, internships, and job placements.
              </p>
              <p>
                Offering programs and services at no cost to every participant,
                we facilitate an array of skills-training workshops which cover
                a variety of job skills and expertise; serve a wide age range;
                and engage both non-profit organizations and corporate partners.
                Currently, ULEM programs and services include 3 job
                placement-based programs and 5 skills development programs. All
                program participants receive case management services, inclusive
                of domestic/sexual violence victim assistance, and placement
                assistance. ULEM also operates an Employment Resource Center,
                which is available to anyone who is in need of computer access
                for the purposes of attaining employment.
              </p>
              <p>
                The programs and services offered are supported by two annual
                projects: (1) Jobs Rebuild Boston Community Conference and
                Career Fair and (2) the State of Black Boston report. Additional
                to the aforementioned programs, the Urban League of Eastern
                Massachusetts offers two auxiliary groups: the Urban League of
                Eastern MA Guild and the Young Professionals Network of the
                Urban League of Eastern MA (can “Young Professionals Network of
                the Urban League of Eastern MA” point to their website:
                www.ypnulem.org). Both groups have open membership, facilitate
                events and workshops and serve the community in alignment with
                ULEM’s mission and strategic goals.
              </p>
              <p>
                Holistically, through the 3 channels, the ULEM – along with its
                auxiliaries: the ULEM Guild and YPN-ULEM – serves thousands of
                people annually.
              </p>
            </section>
            <section id="milestone">
              <h1 className="font-red">Our Milestones</h1>
              <ul class="timeline">
                <li>
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-check" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">2016</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Darnell Williams celebrates 15 years of serving as
                        President and CEO and is recognized as the longest
                        sitting President and CEO of Urban League of Eastern
                        Massachusetts.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge danger danger">
                    <i class="glyphicon glyphicon-credit-card" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">2013</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        President Darnell Williams is propelled into the
                        National Urban League as a member of the National Board
                        of Trustees and leading CEO of Urban League Executives
                        from around the country.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-credit-card" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">2012</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Urban League of Eastern Massachusetts hosts it second
                        State of Black Boston Forum “Ending Health Inequalities
                        for Families in Boston”, Oct. 1, 2012 at The Dimock
                        Center.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge danger danger">
                    <i class="glyphicon glyphicon-credit-card" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">2011</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Urban League of Eastern Massachusetts, under the
                        leadership of Darnell Williams, hosted the National
                        Urban League Conference in Boston, MA, after a 35-year
                        absence. State of Black Boston was also launched.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-floppy-disk" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">2001</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Urban League of Eastern Massachusetts welcomes Darnell
                        Williams as its 20th President and CEO.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-thumbs-up" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1992</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        To avoid the rioting and carnage developing within major
                        cities in response to the Los Angeles Police beating of
                        Rodney King, the Urban League of Eastern Massachusetts
                        strategically listed demands giving the community “a
                        voice.” The Urban League of Eastern Massachusetts helped
                        Boston through one of the most challenging episodes in
                        American history.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-floppy-disk" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1980-1990</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Boston Urban League expands its Youth Program as
                        African-American life expectancy declined for the first
                        time in U.S. history with homicide becoming the leading
                        cause of death with African-American males 15-24yrs of
                        age; emphasis on young people included mentoring, case
                        management, individual counseling and job training.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-thumbs-up" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1967</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Under the leadership of Mel King, who also became
                        Boston’s first Black mayoral candidate, the Urban League
                        continued the spirit of change with a more activist
                        stance within the community influencing grassroots
                        organizers to help tenants fight for urban renewal;
                        supported a new generation of African-American political
                        candidates; and, worked with parents to desegregate
                        Boston schools.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-floppy-disk" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1963</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Whitney Young addresses 250,000 protestors at the March
                        on Washington for Jobs and Freedom at the Lincoln
                        Memorial, August 28, 1963.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-thumbs-up" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1960</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Under Whitney Young’s leadership, the National Urban
                        League decides to take a more aggressive stance with the
                        birth of the Civil Rights Movement, holding meetings
                        with A. Phillip Randolph and Martin Luther King Jr. in
                        the planning of the March on Washington for Jobs and
                        Freedom.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-floppy-disk" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1945 </h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Cynthia Belgrave, as a result of the Boston Urban League
                        scoring significant breakthroughs for African-American
                        women, became the first African-American clerk to work
                        downtown in a major department store.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-thumbs-up" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1942</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        The Boston Urban League and the NAACP place the first
                        African-American worker in the munition plant, Raytheon
                        in Newton, a result of the efforts of A. Phillip
                        Randolph, President Roosevelt signed an executive order
                        banning discrimination in munition plants.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-floppy-disk" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1929 </h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        George Goodman, President of the Boston Urban League,
                        lobbies with the Works Progress Administration (WPA) and
                        National Youth Administration to place workers in jobs
                        as a result of protests regarding unemployment rates
                        during the Depression rising from 15 to 18% in the South
                        End and Roxbury.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-thumbs-up" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1927</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        The Boston Urban League negotiates 1,157 more jobs for
                        Bostonians in need of work.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-floppy-disk" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1926 </h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        The Boston Urban League lobbied on behalf of Bostonians
                        in need of work, negotiating 800 jobs.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-thumbs-up" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1920</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Matthew Washington Bullock becomes the first Director of
                        the Boston Urban League during a time of political
                        backlash and violence against African-Americans; a
                        Massachusetts State Representative.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-floppy-disk" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1919 </h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        The Boston Urban League becomes an affiliate of the
                        National Urban League.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-thumbs-up" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1917 </h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        The establishment of the Boston Urban League by founder
                        Eugene Kinckle Jones, an organizer for the National
                        Urban League, focusing on finding housing, jobs and
                        healthcare. Local activist Butler Wilson and a group of
                        concerned citizens aided Jones in the progression of the
                        Boston Urban League. Mr. Wilson also help found the Bost
                        on branch of the NAACP, a civil rights organization
                        formed, triggered by the Supreme Court decision Plessy
                        vs. Ferguson, to end racial discrimination.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge danger">
                    <i class="glyphicon glyphicon-floppy-disk" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">1910 </h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        The National Urban League is established in New York
                        City as a result of the First Great Migration of
                        African-Americans from the segregated South to the
                        industries of the North for better opportunities.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

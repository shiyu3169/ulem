import React from "react";
import smallBusiness from "../../img/SmallBusiness-min.jpeg";
import government from "../../img/government.png";
import bosRecources from "../../img/BosResources-min.jpeg";

const Resources = () => {
  return (
    <div>
      <h1 className="section-title" name="resources">
        RESOURCES
      </h1>
      <h1>Unemployment Assistance</h1>
      <h2>Unemployment Insurance</h2>
      <p>
        The Executive Office of Labor and Workforce Development (EOLWD) and the
        Department of Unemployment Assistance (DUA), in coordination with the US
        Department of Labor (USDOL), are taking a series of actions to assist
        workers and employers.
      </p>
      <p>For current unemployment claims:</p>
      <ul>
        <li>
          All requirements regarding attending seminars at the MassHire career
          centers have been suspended.
        </li>
        <li>
          Missing deadlines due to effects of COVID-19 will be excused under
          DUA’s good cause provision.
        </li>
        <li>All appeal hearings will be held by telephone only.</li>
      </ul>
      <p>
        The Department of Labor issued guidance to the states instructing state
        agencies to apply existing law flexibly. Under the DOL guidance, DUA may
        now pay unemployment benefits if a worker is quarantined due to an order
        by a civil authority or medical professional or leaves employment due to
        reasonable risk of exposure or infection or to care for a family member
        and does not intend to or is not allowed to return to work. The worker
        need not provide medical documentation and need only be available for
        work when and as able.
      </p>
      <p>
        To assist individuals who cannot work due to the impact of COVID-19, the
        administration is filing emergency legislation that will allow new
        claims to be paid more quickly by waiving the one week waiting period
        for unemployment benefits.
      </p>
      <p>
        EOLWD and DUA are also filing emergency regulations that will allow
        people impacted by COVID-19 to collect unemployment if their workplace
        is shut down and expects to reopen in four or fewer weeks. The following
        conditions apply:
      </p>
      <ul>
        <li>
          Workers must remain in contact with their employer during the
          shutdown.
        </li>
        <li>
          Workers must be available for any work their employer may have for
          them that they are able to do.
        </li>
        <li>
          An employer may request to extend the period of the covered shut-down
          to eight weeks, and workers will remain eligible for the longer period
          under the same conditions described above.
        </li>
        <li>
          If necessary, DUA may extend these time periods for workers and
          employers.
        </li>
      </ul>
      <p>
        For update information visit{" "}
        <a href="https://www.mass.gov/orgs/department-of-unemployment-assistance">
          {" "}
          Department of Unemployment Insurance.
        </a>
      </p>
      <div
        style={{ backgroundImage: `url(${smallBusiness})` }}
        className="small-business"
      >
        {/* <img class="img-fluid" src={smallBusiness} alt="small business" /> */}
      </div>
      <h1>Small Business Resources</h1>
      <h2>Paycheck Protection Program</h2>
      <p>
        The Paycheck Protection Program is a loan designed to provide a direct
        incentive for small businesses to keep their workers on the payroll. SBA
        will forgive loans if all employees are kept on the payroll for eight
        weeks and the money is used for payroll, rent, mortgage interest, or
        utilities. You can apply through any existing SBA 7(a) lender or through
        any federally insured depository institution, federally insured credit
        union, and Farm Credit System institution that is participating. Other
        regulated lenders will be available to make these loans once they are
        approved and enrolled in the program. You should consult with your local
        lender as to whether it is participating in the program. Lenders may
        begin processing loan applications as soon as April 3, 2020. The
        Paycheck Protection Program will be available through June 30, 2020.
        <a href="https://www.sba.gov/funding-programs/loans/coronavirus-relief-options/paycheck-protection-program-ppp">
          Learn more here.
        </a>
      </p>
      <h2>Express Bridge Loan Program</h2>
      <p>
        This program allows small businesses who currently have a business
        relationship with an SBA Express Lender to access up to $25,000 quickly.
        These loans can provide vital economic support to small businesses to
        help overcome the temporary loss of revenue they are experiencing and
        can be a term loan or used to bridge the gap while applying for a direct
        SBA Economic Injury Disaster loan. If a small business has an urgent
        need for cash while waiting for decision and disbursement on an Economic
        Injury Disaster Loan, they may qualify for an SBA Express Disaster
        Bridge Loan.{" "}
        <a href="https://www.sba.gov/funding-programs/loans/coronavirus-relief-options/sba-express-bridge-loans%E2%80%8B">
          Learn more here.​
        </a>
      </p>
      <h2>Economic Injury Disaster Loan Program</h2>
      <p>
        The SBA will work directly with state Governors to provide targeted,
        low-interest loans to small businesses and non-profits that have been
        severely impacted by the Coronavirus (COVID-19). The SBA’s Economic
        Injury Disaster Loan program provides small businesses with working
        capital loans of up to $2 million that can provide vital economic
        support to small businesses to help overcome the temporary loss of
        revenue they are experiencing.{" "}
        <a href="https://www.sba.gov/disaster-assistance/coronavirus-covid-19">
          Learn more here.
        </a>
      </p>
      <h2>Lawyers for Civil Rights (LCR)</h2>
      <p>
        LCR has a team of legal first responders committed to helping small
        businesses and individuals navigate the COVID-19 crisis. They continue
        to host free webinars to provide legal support for business owners and
        have announced an effort to help individuals understand and apply for
        <a href="http://lawyersforcivilrights.org/our-impact/economic-justice/launching-unemployment-assistance-initiative/?mc_cid=da0bfe412f&mc_eid=0e289ef5ef">
          unemployment
        </a>
        . To learn more about their efforts,{" "}
        <a href="http://lawyersforcivilrights.org/coronavirus/">click here</a>.
      </p>
      <div>
        <img src={government} alt="" />
      </div>
      <p className="mb-0">
        SBA is focused on assisting with the continuity of operations for small
        business contracting programs and small businesses with federal
        contracts. See SBA's{" "}
        <a href="https://lnks.gd/l/eyJhbGciOiJIUzI1NiJ9.eyJidWxsZXRpbl9saW5rX2lkIjoxMDAsInVyaSI6ImJwMjpjbGljayIsImJ1bGxldGluX2lkIjoiMjAyMDA0MjguMjA3NzIyNDEiLCJ1cmwiOiJodHRwczovL3d3dy5zYmEuZ292L2RvY3VtZW50L3N1cHBvcnQtLWZlZGVyYWwtY29udHJhY3RpbmctZ3VpZGFuY2Utc21hbGwtYnVzaW5lc3Nlcy1pbXBhY3RlZC1jb3JvbmF2aXJ1cy1jb3ZpZDE5P3V0bV9tZWRpdW09ZW1haWwmdXRtX3NvdXJjZT1nb3ZkZWxpdmVyeSJ9.wpCt2EikFfbU_-0mKXbhY9vlpHNVm55paUQxu93tfj8/br/77971162643-l">
          Federal Contracting Guidance for Small Businesses Impacted by
          COVID-19.
        </a>
        For more information on federal contracting,
      </p>
      <p>
        visit:{" "}
        <a href="https://lnks.gd/l/eyJhbGciOiJIUzI1NiJ9.eyJidWxsZXRpbl9saW5rX2lkIjoxMDEsInVyaSI6ImJwMjpjbGljayIsImJ1bGxldGluX2lkIjoiMjAyMDA0MjguMjA3NzIyNDEiLCJ1cmwiOiJodHRwczovL3d3dy5zYmEuZ292L2ZlZGVyYWwtY29udHJhY3RpbmcvY29udHJhY3RpbmctZ3VpZGU_dXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPWdvdmRlbGl2ZXJ5In0.tfXlOBPXc0vQObLdpokm5wI-FBzmU5GoeKCfKbz2JsE/br/77971162643-l">
          https://www.sba.gov/federal-contracting/contracting-guide
        </a>
      </p>
      <p>More specifically:</p>
      <ul>
        <li>
          <a href="https://lnks.gd/l/eyJhbGciOiJIUzI1NiJ9.eyJidWxsZXRpbl9saW5rX2lkIjoxMDIsInVyaSI6ImJwMjpjbGljayIsImJ1bGxldGluX2lkIjoiMjAyMDA0MjguMjA3NzIyNDEiLCJ1cmwiOiJodHRwczovL3d3dy5zYmEuZ292L2ZlZGVyYWwtY29udHJhY3RpbmcvY29udHJhY3RpbmctYXNzaXN0YW5jZS1wcm9ncmFtcy84YS1idXNpbmVzcy1kZXZlbG9wbWVudC1wcm9ncmFtP3V0bV9tZWRpdW09ZW1haWwmdXRtX3NvdXJjZT1nb3ZkZWxpdmVyeSJ9.T2t3VU_8x4FYzZNensqG4AwqxpolPkZgBW-HDCU5qIM/br/77971162643-l">
            8(a) Business Development
          </a>{" "}
          program serves to help provide a level playing field for small
          businesses owned by socially and economically disadvantaged people or
          entities, and the government limits competition for certain contracts
          to businesses that participate. The 8(a) program offer and acceptance
          process is available nationwide, and the SBA continues to work with
          federal agencies to ensure maximum practicable opportunity to small
          businesses. 8(a) program participants should stay in touch with their
          Business Opportunity Specialist (BOS).
        </li>
        <li>
          <a href="https://lnks.gd/l/eyJhbGciOiJIUzI1NiJ9.eyJidWxsZXRpbl9saW5rX2lkIjoxMDMsInVyaSI6ImJwMjpjbGljayIsImJ1bGxldGluX2lkIjoiMjAyMDA0MjguMjA3NzIyNDEiLCJ1cmwiOiJodHRwczovL3d3dy5zYmEuZ292L2ZlZGVyYWwtY29udHJhY3RpbmcvY29udHJhY3RpbmctYXNzaXN0YW5jZS1wcm9ncmFtcy9odWJ6b25lLXByb2dyYW0_dXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPWdvdmRlbGl2ZXJ5In0.bO-2-779zQeLZSgkRzfjIRDTzPBqgVwvpoVYQ2VUA1M/br/77971162643-l">
            HUBZone
          </a>{" "}
          program offers eligibility assistance every Thursday from 2:00-3:00
          p.m. ET at 1-202-765-1264; access code 63068189#. Members of the
          HUBZone team answer questions to help firms navigate the certification
          process. For specific questions regarding an application, please
          contact the HUBZone Help Desk at{" "}
          <a href="mailto:hubzone@sba.gov">hubzone@sba.gov.</a>
        </li>
      </ul>
      <p>
        If a situation occurs that will prevent small businesses with government
        contracts from successfully performing their contract, they should reach
        out to their contracting officer and seek to obtain extensions before
        they receive cure notices or threats of termination. The SBA’s
        Procurement Center Representatives can assist affected small businesses
        to engage with their contracting officer. Use the{" "}
        <a href="https://lnks.gd/l/eyJhbGciOiJIUzI1NiJ9.eyJidWxsZXRpbl9saW5rX2lkIjoxMDYsInVyaSI6ImJwMjpjbGljayIsImJ1bGxldGluX2lkIjoiMjAyMDA0MjguMjA3NzIyNDEiLCJ1cmwiOiJodHRwczovL3d3dy5zYmEuZ292L2ZlZGVyYWwtY29udHJhY3RpbmcvY291bnNlbGluZy1oZWxwL3Byb2N1cmVtZW50LWNlbnRlci1yZXByZXNlbnRhdGl2ZS1kaXJlY3Rvcnk_dXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPWdvdmRlbGl2ZXJ5In0.5y7qgKPkTB55ToYUvUWfOtInPYsRS7xHJYAyMX9vM2w/br/77971162643-l">
          Procurement Center Representative Directory
        </a>{" "}
        to connect with the representative nearest you.
      </p>
      <p>SBA Massachusetts Government Contracting Team</p>
      <p className="mb-0">Nadine Boone</p>
      <p className="my-0">Assistant District Director| Business Development</p>
      <p className="my-0">Office: (617) 565-8514</p>
      <p className="my-0">Cell: (617) 378-2481</p>
      <p className="mt-0">nadine.boone@sba.gov</p>
      <p className="mb-0">Susan Lourie</p>
      <p className="my-0">Business Opportunity Specialist</p>
      <p className="my-0">Office:(617) 565-5560</p>
      <p className="my-0">Cell:(857) 292-2598</p>
      <p className="mt-0">susan.lourie@sba.gov</p>
      <div
        className="small-business"
        style={{ backgroundImage: `url(${bosRecources})` }}
      >
        {/* <img src={bosRecources} alt="" className="img-fluid" /> */}
      </div>
      <h1>COVID-19 Massachusetts & City of Boston Resources</h1>
      <p>
        ULEM believes it is important to stay informed about COVID-19. The State
        of Massachusetts and City of Boston have recently made the following
        announcements:
      </p>
      <h2>Massachusetts </h2>
      <p>
        Need Work? Nursing Homes and Assisted Living facilities need help.
        Mass.gov/covid-otnw
      </p>
      <p>
        Gov. Baker announced distribution of 200,000 masks to first responders
        in MA <a href="http://ma.gov/covid-msks">ma.gov/covid-msks</a>
      </p>
      <p>
        MA extends closure of K-12 schools through the end of school year,
        non-emergency childcare programs through 6/29.{" "}
        <a href="http://mass.gov/covid-ddju">mass.gov/covid-ddju</a>
      </p>
      <p className="mb-0">
        Gov. Baker extends non-essential business closure until 5/18
      </p>
      <p className="my-0">
        MA requires residents to wear masks or face coverings in public places
        like grocery stores and pharmacies.{" "}
      </p>
      <p>
        More at:{" "}
        <a href="http://mass.gov/coveryourface">mass.gov/coveryourface</a>
      </p>
      <h2>Boston </h2>
      <p>
        All public and private schools in Mass will be closed for the remainder
        of the school year{" "}
        <a href="http://bostonpublicschools.org/coronavirus">
          bostonpublicschools.org/coronavirus
        </a>
      </p>
      <p>
        The city of Boston has created a map with COVID-19 testing sites,
        including community health centers and hospitals. Residents are to call
        ahead to pre-screen and set appointment. Visit: Boston.gov/coronavirus
      </p>
      <p>
        City is letting restaurants sell grocery items. To get started visit
        <a href="http://boston.gov/coronavirus"> boston.gov/coronavirus</a>
      </p>
    </div>
  );
};

export default Resources;

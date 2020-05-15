import React from "react";
import meeting from "../../img/Meeting_Boardroom-Leaderboard.png";
import BoardGroup from "../../components/BoardGroup/BoardGroup.component";

const Board = () => {
  const groups = [
    {
      groupName: "Executive Committee",
      groupMembers: [
        {
          name: "Joseph D. Feaster Jr.",
          title: "Chairman, President, Feaster Enterprises",
        },
        {
          name: "Derek E. Brooks",
          title: "Entrepreneur & Business Professional",
        },
        {
          name: "Petrina Cherry",
          title: "Vice President, BMC Healthnet Plan/Well Sense Health Plan",
        },
        {
          name: "Malik A. Smith",
          title:
            "First Vice President, Private Wealth Advisor, Commons Capital Advisors",
        },
        {
          name: "Mark Walker",
          title: "Sr. VP, Credit Product Manager, Citizens Bank",
        },
      ],
    },
    {
      groupName: "Members of the Board",
      groupMembers: [
        {
          name: "Donnie Bedney III",
          title: "Vice President, Chief of Staff, Press Ganey",
        },
        {
          name: "Johnny Green",
          title: "VP & News Director, CBS Corporation",
        },
        {
          name: "Marian A. Green-Robinson",
          title:
            "Vice President ~ Branch Manager Stoughton Office, Eastern Bank",
        },
        {
          name: "Dorothea Jones",
          title: "Guild Secretary, National Urban League",
        },
        {
          name: "Ron Mayorga",
          title: "President - Northeast District, UPS",
        },
        {
          name: "Deloris Pettis",
          title: "Director of Internal Audit, Boston College",
        },
        {
          name: "Joshua Schanck",
          title: "District Manager - Boston MA, Starbucks",
        },
        {
          name: "Rachelle Villarson",
          title:
            "Assistant Director of Personnel, Suffolk County Sheriff's Department",
        },
      ],
    },
    {
      groupName: "Affiliate Members",
      groupMembers: [
        {
          name: "L. Kim Amisial",
          title: "President of The GUILD, The Urban League of Eastern MA",
        },
        {
          name: "Kristen Halbert",
          title: "President of YPN, The Urban League of Eastern MA",
        },
      ],
    },
    {
      groupName: "Board Chairs Emeritus",
      groupMembers: [
        {
          name: "Samuel J. Gerson",
          title: "Chairman and Chief Execytive, Filene's Basement (Deceased)",
        },
        {
          name: "Hon. Joyce London Alexander",
          title:
            "Chief U.S. Magistrate Judge, United States District Courthouse",
        },
        {
          name: "Andrea Kershaw",
          title: "Regional Vice President, Enterprise Holdings",
        },
        {
          name: "Andrea Kershaw",
          title: "Regional Vice President, Enterprise Rent-A Car",
        },
        {
          name: "Quincy L. Miller",
          title: "President, Eastern Bank",
        },
        {
          name: "Jeffrey Musman",
          title: "Managing Partner, Seyfarth Shaw",
        },
        {
          name: "George A. Russell",
          title: "Executive Vice President, State Street Corporaton",
        },
        {
          name: "Richard Taylor",
          title: "Proprietor, Taylor Smith Properties",
        },
      ],
    },
    {
      groupName: "Board Emeritus",
      groupMembers: [
        {
          name: "Greg Almeida",
          title: "President, Globalview Communications",
        },
        {
          name: "Gary Carroway",
          title: "Director of Business Development, UPS",
        },
        {
          name: "Brenda Cole",
          title:
            "VP Marketplace Inclusion Development, Havard Pilgrim Health Care",
        },
        {
          name: "Bill Fenton",
          title: "Senior Vice President, Bank of America",
        },
        {
          name: "Jacqueline Gadsden",
          title:
            "Vice President Diversity & Inclusion & Customer Experience, Comcast - Greater Boston Area",
        },
        {
          name: "Vince Loporchio",
          title:
            "Senior Vice President Corporate Communications, Fidelity Investments",
        },
      ],
    },
    {
      groupName: "Advisory Council",
      groupMembers: [
        {
          name: "Scott Baker",
          title: "President, SkyCom Courier",
        },
        {
          name: "Larry Dunham",
          title:
            "Director of Diversity and Multicultural Affairs, Boston University/Dental School",
        },
        {
          name: "Sam Kennedy",
          title: "President, Boston Red Sox Foundation",
        },
        {
          name: "Lisa Timberlake",
          title: "Media Relations, City of Boston",
        },
        {
          name: "David Gibbons",
          title:
            "Executive Director, Massachusetts Convention Center Authority (MCCA) ",
        },
      ],
    },
  ];

  return (
    <div>
      <img src={meeting} alt="meeting" className="full-width" />
      <div className="container">
        <h1 className="ulem-text-primary mt-4">
          <strong>Board of Directors</strong>
        </h1>
        {groups.map((group) => (
          <BoardGroup group={group} />
        ))}
      </div>
    </div>
  );
};

export default Board;

import React from 'react';
import meeting from '../../img/Meeting_Boardroom-Leaderboard.png';
import BoardGroup from '../../components/BoardGroup/BoardGroup.component';

const Board = () => {
  const groups = [
    {
      groupName: 'Executive Committee',
      groupMembers: [
        {
          name: 'Joseph D. Feaster, Jr. Esq.',
          title: 'Chairman; President, Feaster Enterprises'
        },
        {
          name: 'Mark Walker',
          title: 'Vice Chair; Sr. VP, Credit Product Manager, Citizens Bank'
        },
        {
          name: 'Malik A. Smith',
          title: 'Treasurer, First Vice President, Commons Capital Advisors'
        },
        {
          name: 'Derek Brooks',
          title: 'Secretary; Entrepreneur and Business Professional'
        },
        {
          name: 'Petrina Martin Cherry',
          title:
            'Development Chair; Vice President, BMC Healthnet Plan/Well Sense Health Plan'
        }
      ]
    },
    {
      groupName: 'Members of the Board',
      groupMembers: [
        {
          name: 'Donnie Bedney',
          title: 'Regional Director, Press Ganey'
        },
        {
          name: 'Marian Green-Robinson',
          title: 'Vice President, Eastern Bank'
        },
        {
          name: 'Johnny Green',
          title: 'News Director, CBS-TV4'
        },
        {
          name: 'Dorothea Jones',
          title: 'Secretary, National Council of Urban League Guilds'
        },
        {
          name: 'Deloris Pettis',
          title: 'Risk & Audit Consultant, Pettis Consulting'
        },
        {
          name: 'Rachelle Villarson',
          title:
            'Strategic Planning Chair; Human Resources, Suffolk County Sherriff’s Office'
        }
      ]
    },
    {
      groupName: 'Affiliate Members',
      groupMembers: [
        {
          name: 'L. Kim Amisial',
          title: 'President, Urban League Guild'
        },
        {
          name: 'Kristen Halbert',
          title: 'President, Young Professionals Network'
        }
      ]
    },
    {
      groupName: 'Board Chairs Emeritus',
      groupMembers: [
        {
          name: 'Hon. Joyce London Alexander',
          title: 'Chief Magistrate Judge, US District Court'
        },
        {
          name: 'Samuel J. Gerson',
          title: 'Chairman and Chief Executive, Filene’s Basement (deceased)'
        },
        {
          name: 'Andrea Kershaw',
          title: 'Regional Vice President, Enterprise Holdings'
        },
        {
          name: 'Quincy Miller',
          title: 'President, Eastern Bank'
        },
        {
          name: 'Jeff Musman, Esq.',
          title: 'Managing Partner, Seyfarth Shaw'
        },
        {
          name: 'George A. Russell, Jr.',
          title: 'Executive Vice President, State Street Corporation (retired)'
        },
        {
          name: 'Richard Taylor',
          title: 'Chairman, Taylor Smith Group'
        }
      ]
    },
    {
      groupName: 'Board Emeritus',
      groupMembers: [
        {
          name: 'Greg Almeida',
          title: 'Chief Executive Officer & Founder, Global View Communications'
        },
        {
          name: 'Gary Carroway',
          title: 'Director of Business Development, UPS'
        },
        {
          name: 'Brenda Cole',
          title:
            'Vice President of Marketplace Inclusion Development, Harvard Pilgrim Health Care (retired)'
        },
        {
          name: 'Bill Fenton',
          title: 'Senior Vice President, Bank of America Corp'
        },
        {
          name: 'Jacqueline Gadsden',
          title:
            'Vice President Diversity & Inclusion & Customer Experience, Comcast'
        },
        {
          name: 'Vince Loporchio',
          title:
            'Senior Vice President Corporate Communications, Fidelity Investments'
        }
      ]
    }
  ];

  return (
    <div>
      <img src={meeting} alt='meeting' className='full-width' />
      <div className='container'>
        <h1 className='ulem-text-primary mt-4'>
          <strong>Board of Directors</strong>
        </h1>
        {groups.map(group => (
          <BoardGroup group={group} />
        ))}
      </div>
    </div>
  );
};

export default Board;

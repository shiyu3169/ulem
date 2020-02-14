import React from 'react';
import BoardMember from '../BoardMember/BoardMember.component';

const BoardGroup = ({ group }) => {
  const { groupName, groupMembers } = group;
  return (
    <section className='my-5'>
      <p>
        <strong className='ulem-text-primary'>{groupName}:</strong>
      </p>
      {groupMembers.map(member => (
        <BoardMember member={member} />
      ))}
    </section>
  );
};

export default BoardGroup;

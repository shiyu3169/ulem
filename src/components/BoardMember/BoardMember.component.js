import React from 'react';

const BoardMember = ({ member }) => {
  const { name, title } = member;
  return (
    <p>
      <strong>{name}</strong>
      {title}
    </p>
  );
};

export default BoardMember;

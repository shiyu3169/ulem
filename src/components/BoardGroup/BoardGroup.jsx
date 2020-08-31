import React from "react"
import BoardMember from "../BoardMember/BoardMember.component"

const BoardGroup = ({ members, title }) => {
  return (
    <section className="mb-5">
      <p>
        <strong className="ulem-text-primary">{title}</strong>
      </p>
      {members.map(({ name, job, organization }) => (
        <p>
          <strong>{name} </strong>
          <span>{job}, </span>
          <span>{organization}</span>
        </p>
      ))}
    </section>
  )
}

export default BoardGroup

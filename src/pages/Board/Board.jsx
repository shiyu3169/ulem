import React from "react"

import BoardGroup from "../../components/BoardGroup/BoardGroup"

import {
  executiveCommittee,
  membersOfTheBoard,
  boardChairsEmeritus,
  boardEmeritus,
  advisoryCouncil,
} from "../../constants/boards"

import meeting from "../../img/Meeting_Boardroom-Leaderboard.png"

const Board = () => {
  return (
    <div>
      <img src={meeting} alt="meeting" className="full-width" />
      <div className="container">
        <h1 className="ulem-text-primary my-4">
          <strong>Board of Directors</strong>
        </h1>
        <BoardGroup members={executiveCommittee} title="Executive Committee" />
        <BoardGroup members={membersOfTheBoard} title="Members of the Board" />
        <BoardGroup
          members={boardChairsEmeritus}
          title="Board Chairs Emeritus"
        />
        <BoardGroup members={boardEmeritus} title="Board Emeritus" />
        <BoardGroup members={advisoryCouncil} title="Advisory Council" />
      </div>
    </div>
  )
}

export default Board

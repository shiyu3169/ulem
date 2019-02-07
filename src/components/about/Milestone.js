import React from "react";
import Stone from "./Stone";
import t1919 from "../../img/1919.png";

export default function Milestone() {
  return (
    <section id="milestone">
      <h1 className="font-red">Our Milestones</h1>
      <ul class="timeline">
        <Stone
          date="21st Century & Beyond"
          text="Carl Dreyfus Jr. Elected President of Urban League"
          img={t1919}
          inverted="timeline-inverted"
        />
        <Stone
          date="Today"
          text="Department Stores In Boston Hiring Negro Saleswomen"
          img={t1919}
        />
        <Stone
          date="2009"
          text="Carl Dreyfus Jr. Elected President of Urban League"
          img={t1919}
          inverted="timeline-inverted"
        />
        <Stone
          date="1999"
          text="Department Stores In Boston Hiring Negro Saleswomen"
          img={t1919}
        />
        <Stone
          date="1989"
          text="Carl Dreyfus Jr. Elected President of Urban League"
          img={t1919}
          inverted="timeline-inverted"
        />
        <Stone
          date="1979"
          text="Department Stores In Boston Hiring Negro Saleswomen"
          img={t1919}
        />
        <Stone
          date="1969"
          text="Carl Dreyfus Jr. Elected President of Urban League"
          img={t1919}
          inverted="timeline-inverted"
        />
        <Stone
          date="1959"
          text="Department Stores In Boston Hiring Negro Saleswomen"
          img={t1919}
        />
        <Stone
          date="1949"
          text="Carl Dreyfus Jr. Elected President of Urban League"
          img={t1919}
          inverted="timeline-inverted"
        />
        <Stone
          date="1939"
          text="Department Stores In Boston Hiring Negro Saleswomen"
          img={t1919}
        />
        <Stone
          date="1929"
          text="George Goodman, President of the Boston Urban League, lobbies
          with the Works Progress Administration (WPA) and National Youth
          Administration to place workers in jobs as a result of protests
          regarding unemployment rates during the Depression rising from
          15 to 18% in the South End and Roxbury."
          img={t1919}
          inverted="timeline-inverted"
        />
        <Stone
          date="May 16, 1919"
          text="The Boston Urban League becomes an affiliate of the National Urban League."
          img={t1919}
        />
      </ul>
    </section>
  );
}

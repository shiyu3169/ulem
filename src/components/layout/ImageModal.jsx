import React from "react"
import topImg from "../../assets/image/johnlewis.png"

const ImageModal = ({ id, title }) => {
  return (
    <div className="modal fade" id={id} tabIndex={-1} role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body image-modal">
            <img src={topImg} className="img-fluid" alt="breakfast gala" />
            <h1 style={{ color: "#000", textAlign: "left", marginTop: "2rem" }}>
              NATIONAL URBAN LEAGUE MOURNS THE PASSING OF CIVIL RIGHTS ICON JOHN
              LEWIS
            </h1>
            <p>
              <strong>NEW YORK (July 17, 2020)</strong> -- National Urban League
              President and CEO Marc H. Morial issued the following statement in
              response to the passing of Congressman John Lewis:
            </p>
            <p>
              “John Lewis is one of the great Americans of his generation. He
              walked side-by-side with civil rights legends, and stood
              toe-to-toe with presidents - always serving as a moral compass
              pointing toward justice. At the age of 21 he chose to put himself
              in harm’s way as one of the original Freedom Riders, rolling into
              the angry and segregated South to shine a light on the injustice
              and brutality that was commonplace. He was knocked unconscious at
              the Greyhound station in Montgomery; 40 years later he publicly
              forgave the former Klan supporter who led the attack. Alabama
              state troopers fractured his skull as he tried to cross the Edmund
              Pettus Bridge in Selma, Alabama on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(205, 0, 0)" }}
                href="https://www.npr.org/2015/03/09/391795376/50-years-later-thousands-commemorate-selmas-bloody-sunday"
              >
                Bloody Sunday
              </a>{" "}
              . The list of sacrifices and acts of heroism is endless. Always,
              he emerged steadfast, with his eyes, his heart and his moral
              certitude focused on creating a better America. We will miss his
              voice."
            </p>
            <p>
              “John was also a personal hero, a friend and a mentor. In 2013,
              the National Urban League recognized him with our highest honor,
              the Civil Rights Champion Award. In his presence, I was reminded
              that I stand on the shoulders of history. That this icon reached
              back to pull the next generation of leaders like me to the front
              of the line was at once life-affirming and humbling. He was always
              affable, always available, always fighting—until the very end."
            </p>
            <p>“May he rest in power.”</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageModal

import React, { Component } from "react";
import $ from "jquery";

import Stone from "./Stone";
import beyond from "../../img/beyond.jpg";
import digiul from "../../img/DigiUL.png";
import t2009 from "../../img/2009.png";
import t1999 from "../../img/1999.png";
import t1989 from "../../img/1989.png";
import t1979 from "../../img/1979.png";
import t1969 from "../../img/1969.jpg";
import t1959 from "../../img/1959.png";
import t1949 from "../../img/1949.PNG";
import t1939 from "../../img/1939.jpg";
import t1929 from "../../img/1929.jpg";
import t1919 from "../../img/1919.png";
export default class Milestone extends Component {
    componentDidMount() {
        var $animation_elements = $(".anim");
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = window_top_position + window_height;

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position =
                    element_top_position + element_height;

                //check to see if this current container is within viewport
                if (
                    element_bottom_position >= window_top_position &&
                    element_top_position <= window_bottom_position
                ) {
                    $element.addClass("animated");
                } else {
                    $element.removeClass("animated");
                }
            });
        }

        $window.on("scroll resize", check_if_in_view);
        $window.trigger("scroll");
    }
    render() {
        return (
            <section id="milestone">
                <h1 className="font-red">Our Milestones</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div id="timeline">
                            <Stone
                                src={beyond}
                                direction="left"
                                text="21st Century & Beyond"
                                title="beyond"
                            />
                            <Stone
                                src={digiul}
                                direction="right"
                                text="Today"
                                title="today"
                            />
                            <Stone
                                src={t2009}
                                direction="left"
                                text="2009"
                                title="t2009"
                            />
                            <Stone
                                src={t1999}
                                direction="right"
                                text="1999"
                                title="t1999"
                            />
                            <Stone
                                src={t1989}
                                direction="left"
                                text="1989"
                                title="t1989"
                            />
                            <Stone
                                src={t1979}
                                direction="right"
                                text="1979"
                                title="t1979"
                            />
                            <Stone
                                src={t1969}
                                direction="left"
                                text="1969"
                                title="t1969"
                            />
                            <Stone
                                src={t1959}
                                direction="right"
                                text="1959"
                                title="t1959"
                            />
                            <Stone
                                src={t1949}
                                direction="left"
                                text="1949"
                                title="t1949"
                            />
                            <Stone
                                src={t1939}
                                direction="right"
                                text="1939"
                                title="t1939"
                            />
                            <Stone
                                src={t1929}
                                direction="left"
                                text="1929"
                                title="t1929"
                            />
                            <Stone
                                src={t1919}
                                direction="right"
                                text="May 16, 1919"
                                title="t1919"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

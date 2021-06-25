import React, { Component } from 'react'


export default class HomePage extends Component {
    render() {
        return (
            <div className="bg-callout">
                <section >
                    <div className="group">

                        <div className="item">
                            <div className="img1">
                                <img src="images/cgportfoliopic2.jpg" alt="picture of Caitlin" />
                            </div>
                        </div>
                        <div className="item-double">
                            <h2>Hey!  I'm Caitlin Greer</h2>

                            <h3>Coming at you live from Orlando, Florida</h3>
                            <p>As a new kid in the web developer world I was drawn to the idea of being able to create something from nothing.
                                I'm fortunate enough to have had a career working face to face with people in a creative industry. Being able to
                                take an idea and make something that exceeds client expectations every time is, what I like to call, my super power.
                            </p>

                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
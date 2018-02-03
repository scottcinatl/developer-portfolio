import React, { Component } from 'react'

import './Testimonials.css'

class Testimonials extends Component {
  render() {
    return (
      <div className="t-container">
        <h3 className="t-title">Testimonials</h3>
        <span>
          <div class="testimonial">
            <div class="box">
              <span>
                "I had the pleasure of mentoring Scott during his one month internship at Zapic. I am impressed by
                Scott's speed in becoming a confident JavaScript developer. Throughout the internship, Scott clearly
                demonstrated his ability to collaborate on user experience and user interface designs, implement ReactJS
                components and RxJS streams, and communicate unique perspectives in group discussions. Scott is eager to
                learn new tools and techniques and quick to incorporate them in daily activities. Scott will be a great
                asset on any development team."
              </span>
            </div>
            <div class="tri" />
            <div class="author">
              <h4>
                <em>Kyle Dodson</em> <span>|</span> Co-Founder, CTO at Zapic
              </h4>
            </div>
          </div>
        </span>

        <span>
          <div class="testimonial">
            <div class="box">
              <span>
                "Scott is detail oriented and puts a lot of effort into every project. With a sense for balanced layouts
                and an aptitude for programming he is sure to go far as a developer. In our projects, his consistent
                work ethic and positive nature brought him and his team him past many obstacles and those traits will
                make him an irreplaceable part of any team he’s on."
              </span>
            </div>
            <div class="tri-middle" />
            <div class="author-middle">
              <h4>
                <em>Alyssa Hope</em> <span>|</span> Lead Instructor at LEARN Academy
              </h4>
            </div>
          </div>
        </span>

        <span>
          <div class="testimonial">
            <div class="box">
              <span>
                "Scott has a superior understanding of business processes and as well as the steps needed to create
                client satisfaction. He works well in a team environment and the highest standards of professionalism.
                Scott was a peer and he was very efficient, knowledgeable, and great team player. Scott has always taken
                the time to listen to input and is able to analyze and discuss the business implications of any decision
                and willing to jump in and create better solutions. Finally, Scott makes the work environment fun and
                takes the time to connect with peers, clients, and the team."
              </span>
            </div>
            <div class="tri" />
            <div class="author">
              <h4>
                <em>Tania Azar</em> <span>|</span> Director, College Apps Academy at Reality Changers
              </h4>
            </div>
          </div>
        </span>
      </div>
    )
  }
}

export default Testimonials

import React, { Component } from 'react';
import { Panel, PanelGroup } from "react-bootstrap";
import '../styles/pages.css';

class Tips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 1
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) { this.setState({ activeKey: key }); }

  applicantsVsCandidates() {
    return (
      <div className='col-lg pt4'>
        <span className='lead'>
          <p><span id='highlight'>Applicants</span> are job seekers who have “applied” for a job opening. They have either sent a resume or completed an application. For example, there could be 150 applicants for a particular job opening. Consequently, there may only be 10% of these applicants that meet the minimum requirements for the job.</p>
          <p><span id='highlight'>Candidates</span> on the other hand are active applicants that recruiters have screened and verify qualified for the requirements of the job opening. They can also be passive candidates which recruiters go and find or invite to apply. They are the true contenders for the open headcount being hire for. These are the people that are interviewed by phone or in person or contacted to learn more about their qualifications. Out of an applicant pool of 150, there might only be 15 qualified candidates.</p>
        </span>
      </div>
    );
  };

  codingForInterviews() {
    return (
      <div className='col-lg pt4'>
        <div className='lead'>
          <p>With practice and experience overtime, writing code only gets easier.</p>
          <p>Realistically, you will be typing code in some IDE on the job, and sparingly writing on a whiteboard. In my experience, more and more companies are shifting towards using live coding such as Hackerrank and Coderpad during interviews to further better evaluate candidates.</p>
          <p>It is a very different experience typing code on an IDE vs writing code on paper. You just have to practice writing code by hand to improve at it.</p>
          <p>I'd argue that it is more difficult with live coding, as your code is expected to compile and run. A single error and you could be F'd. You can get a way with so much with whiteboard. Either way, be sure you can do both any given day.</p>
        </div>
      </div>
    );
  };

  practice() {
    return (
      <div className='col-lg pt4'>
        <div className='lead'>
          <p>In my opinion, many early and new programmers go about practicing coding for interviewing very wrong. You wouldn't run a full marathon without first training and conditioning. You would practice daily with a short run time and extend as you build your strength and enduarance. So why interview without adequitely preparing? Practice coding on a regular basis.</p>
          <p>I strongly recommend that you pick a language with OOP such as C++, C#, Java. Every language has its strengths and weaknesses but the ones listed are common enough that most interviewers would already know them as well. Focus on mastering the syntax and their basic data structures such as Arrays, Stacks, Queues, Maps, Lists, Sets and so on.</p>
          <p>There are many great resources out there such as <span id='highlight'>leetcode, hackerrank, and the book Cracking the Coding Interview.</span> The problem is, many just dive into it without having a solid foundation on the basics.</p>
          <p>After really putting in the time to practice the basics, solving many of the practice questions become much eaier. Just as a carpenter would know when to use a hammer vs saw to fix something, you will start to recognize which DS and Algorithms are better at solving perticular problems. Without the basics, it's just always going to be tough.</p>
        </div>
      </div>
    );
  };

  resourceLinks() {
    return (
      <div className='col-lg pt4'>
        <div className='lead'>
          <span>Great sites for practicing the basics problems online:</span>
          <ul>
            <li><a href='https://practiceit.cs.washington.edu/' target='_.blank'>Practice-It:</a> Practice solving Java problems.</li>
            <li><a href='https://sqlzoo.net/' target='_.blank'>SQL Zoo:</a> Practice solving SQL basics problems.</li>
            <li><a href='https://codingbat.com/java' target='_.blank'>CodingBat:</a> Practice solving Java and Python problems.</li>
            <li><a href='https://www.freecodecamp.org/' target='_.blank'>FreeCodeCamp:</a> Practice basic web development skills.</li>
            <li><a href='https://www.codestepbystep.com/' target='_.blank'>CodeStepByStep:</a> Practice solving C++, Java, Python, and more!</li>
            <li><a href='https://leetcode.com/' target='_.blank'>LeetCode:</a> When your done with basics, highly recommend this site.</li>
          </ul>
          <span>Preparing for the other stuff:</span>
          <ul>
            <li><a href='https://www.mockquestions.com/' target='_.blank'>Mock Interview:</a> Tips on preparing for interviews.</li>
            <li><a href='https://www.mockquestions.com/interview/Behavioral/' target='_.blank'>Mock Behavioral:</a> Practice behavioral interview questions.</li>
            <li><a href='https://www.pramp.com/#/' target='_.blank'>Pramp:</a> Get over your fears, practice with your peers, a real human.</li>
          </ul>
        </div>
      </div>
    );
  };

  projects() {
    return (
      <div className='col-lg pt4'>
        <div className='lead'>
          <p>Personal projects are one way of showcasing your passion and skills.</p>
          <p>I highly recommend creating project that interests you. I found I learn so much more when creating a project. For example, this very app has improved my web development skills. There are also many project ideas out there. Udemy has many interesting courses to learn and has also helped me ace interviews. Sometimes, having a project portfolio can be the difference between getting an interview or not.</p>
          <p>Starting one is easy, but make sure to finish and complete them. Don't just have a collection of 'Hello World' apps. The best ones to show are projects that are involved, with more complexity and challenges that showcase  a variety of skills.</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className='tips'>
        <div className='about'>
          <div className='container'>
            <PanelGroup
              accordion
              id="tips-accordion"
              onSelect={ this.handleSelect }
              activeKey={ this.state.activeKey }
            >
              <Panel eventKey={ 1 }>
                <Panel.Heading>
                  <Panel.Title toggle>{ <h3>Applicants vs Candidates</h3> }</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>{ this.applicantsVsCandidates() }</Panel.Body>
              </Panel>
              <Panel eventKey={ 2 }>
                <Panel.Heading>
                  <Panel.Title toggle>{ <h3>Coding For Interviews</h3> }</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>{ this.codingForInterviews() }</Panel.Body>
              </Panel>
              <Panel eventKey={ 3 }>
                <Panel.Heading>
                  <Panel.Title toggle>{ <h3>Programming Practice</h3> }</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>{ this.practice() }</Panel.Body>
              </Panel>
              <Panel eventKey={ 4 }>
                <Panel.Heading>
                  <Panel.Title toggle>{ <h3>Resource Links</h3> }</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>{ this.resourceLinks() }</Panel.Body>
              </Panel>
              <Panel eventKey={ 5 }>
                <Panel.Heading>
                  <Panel.Title toggle>{ <h3>Projects</h3> }</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>{ this.projects() }</Panel.Body>
              </Panel>
            </PanelGroup>
          </div>
        </div>
      </div>
    );
  }
};

export default Tips;

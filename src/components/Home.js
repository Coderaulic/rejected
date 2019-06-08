import React from 'react';
import '../styles/pages.css';
import imgRejected from '../img/rejected.png';

const Home = () => {
  return (
    <div className='home'>
      <header>
        <div className='container text-center'>
          <img src={ imgRejected } style={{ width: '600px', height: '350px' }} alt='no img' />
          <h1 className='title'>Yet Another Job Search Story</h1>
        </div>
      </header>
      <div className='about'>
        <div className='container'>
          <div className='col-lg'>
            <h2>Ever wonder what's it like to be a software developer looking for work?</h2>
            <span className='lead'>
              <p>If you said <span id='highlight'>'Yes'...</span> you might have come to the right place!</p>
              <p>Get ready for a whole lot of <span id='highlight'>rejections</span>. I've applied to hundreds of positions and have been <span id='highlight'>rejected</span> countless times... One day, I thought to myself... what better way to share my software development skills by sharing some of my job search experiences.</p>
              <p>Fewer <span id='highlight'>rejections</span> as you gain more experiences but it's often and just part of the process.</p>
              <p>Inspired by <a href='https://rejected.us/' target='_.blank'>'Rejected.us'</a>, enjoy my single page React/Redux app that chronicles countless <span id='highlight'>rejections!</span></p>
              <p>Use [A, D, LeftArrow, RightArrow, and Esc] keys for faster navigation. Enjoy!</p>
              <p>No hate here... Rejections and being ghosted by employers are just part of the process.</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

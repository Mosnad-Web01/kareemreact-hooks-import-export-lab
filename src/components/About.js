import React from 'react';
import { image } from '../data/user';

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={image} alt="Profile Picture" />
      <p>This is a brief description of myself.</p>
    </div>
  );
}

export default About;
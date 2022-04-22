import { Box } from '@mui/material';
import React from 'react';

function About() {
  return (
    <Box sx={{ caretColor: 'transparent', fontSize: 16 }}>
      This service can store a list of reservoirs that you want to see and quickly check the
      reservoirs' water storage rates.
      <br />
      <br />
      I recommend you to use this service through your phone.
      <br />
      Furthermore, I think PWA(Progressive Web App) is better.
      <br />
      <br />
      This service receives information without any permission.
      <br />
      Therefore, it may not work from some day.
      <br />
      <br />
      I don’t have responsibility for any disadvantages caused by using the service.
      <br />
      <br />
      If you have a problem with this application or want to communicate with me, send me an email.
      <br />
      <a href='mailto:kwschic@gmail.com'>kwschic@gmail.com</a>
      <br />
      <br />
      Made by <a href='https://github.com/mihilt'>Wonsik</a> with some ideas from my awesome
      friends.
      <br />
      <br />
      Thank you for Hyunwoo, MinYoung and Wookjin 😀
    </Box>
  );
}

export default About;

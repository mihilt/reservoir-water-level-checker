import { Box } from '@mui/material';
import React from 'react';

function About() {
  //TODO: warning for duplicate names
  return (
    <Box sx={{ caretColor: 'transparent', fontSize: 16 }}>
      This application can store a list of reservoirs that you want to see and quickly check the
      reservoirs' water storage rates.
      <br />
      <br />
      I recommend that you use this service through the PWA(Progressive Web App).
      <br />
      <br />
      This web request through a proxy server, and information is received through an external API
      without permission.
      <br />
      Therefore, this service may not work from some day.
      <br />
      <br />
      If you have a problem with this application or want to communicate with me, please send me an
      email.
      <br />
      <a href='mailto:kwschic@gmail.com'>kwschic@gmail.com</a>
      <br />
      <br />
      I don’t have responsibility for any disadvantages caused by using the service.
      <br />
      <br />
      Made by <a href='https://github.com/mihilt'>Wonsik</a> with some ideas from my awesome
      friends.
      <br />
      <br />
      Thank you for Hyunwoo, MinYoung and Wookjin
    </Box>
  );
}

export default About;

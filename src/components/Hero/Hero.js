import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Mohammad Rayhan, <br/>
        Front End Developer
      </SectionTitle>

      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus facere illo optio illum perferendis, nesciunt non vero ullam nobis atque distinctio voluptatem consequuntur rerum dicta neque ipsum aut consectetur. Aperiam.
      </SectionText>

      <Button onClick = { ()=> window.location = 'https://www.linkedin.com/in/mohammad-rayhan/'}>My Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
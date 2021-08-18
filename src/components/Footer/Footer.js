import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>

      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+880 1942-831359">+880 1942-831359</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:mohammadrayhan802@gmail.com">mohammadrayhan802@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Inovating one project at a time</Slogan>
        </CompanyContainer>

      <SocialContainer>
        <SocialIcons href="https://github.com/rayhan8">
          <AiFillGithub size="3rem"/>
        </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/mohammad-rayhan/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>

        <SocialIcons href="https://www.youtube.com/channel/UCduEIu3mL5WWZYMu-Dpy4YA">
          <AiFillYoutube size="3rem"/>
        </SocialIcons>
      </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

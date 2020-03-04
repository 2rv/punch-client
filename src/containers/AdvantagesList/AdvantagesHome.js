import React from 'react';
import styled from 'styled-components';

import { colors, sizes } from '../../theme';
import { Fluid, Responsive, Padding, Section, Fade } from '../../layouts';
import staticPath from '../../utils/staticPath';
import { SectionTitle } from '../../components/titles';

import { OutlinedCard } from '../../components/cards';

const AdvantagesHome = () => {
  return (
    <Container dark padding margin={false}>
      <Fluid>
        <Responsive>
          <Fade>
            <Content>
              <SectionTitle title="HOME.ADVANTAGES.TITLE" subTitle="HOME.ADVANTAGES.SUB_TITLE" />
              <GridBlock>
                <OutlinedCard
                  title="ADVANTAGES.HOME.EXPERIENCE.TITLE"
                  description="ADVANTAGES.HOME.EXPERIENCE.DESCRIPTION"
                  imagePath={staticPath('icons', 'advantage_experience_home', 'svg')}
                />
                <OutlinedCard
                  title="ADVANTAGES.HOME.QUALITY.TITLE"
                  description="ADVANTAGES.HOME.QUALITY.DESCRIPTION"
                  imagePath={staticPath('icons', 'advantage_quality_home', 'svg')}
                />
                <OutlinedCard
                  title="ADVANTAGES.HOME.DUO.TITLE"
                  description="ADVANTAGES.HOME.DUO.DESCRIPTION"
                  imagePath={staticPath('icons', 'advantage_duo_home', 'svg')}
                />
              </GridBlock>
            </Content>
          </Fade>
        </Responsive>
      </Fluid>
    </Container>
  );
};

const GridBlock = styled.div`
  display: grid;
  grid-template-rows: auto;
  width: 100%;
  grid-gap: ${sizes.spacing.xb};

  @media all and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: '. . .';
  }

  @media all and (max-width: 999px) {
    grid-template-columns: 1fr;
    grid-template-areas: '.';
  }
`;

const Content = styled(Padding)`
  display: flex;
  flex-direction: column;
`;

const Container = styled(Section)`
  position: relative;
  z-index: 1;

  &:before,
  &:after {
    background: inherit;
    content: '';
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
    -webkit-backface-visibility: hidden;
  }

  &:before {
    top: 0;
    transform: skewY(1.5deg);
    transform-origin: 100% 0;
  }

  &:after {
    bottom: 0;
    transform: skewY(-1.5deg);
    transform-origin: 100%;
  }
`;

export default AdvantagesHome;

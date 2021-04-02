import React, {useState} from 'react';
import {
  Container,
  Page,
  SlideVerticalTransition,
  InputWrap,
  SizedBox,
} from '@lib/main';
import AppColors from '@helpers/_colors';

import Button from 'components/button';

const App = (props: any) => {
  return (
    <Page barColor={'#fff'} barIconColor="dark">
      <Container flex={1}>
        <SizedBox height={5} />
        <Container flex={1}>
          <Container
            horizontalAlignment="center"
            widthPercent="80%"
            selfAlignment="center"
            borderWidth={1}>
            <Container
              dir="row"
              borderWidth={1}
              borderRadius={5}
              padding={4}
              widthPercent="100%">
              <InputWrap />
            </Container>
          </Container>
        </Container>
        <SlideVerticalTransition from={800}>
          <Button />
        </SlideVerticalTransition>
      </Container>
    </Page>
  );
};

export default App;

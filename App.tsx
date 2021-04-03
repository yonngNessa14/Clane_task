import React, {useState, useRef} from 'react';
import {
  Container,
  Page,
  SlideVerticalTransition,
  InputWrap,
  SizedBox,
  H2,
  Rounded,
  Avatar,
} from '@lib/main';
import AppColors from '@helpers/_colors';
import {validate, validateNumber, validatePhone} from '@util/inputValidation';
import {BORDER_RADIUS} from '@helpers/_consts';
import * as Animatable from 'react-native-animatable';

import Button from 'components/button';

const App = (props: any) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const emailRef = useRef(null);
  const shakeRef = useRef(null);
  const [emailValidated, setEmailValidated] = useState(false);

  const validator = async (type: string, val: any) => {
    if (type === 'email') {
      let result = await validate(val);
      if (result) {
        setEmailValidated(true);
        return;
      }
      setEmailValidated(false);
    }

    if (type === 'phone') {
      let result = await validatePhone(val);
      if (result) {
        return;
      }
    }
  };
  return (
    <Page barColor={AppColors.appWhite} barIconColor="dark">
      <Container flex={1}>
        <SizedBox height={15} />
        <Container flex={1}>
          <Container horizontalAlignment="center">
            <Animatable.View animation="zoomInUp" duration={3000}>
              <Rounded borderWidth={1} size={14}>
                <Avatar
                  size={18}
                  url={
                    'https://media-exp1.licdn.com/dms/image/C4D0BAQHhklhwRp08aw/company-logo_200_200/0/1532700061432?e=2159024400&v=beta&t=3oTsm2DHqMrjN26SpFNnwYBBfhLp1-04o1WridqyHlA'
                  }
                />
              </Rounded>
            </Animatable.View>
          </Container>
          <SizedBox height={5} />
          <Container
            horizontalAlignment="center"
            widthPercent="90%"
            selfAlignment="center">
            <Animatable.View ref={shakeRef} style={{width: '100%'}}>
              <Container
                dir="column"
                borderWidth={1}
                borderColor={emailValidated ? 'green' : 'red'}
                borderRadius={BORDER_RADIUS}>
                <Container
                  dir="row"
                  // borderWidth={1}
                  borderRadius={BORDER_RADIUS}
                  paddingHorizontal={4}
                  widthPercent="100%">
                  <InputWrap
                    refValue={emailRef}
                    value={email}
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChangeText={(val: any) => {
                      validator('email', val);
                      setEmail(val);
                      // console.log(val);
                    }}
                    onBlur={() => {
                      if (email !== '' && !emailValidated) {
                        shakeRef.current.shake();
                        emailRef.current.focus();
                      }
                    }}
                    textPaddingVertical={1.5}
                    borderRadius={BORDER_RADIUS}
                    flex={1}
                  />
                </Container>
                {!emailValidated && (
                  <Container
                    horizontalAlignment="flex-end"
                    paddingHorizontal={3}>
                    <H2 fontSize={8} color={'red'}>
                      valid email is required
                    </H2>
                  </Container>
                )}
              </Container>
            </Animatable.View>

            <SizedBox height={2} />
            <Container
              dir="column"
              borderWidth={1}
              borderColor={emailValidated ? 'green' : 'red'}
              borderRadius={BORDER_RADIUS}>
              <Container
                dir="row"
                // borderWidth={1}
                borderRadius={BORDER_RADIUS}
                paddingHorizontal={4}
                widthPercent="100%">
                <InputWrap
                  refValue={emailRef}
                  value={phone}
                  keyboardType="phone-pad"
                  autoCompleteType="tel"
                  onChangeText={(val: any) => {
                    validator('phone', val);
                    setPhone(val);
                    // console.log(val);
                  }}
                  textPaddingVertical={1.5}
                  borderRadius={BORDER_RADIUS}
                  flex={1}
                />
              </Container>
              {!emailValidated && (
                <Container horizontalAlignment="flex-end" paddingHorizontal={3}>
                  <H2 fontSize={8} color={'red'}>
                    valid email is required
                  </H2>
                </Container>
              )}
            </Container>
            <SizedBox height={4} />
            <SlideVerticalTransition from={800}>
              <Button />
            </SlideVerticalTransition>
          </Container>
        </Container>
      </Container>
    </Page>
  );
};

export default App;

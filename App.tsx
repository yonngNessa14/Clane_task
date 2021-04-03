import React, {useState, useRef} from 'react';
import {Alert} from 'react-native';
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
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const shakeRef = useRef(null);
  const shakePhoneRef = useRef(null);
  const [emailValidated, setEmailValidated] = useState(false);
  const [phoneValidated, setPhoneValidated] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const [focused, setFocused] = useState('');

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
      if (val) {
        let result = await validatePhone(val);
        if (result) {
          setPhoneValidated(true);
          return;
        }
        setPhoneValidated(false);
        setErrors({...errors, phone: 'enter a valid phone number'});
        return;
      }
      setErrors({...errors, phone: ''});
    }
  };

  const submit = async () => {
    if (email === '') {
      shakeRef.current.shake();
      emailRef.current.focus();
      setErrors({
        ...errors,
        email: 'valid email is required',
      });
      return;
    }

    if (!emailValidated) {
      shakeRef.current.shake();
      emailRef.current.focus();
      setErrors({
        ...errors,
        email: 'valid email is required',
      });
    }

    if (phone !== '' && !phoneValidated) {
      shakePhoneRef.current.shake();
      phoneRef.current.focus();
      setErrors({
        ...errors,
        phone: 'enter a valid phone number',
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      Alert.alert('Clane', 'You have successfully created your account');
      setIsLoading(false);
    }, 3000);
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
            <SizedBox height={3} />
            <H2 fontSize={8} color={AppColors.appGrey}>
              In order to open an account, please enter E-mail below
            </H2>
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
                borderColor={
                  focused === 'email' && errors.email === ''
                    ? AppColors.mainColor
                    : errors.email === ''
                    ? AppColors.appGrey
                    : 'red'
                }
                borderRadius={BORDER_RADIUS}>
                <Container
                  backgroundColor={AppColors.appWhite}
                  marginTop={-1}
                  marginLeft={2}
                  horizontalAlignment="center"
                  width={12}>
                  <H2
                    fontSize={10}
                    color={
                      focused === 'email' && errors.email === ''
                        ? AppColors.mainColor
                        : errors.email === ''
                        ? AppColors.appGrey
                        : 'red'
                    }>
                    Email
                  </H2>
                </Container>
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
                    onFocus={() => setFocused('email')}
                    returnKeyType="next"
                    onChangeText={(val: any) => {
                      setErrors({...errors, email: ''});
                      validator('email', val);
                      setEmail(val);
                      // console.log(val);
                    }}
                    onBlur={() => {
                      if (email !== '' && !emailValidated) {
                        shakeRef.current.shake();
                        emailRef.current.focus();
                        setErrors({
                          ...errors,
                          email: 'valid email is required',
                        });
                      }
                    }}
                    textPaddingVertical={1.5}
                    borderRadius={BORDER_RADIUS}
                    flex={1}
                  />
                </Container>
                {errors.email !== '' && (
                  <Container
                    horizontalAlignment="flex-end"
                    paddingHorizontal={3}>
                    <H2 fontSize={8} color={'red'}>
                      {errors.email}
                    </H2>
                  </Container>
                )}
              </Container>
            </Animatable.View>

            <SizedBox height={3} />
            <Animatable.View ref={shakePhoneRef} style={{width: '100%'}}>
              <Container
                dir="column"
                borderWidth={1}
                borderColor={
                  focused === 'phone' && errors.phone === ''
                    ? AppColors.mainColor
                    : errors.phone === '' || phone === ''
                    ? AppColors.appGrey
                    : 'red'
                }
                borderRadius={BORDER_RADIUS}>
                <Container
                  backgroundColor={AppColors.appWhite}
                  marginTop={-1}
                  marginLeft={2}
                  horizontalAlignment="center"
                  width={12}>
                  <H2
                    fontSize={10}
                    color={
                      focused === 'phone' && errors.phone === ''
                        ? AppColors.mainColor
                        : errors.phone === '' || phone === ''
                        ? AppColors.appGrey
                        : 'red'
                    }>
                    Phone
                  </H2>
                </Container>
                <Container
                  dir="row"
                  // borderWidth={1}
                  borderRadius={BORDER_RADIUS}
                  paddingHorizontal={4}
                  widthPercent="100%">
                  <InputWrap
                    refValue={phoneRef}
                    value={phone}
                    onFocus={() => setFocused('phone')}
                    keyboardType="phone-pad"
                    autoCompleteType="tel"
                    onChangeText={(val: any) => {
                      setErrors({...errors, phone: ''});
                      validator('phone', val);
                      setPhone(val);
                      // console.log(val);
                    }}
                    onBlur={() => {
                      if (phone !== '' && !phoneValidated) {
                        shakePhoneRef.current.shake();
                        return phoneRef.current.focus();
                      }
                    }}
                    placeholder="optional"
                    textPaddingVertical={1.5}
                    borderRadius={BORDER_RADIUS}
                    flex={1}
                  />
                </Container>
                {errors.phone !== '' && (
                  <Container
                    horizontalAlignment="flex-end"
                    paddingHorizontal={3}>
                    <H2 fontSize={8} color={'red'}>
                      {errors.phone}
                    </H2>
                  </Container>
                )}
              </Container>
            </Animatable.View>

            <SizedBox height={4} />
            <SlideVerticalTransition from={400} duration={2000}>
              <Button
                disabled={isLoading}
                isLoading={isLoading}
                title="Register"
                loaderColor="#fff"
                size="small"
                onPress={() => submit()}
              />
            </SlideVerticalTransition>
          </Container>
        </Container>
      </Container>
    </Page>
  );
};

export default App;

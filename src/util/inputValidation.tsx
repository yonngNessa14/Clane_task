export const validate = (text: string) => {
  if (text === '') {
    return;
  }
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text.trim()) === false) {
    return false;
  }
  return true;
};

export const validatePhone = (phone: any) => {
  // console.log(phone.startWith(0));
  if (phone === '') {
    return;
  }

  if (phone.length < 11 || phone.length > 11 || phone.charAt(0) != 0) {
    return false;
  }
  return true;
};

// TODO make this a global number validation
export const validateNumber = async (val: any) => {
  let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  // alphabets
  let reg = /^[-+]?[0-9]+$/;
  if (!val.match(reg)) {
    return false;
  }
  // special chars
  if (format.test(val)) {
    return false;
  }
  return true;
};

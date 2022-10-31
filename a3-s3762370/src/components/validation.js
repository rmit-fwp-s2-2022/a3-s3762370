/**
 * author Chong Gao
 * Sorry I took too much time in the previous part and didn't finish the information verification part in the end
 */
export default function validate (values) {
  let errors = {}
  if (!values.firstName) {
    errors.firstName = 'firstName is required'
  }
  if (!values.lastName) {
    errors.lastName = 'lastName is required'
  }
  if (!values.phoneNum) {
    errors.phoneNum = 'Phone number is required'
  } else if (values.phoneNum.slice(0, 2) !== '614') {
    errors.phoneNum = 'Phone number format is incorrect'
  } else if (values.phoneNum.length !== 11) {
    errors.phoneNum = 'Phone number format is incorrect'
  }
  if (!values.street) {
    errors.street = 'street is required'
  }
  if (!values.aptNum) {
    errors.aptNum = 'aptNumber is required'
  } else if (!/^\+?[1-9][0-9]*$/.test(values.aptNum)) {
    errors.aptNum = 'aptNumber format is incorrect'
  }
  if (!values.city) {
    errors.city = 'city is required'
  }
  if (!values.floor) {
    errors.floor = 'floor is required'
  } else if (!/^\+?[1-9][0-9]*$/.test(values.aptNum)) {
    errors.floor = 'floor format is incorrect'
  }

  return errors
};

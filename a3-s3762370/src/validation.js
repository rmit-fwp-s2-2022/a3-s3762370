export default function validate (values) {
  let count = 0
  if (values.sausage === 'true') {
    count = count + 1
  } else if (values.sausage === 'true') {
    count = count + 1
  } else if (values.ham === 'true') {
    count = count + 1
  } else if (values.olives === 'true') {
    count = count + 1
  } else if (values.bacon === 'true') {
    count = count + 1
  } else if (values.corn === 'true') {
    count = count + 1
  } else if (values.pineapple === 'true') {
    count = count + 1
  } else if (values.mushrooms === 'true') {
    count = count + 1
  }
  let errors = {}
  if (!values.size) {
    errors.size = 'Size address is required'
  }
  if (!values.firstName) {
    errors.password = 'Password is required'
  }
  if (!values.lastName) {
    errors.password = 'Password is required'
  }
  if (!values.phone) {
    errors.password = 'Password is required'
  }
  if (!values.phone) {
    errors.phone = 'Phone number is required'
  } else if (values.phone.slice(0, 2) !== '614') {
    errors.phone = 'Phone number format is incorrect'
  } else if (values.phone.length !== 11) {
    errors.phone = 'Phone number format is incorrect'
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
  if (count < 2) {
    errors.topping = 'Must choose at least two toppings'
  }
  return errors
};

let f2 = (inputStr) => {
  let obj = {};
  if (inputStr.indexOf('&') != 0 && inputStr.indexOf('.') != 0 && inputStr.indexOf('=') != 0 && inputStr != '') {
    inputStr = inputStr.replace(/\"|\"/g,'');
    inputStr.split('&').map((obj1) => {
      let index = obj1.indexOf('.');
      if (obj1.split('=')[1] != '' && obj1.split('=').length < 3 ) {
        if (index != -1){
          obj[obj1.substring(0, index)] = nesting(obj1.substring(index + 1))
        } else {
          obj[obj1.split('=')[0]] = obj1.split('=')[1];
        }
      } else {
        return obj1.split('=')[0] = '';
      }
    })
    return obj;
  } else {
    console.log('Incorrect input...');
  }
}

let nesting = (str) => {
  let obj = {};
  let temp = obj;
  let object = str.split('=')[0].split('.');
  let argument = str.split('=')[1];
  object.map((el, i) => {
    if (i != object.length -1) {
      temp = temp[el] = {};
    } else {
      temp = temp[el] = argument;
    }
    return temp;
  })
  return obj;
}
console.log(f2('this.is.my.first.app="12"'));
console.log(f2('user.name=Alex&user.name=Oleg'));
console.log(f2('foo.bar27=194d5a7e083f4d3241bd23e2dc2a1e18&boo.foo="10"'));
console.log(f2('foo.bar=hello=world&loo.id=rgg=ergeg'));
console.log(f2(''));

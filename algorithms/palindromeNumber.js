// 앞에서 읽어도 뒤에서 읽어도 동일한 숫자인지.
const isPalindrome = (x) => {
  const toStringInput = x.toString();
  const reverse = toStringInput.split('').reverse().join('');

  return toStringInput === reverse;
}


console.log(isPalindrome(-153));
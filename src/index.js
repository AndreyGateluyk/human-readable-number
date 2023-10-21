const upToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


module.exports = function toReadable(number) {

  let string = ''

  if (number < 20) {
    string += upToTwenty[number]
  } 
  else if (number < 100) {
    string += tens[~~(number / 10)] + (number % 10 > 0 ? ' ' + toReadable(number % 10) : '')
  } 
  else if (number < 1000) {
    string += upToTwenty[~~(number / 100)] + ' hundred' + (number % 100 > 0 ? ' ' + toReadable(number % 100) : '')
  }
  return string
}

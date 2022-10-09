//将一个字符串首字母大写
const capital=([first,...rest],lowerrest=true)=> {
   return first.toUpperCase()+lowerrest?rest.join('').toLowerCase():rest.join('')
}
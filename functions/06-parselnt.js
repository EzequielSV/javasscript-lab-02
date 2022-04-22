var oneNum = 1
var oneStr = '1'

// The == operator performs a cast before comparing
// So, don't use it
if (oneNum == oneStr){
    console.log('Son iguales!')
}else{
    console.log('Son diferentes!')
}
// Use the '===' instead
// poarteInt() takes a string a tries to convert the value to a number
if (oneNum === parseInt(oneStr)){
    console.log('Son iguales!')
}else{
    console.log('Son diferentes!')
}
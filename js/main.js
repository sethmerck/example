

function abbrevName(name){

    return name.split(' ').map(name => name.charAt(0)).join('.')
}
console.log(abbrevName('Josh McCormack'))
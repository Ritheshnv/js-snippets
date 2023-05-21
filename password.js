const validPassword = (password) => {
    //const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!"£$()?>,<./])(?!.*\s).{8,}$/
    let oneLowerCharacterRegex = /(?=.+[a-z])/;
    let oneUpperCharacterRegex = /(?=.+[A-Z])/;
    let oneSpecialCharacterRegex = /(?=.+[!"£$%^&*()])/;
    let oneNumberRegex = /(?=.+[0-9])/;
    let eightDigits = /(?=.{8,})/;
    let noSpaceRegex = /!=.*\s/;

    let isValid = oneLowerCharacterRegex.test(password) && oneUpperCharacterRegex.test(password) && oneNumberRegex.test(password) && oneSpecialCharacterRegex.test(password) && eightDigits.test(password)
    return isValid ? 'Password is valid' : 'Invalid Password';
}

console.log(validPassword('dA1a23d'));
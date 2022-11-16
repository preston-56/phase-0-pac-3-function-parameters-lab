
function introduction(name) {
    const personName = `Hi, my name is ${name}.`;
    return personName
}

function introductionWithLanguage(name,language) {
    const studentOneIntroduction= `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return studentOneIntroduction

}

function introductionWithLanguageOptional(name,language="JavaScript") {
    const studentTwoIntroduction = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return studentTwoIntroduction

}

console.log();
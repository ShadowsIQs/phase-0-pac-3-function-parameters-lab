function introduction(name){
    console.log(name)
    return (`Hi, my name is ${name}.`)
    
}
console.log(introduction("Ronald"))

function introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(introductionWithLanguage(irene, CPP))

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
    
}
console.log(introductionWithLanguageOptional(Jason, HTML))
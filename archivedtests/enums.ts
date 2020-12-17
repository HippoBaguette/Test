enum Languages{
    Typescript,
    Java,
    Javascript,
    Rust,
    CPlusPlus,
    CSharp
}

var HippoBaguttePreferedLanguage: string = Languages[1];
console.log(HippoBaguttePreferedLanguage);
console.log("After learning some other languages");
HippoBaguttePreferedLanguage = Languages[0];
console.log(HippoBaguttePreferedLanguage);
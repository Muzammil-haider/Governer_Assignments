//problem no: 37
function make_shirts2(size, tense) {
    if (size === void 0) { size = "large"; }
    if (tense === void 0) { tense = "free Phalestine"; }
    console.log("The size of the shirt will be ".concat(size, " and the sentence that will be print on  the shirt was ").concat(tense));
}
function make_shirts3(tense, size) {
    if (size === void 0) { size = "large"; }
    console.log("The size of the shirt will be ".concat(size, " and the sentence that will be print on  the shirt was ").concat(tense));
}
make_shirts2("small");
make_shirts3("I love Typescript");
make_shirts2("medium", "Hurry!!!");

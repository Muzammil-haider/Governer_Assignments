//problem no: 43
var Magicians_lists = ["David Copperfield", "David blaine", "Criss Angle"];
function show_magicians1(list) {
    for (var i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}
var new_lists = [];
function make_great1(list, new_lists) {
    for (var i = 0; i < list.length; i++) {
        new_lists[i] = "great ts";
    }
    return new_lists;
}
make_great1(Magicians_lists, new_lists);
show_magicians1(Magicians_lists);

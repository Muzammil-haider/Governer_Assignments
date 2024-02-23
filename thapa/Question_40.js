// problem no: 40
var Album1 = /** @class */ (function () {
    function Album1(Artist_name, Album_title) {
    }
    return Album1;
}());
function make_Album1(Artist_name, Album_title, tracks) {
    var album = new Album1(Artist_name, Album_title);
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_Album1("Carlos Santana", "oneness"));
console.log(make_Album1("A. R. Rahman", "connections", 12)); // includes the number of tracks
console.log(make_Album1("Taylor Swift", "Midnight"));

// problem no: 40
class Album1{
    Artist_name:string;
    Album_title:string;
    tracks?:number;
    constructor(Artist_name:string,Album_title:string){

    }

}
function make_Album1(Artist_name,Album_title,tracks?){
    
    let album =new Album1(Artist_name,Album_title);

    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_Album1("Carlos Santana", "oneness"));
console.log(make_Album1("A. R. Rahman", "connections", 12)); // includes the number of tracks
console.log(make_Album1("Taylor Swift", "Midnight"));
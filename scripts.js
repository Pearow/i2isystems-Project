function getLyrics() {
    document.getElementById("errMain").innerHTML = "";
    let artist = document.getElementById("aname").value;
    let songName = document.getElementById("sname").value;

    if (artist.trim() === "" || songName.trim() === ""){
        if(artist === "")
            document.getElementById("errMain").innerHTML = "Artist name can't be blank";
        if(songName === "")
            document.getElementById("errMain").innerHTML = "Song name can't be blank";
        return;
    }

    fetch("https://api.lyrics.ovh/v1/" + artist + "/" + songName)
        .then(res => res.json())
        .then(data => {
            if (data.lyrics != null) {
                document.getElementById("stitle").innerHTML = songName;
                document.getElementById("lyrics").innerHTML = data.lyrics;
            }
            else
                document.getElementById("errMain").innerHTML = data.error;
        })
}

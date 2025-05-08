function getLyrics() {
    document.getElementById("errMain").innerHTML = "";
    document.getElementById("errSong").classList.replace("error", "errorNo");
    document.getElementById("errArtist").classList.replace("error", "errorNo");
    let artist = document.getElementById("inputArtist").value;
    let songName = document.getElementById("inputSong").value;

    if (artist.trim() === "" || songName.trim() === ""){
        if(artist === "")
            document.getElementById("errArtist").classList.replace("errorNo", "error");
        if(songName === "")
            document.getElementById("errSong").classList.replace("errorNo", "error");
        return;
    }

    fetch("https://api.lyrics.ovh/v1/" + artist + "/" + songName)
        .then(res => res.json())
        .then(data => {
            if (data.lyrics != null) {
                document.getElementById("SongTitle").innerHTML = songName;
                document.getElementById("lyrics").innerHTML = data.lyrics;
            }
            else
                document.getElementById("errMain").innerHTML = data.error;
        })
}

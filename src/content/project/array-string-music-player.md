---
title: 'Array String Music Player'
description: 'A music player that was created to showcase my ability to use array and string methods in JavaScript to create something cool.'
pubDate: 'Mar 01 2024'
heroImage:
    url: '/array-string-music-player.jpg'
    alt: 'Array String Music Player'
platform: Web
stack: ['HTML', 'JS', 'CSS']
website: https://array-string-music-player.netlify.app/ 
github: https://github.com/GeauxWeisbeck4/array-string-music-player 
---

The Array String Music Player was created as a result of completing the array and string method challenge as a part of the [FreeCodeCamp.org JavaScript Data Structures and Algorithms](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) course. 

The project involves using fundamental JavaScript concepts such as dynamically updating a user interface, handling audio playback, and using string and array methods to create a fully functioning, MP3 audio player. Some of the key methods that were practiced in this project were `find()`, `forEach()`, `map()`, and `join()`, which are critical for use in developing dynamic web applications. 

## Array and String Methods 

Here is a bit more about the main array and string methods that were used in this project.

- [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

The `find()` method returns the first element in an array that satisfies the condition of it's callback function. If no element satisfies that condition, `undefined` is returned.

An example of using the `find()` method in this project was in the `playSong` function shown below:

```javascript
const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");

  highlightCurrentSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
  audio.play();
};
```

- [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

The `forEach()` method is an iterative method that executes a function for each element in an array.

The `forEach()` method was used in this project when I created the `highlightCurrentSong()` function. It removes the aria-current attribute in this function from all the elements that are not supposed to be highlighted so that we can set the attribute on the song that is supposed to be highlighted to the boolean value of `true`, highlighting the song that is playing from the playlist.

```javascript
const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`
  );

  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });

  if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};
```

- [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

The `map()` method populates a new array with the result of calling a function on each element in an initial array.

I used the `map()` method in the following `renderSongs()` function to map out each song in the playlist and create the elements that display the songs to be shown in the MP3 player's playlist.

```javascript
const renderSongs = (array) => {
  const songsHTML = array
    .map((song)=> {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
      </li>
      `;
    })
    .join("");

  playlistSongs.innerHTML = songsHTML;
};
```

- [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

The `join()` method concatenates all of the elements in an array and returns a string. They are separated by a comma or specified separator string, unless there is only one element in the array.

You can refer to the previous example shown above for the `renderSongs()` function in displaying how the `join()` method was used in this project. It was used to join all of the elements that were mapped into the playlist array together.

## Conclusion and Next Steps

There were a lot of important concepts reviewed in this project and it motivated me to start working on more interview problems that give me the opportunity to practice these methods. I will share some examples of these in future blog posts. 

I also intend on expanding more on this project in the future when I have more time. For example, I would like to use the SoundCloud API to give the user the ability to add their own songs to the playlist so there is more variety available to the listener. 



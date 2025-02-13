/*
Native Array Methods pt.2 continues with the same dataset: songs. All required functions and array methods (forEach, map, find, some/every, sort) are combined into a single file, each addressing a distinct problem.
*/


const { log } = require("console");
const exampleSongData = require("./data/songs");
const { title } = require("process");
// Do not change the line above.


// #1
/**
 * Returns the titles of songs sorted alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Sorted song titles.
 */
function getSortedTitles(songs) {
  return songs.map(song=> song.title).sort();
}

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  const filters = songs.filter(song => {
    if(song.album == albumName) return song.title;
  })
  return filters.map(song => song.title);
} 
// console.log(getSongsFromAlbum(exampleSongData,'Bluewerks Vol. 1: Up Down Left Right'))

// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
function categorizeSongsByRuntime(songs) {
  const obj = {
    longSongs: 0,
    mediumSongs: 0,
    shortSongs: 0
  }
  let arr = songs.map(song=> song.runtimeInSeconds).sort();
  for (let t of arr){
    if (t>240) obj.longSongs++;
    else if(t<180) obj.shortSongs++;
    else obj.mediumSongs ++; 
  }
  return obj;
}
// console.log (categorizeSongsByRuntime(exampleSongData))

// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) {
  let obj = {};
  let album = '';
  let count = 0;
  songs.forEach(song => {
    if (obj[song.album]==null ) obj[song.album] = 1;
    else obj[song.album]++;
    
    if (obj[song.album] > count){
      count=obj[song.album];
      album = song.album;
    }
  })
  return album;
}
// console.log(findAlbumWithMostSongs(exampleSongData))

// #5
/**
 * Returns details of the first song in a specific album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {Object|null} First song object in the album or null.
 */
function getFirstSongInAlbum(songs, albumName) {
  return songs.find(song => song.album == albumName);
}
// console.log(getFirstSongInAlbum(exampleSongData, 'Bi-To Te-Pu'))

// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) {
  return songs.some(song => song.runtimeInSeconds>runtime);
}
// console.log(isThereLongSong(exampleSongData,200))

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {
  songs.forEach(song => song.durationInMinutes = song.runtimeInSeconds/60);
  return songs;
}
// getSongsWithDurationInMinutes(exampleSongData)
// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {
  let arr = songs.map(song=> song.album).sort().reverse();
  let arr2=[];
  return arr.filter(alb => {
    if (!arr2.includes(alb)){
      arr2.push(alb);
      return alb;
    }
  })
}
// console.log(getAlbumsInReverseOrder(exampleSongData))
// #9
/**
 * Returns a list of song titles that contain a specific word.
 * @param {Object[]} songs - An array of songs.
 * @param {string} word - The word to search for in song titles.
 * @returns {string[]} An array of song titles containing the word.
 */
function songsWithWord(songs, word) {
  return songs.filter(song => song.title.includes(word)).map(x=>x.title);
}
// console.log(songsWithWord(exampleSongData,'Berlin'))


// #10
/**
 * Returns the total runtime of songs by a specific artist.
 * @param {Object[]} songs - An array of songs.
 * @param {string} artistName - Name of the artist.
 * @returns {number} Total runtime in seconds.
 */
function getTotalRuntimeOfArtist(songs, artistName) {
  let count = 0;
  songs.forEach(song => {
    if(song.artist == artistName ) count += song.runtimeInSeconds;
  })
  return count;
}

// console.log(getTotalRuntimeOfArtist(exampleSongData, 'Saib'))

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */
function printArtistsWithMultipleSongs(songs) {
  let obj ={}
  let arr = songs.map(song => song.artist)
  for (let art of arr){
    if(obj[art]==null) obj[art] = 1;
    else obj[art]++;
  }
  for (let key in obj)
    if(obj[key]>1) console.log(key);
}
// printArtistsWithMultipleSongs(exampleSongData)

// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {
  let longestSong = '';
  let count = 0;
  songs.forEach(song =>{
    if(song.title.length>count){
      count = song.title.length;
      longestSong = song.title;
    }
  })
  console.log(longestSong);
}
// printLongestSongTitle(exampleSongData)


// Problem #13
/**
 * Sorts songs by artist name, then by song title alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Sorted array of songs.
 */
function sortSongsByArtistAndTitle(songs) {
  return songs.sort((a, b) => a.artist.localeCompare(b.artist) || a.title.localeCompare(b.title));
}
// console.log(sortSongsByArtistAndTitle(exampleSongData))

// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {
  let obj = {}
  songs.forEach(song =>{
    if(obj[song.album] == null) obj[song.album] = song.runtimeInSeconds;
    else obj[song.album] += song.runtimeInSeconds;  
  })
  return obj;
}
// console.log(listAlbumTotalRuntimes(exampleSongData))

// Problem #15
/**
 * Finds the first song with a title starting with a specific letter.
 * @param {Object[]} songs - An array of songs.
 * @param {string} letter - The letter to search for.
 * @returns {Object|null} The first song object that matches the criterion or null.
 */
function findFirstSongStartingWith(songs, letter) {
  let obj ={};
  obj = songs.find(song => song.title[0]== letter);
  return obj;
}
// console.log(findFirstSongStartingWith(exampleSongData,'P'))

// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */
function mapArtistsToSongs(songs) {
  let obj = {};
  songs.forEach(song =>{
    if(obj[song.artist]==null) obj[song.artist] = [`${song.title}`];
    else obj[song.artist].push(song.title);
  })
  return obj
}
// console.log(mapArtistsToSongs(exampleSongData))

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) {
  let obj = {};
  songs.forEach(song =>{
    if(obj[song.album] == null){
      obj[song.album] = [song.runtimeInSeconds, 1];
    }else{
      obj[song.album][0] += song.runtimeInSeconds;
      obj[song.album][1] ++;
    }
  })
  let longestAvRuntime = '';
  let count = 0;
  for (let key in obj){
    if(obj[key][0]/obj[key][1]>count){
      count= obj[key][0]/obj[key][1];
      longestAvRuntime = key;
    }
  }
  return longestAvRuntime
}
// console.log(findAlbumWithLongestAverageRuntime(exampleSongData))

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
  let arr = songs.sort((a,b) => a.runtimeInSeconds - b.runtimeInSeconds).map(song => song.title);
  arr.forEach(title => console.log(title));
}
// printSongsSortedByRuntime(exampleSongData)

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
  let objAlbSum = {}
  songs.forEach(song => {
    if (objAlbSum[song.album]==null) {
      objAlbSum[song.album] = { totalRuntime: 0, count: 0 };
    }
    objAlbSum[song.album].totalRuntime += song.runtimeInSeconds;
    objAlbSum[song.album].count++;
  });

  for(let key in objAlbSum){
    console.log (`${key}: ${objAlbSum[key].count} songs, Total Runtime: ${objAlbSum[key].totalRuntime} seconds`)
  }
}
// printAlbumSummaries(exampleSongData)

// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  let artistAndSongs = {}
  let artist = ''
  let count = 0
  songs.forEach(song =>{
    if(artistAndSongs[song.artist]==null) artistAndSongs[song.artist] = 1
    else artistAndSongs[song.artist]++;

    if(artistAndSongs[song.artist]>count){
      artist = song.artist
      count = artistAndSongs[song.artist]
    } 
  })
  return artist
}
// console.log(findArtistWithMostSongs(exampleSongData))


module.exports = {
  getSortedTitles,
  getSongsFromAlbum,
  categorizeSongsByRuntime, 
  findAlbumWithMostSongs,
  getFirstSongInAlbum,
  isThereLongSong,
  getSongsWithDurationInMinutes,
  getAlbumsInReverseOrder,
  songsWithWord,
  getTotalRuntimeOfArtist,
  printArtistsWithMultipleSongs,
  sortSongsByArtistAndTitle,
  printLongestSongTitle,
  listAlbumTotalRuntimes,
  findFirstSongStartingWith,
  mapArtistsToSongs,
  findAlbumWithLongestAverageRuntime,
  printSongsSortedByRuntime,
  printAlbumSummaries,
  findArtistWithMostSongs
};;

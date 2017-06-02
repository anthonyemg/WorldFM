export function togglePlay(src = '') {
  return {
    type: 'TOGGLE_PLAY',
    src,
  };
}

export function setPlaylist(playlist) {
  return {
    type: 'SET_PLAYLIST',
    playlist,
  };
}

export function setCurrentCountry(country) {
  return {
    type: 'SET_CURRENT_COUNTRY',
    country,
  };
}

export function setCurrentTrend(trend) {
  return {
    type: 'SET_CURRENT_TREND',
    trend,
  };
}

export function setWindowSize() {
  return {
    type: 'WINDOW_RESIZE',
  };
}

export function openSongMenu(index) {
  return {
    type: 'OPEN_SONG_MENU',
    index,
  };
}

export function closeSongMenu() {
  return {
    type: 'CLOSE_SONG_MENU',
  };
}

// Spotify Player

export function setSpotifyPlayerVolume(v) {
  return {
    type: 'SET_SPOTIFY_PLAYER_VOLUME',
    volume: v,
  };
}

export function addTrackToSpotifyQueue(track) {
  return {
    type: 'ADD_TRACK_TO_SPOTIFY_QUEUE',
    track: track,
  };
}

export function removeTrackFromSpotifyQueue(song) {
  return {
    type: 'REMOVE_TRACK_FROM_SPOTIFY_QUEUE',
    track: song,
  };
}

export function playSpotifyPlayer(currentTrack) {
  return {
    type: 'PLAY_SPOTIFY_PLAYER',
    currentTrack,
  };
}

export function pauseSpotifyPlayer(track) {
  return {
    type: 'PAUSE_SPOTIFY_PLAYER',
  };
}

export function setSpotifyPlayerMute(mute) {
  return {
    type: 'SET_SPOTIFY_PLAYER_MUTE',
    mute,
  };
}

export function setSpotifyPlayerSeekerEl(el) {
  return {
    type: 'SET_SPOTIFY_PLAYER_SEEKER_EL',
    el,
  };
}

export function setSpotifyPlayerEllapsed(ellapsed) {
  return {
    type: 'SET_SPOTIFY_PLAYER_ELLAPSED',
    ellapsed,
  };
}

export function setSpotifyPlayerInterval(interval) {
  return {
    type: 'SET_SPOTIFY_PLAYER_INTERVAL',
    interval,
  };
}
export function clearSpotifyPlayerInterval(interval) {
  return {
    type: 'CLEAR_SPOTIFY_PLAYER_INTERVAL',
  };
}

export function showLightbox(src) {
  return {
    type: 'SHOW_LIGHTBOX',
    src,
  };
}

export function setFavorites(favorites) {
  return {
    type: 'SET_FAVORITES',
    favorites,
  };
}

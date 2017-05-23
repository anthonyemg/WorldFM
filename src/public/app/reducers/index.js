import { combineReducers } from 'redux';
import samplePlaylist from '../config/samplePlaylist';
import {reducer as burgerMenu} from 'redux-burger-menu';

function playlist(state = samplePlaylist, action) {
  switch (action.type) {
    case 'SET_PLAYLIST':
      return action.playlist;
    default:
      return state;
  }
}

function currentSong(state = '', action) {
  switch (action.type) {
    case 'PLAY_PREVIEW':
      return action.previewUrl;
    default:
      return state;
  }
}

function burgerMenu(state = '', action) {
  
}

const reducer = combineReducers({
  playlist,
  currentSong,
  burgerMenu
});

export default reducer;

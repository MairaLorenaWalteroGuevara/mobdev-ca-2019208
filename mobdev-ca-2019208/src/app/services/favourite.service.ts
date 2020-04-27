import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const STORAGE_KEY = 'favouriteEpisodes';
const STORAGE_KEY1 = 'favouriteCharacters';
 
@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
 
  constructor(private storage: Storage) { }
 
  // add constructors with 4 funtions, to have favorite or unfavorite episodes
  getAllFavouriteEpisodes() {
    return this.storage.get(STORAGE_KEY);
  }
 
  isFavourite(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
      return result && result.indexOf(episodeId) !== -1;
    });
  }
 
  favouriteEpisode(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        result.push(episodeId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [episodeId]);
      }
    });
  }
 
  unfavouriteEpisode(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        var index = result.indexOf(episodeId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllFavouriteCharacters() {
    return this.storage.get(STORAGE_KEY1);
  }
 
  isFavouriteCharacter(characterId) {
    return this.getAllFavouriteCharacters().then(result => {
      return result && result.indexOf(characterId) !== -1;
    });
  }
 
  favouriteCharacter(characterId) {
    return this.getAllFavouriteCharacters().then(result => {
      if (result) {
        result.push(characterId);
        return this.storage.set(STORAGE_KEY1, result);
      } else {
        return this.storage.set(STORAGE_KEY1, [characterId]);
      }
    });
  }
 
  unfavouriteCharacter(characterId) {
    return this.getAllFavouriteCharacters().then(result => {
      if (result) {
        var index = result.indexOf(characterId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY1, result);
      }
    });
  }
 
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Music } from '../models/musicModels';
import { musics } from './../mock-musics';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  
  constructor() { }

  getMusics(): Observable<Music[]> {
    const music = of(musics);
    return music;
  } 
}

import { Injectable } from '@angular/core';
import { Music } from '../models/musicModels';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  musics: Music[] = [
    { name: '屋顶', singer: '温岚，周杰伦', audio: new Audio('http://music.163.com/song/media/outer/url?id=298317.mp3') },
    { name: '小时候', singer: '南拳妈妈，周杰伦', audio: new Audio('http://music.163.com/song/media/outer/url?id=368827.mp3') }
  ];

  constructor() { }
}

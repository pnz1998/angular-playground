import { Component, OnInit } from '@angular/core';

export interface Music {
  name: string,
  singer: string,
  url: string
}

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  currentPlay: string ='http://music.163.com/song/media/outer/url?id=298317.mp3'
  audioObj = new Audio(this.currentPlay);
  

  constructor() { }

  ngOnInit(): void {
    const myAudio = document.getElementById("myAudio");
    if(!myAudio) return 
    myAudio.addEventListener('pause', event => {
      console.log('load')
    })
  };

  musics: Music[] = [
    { name: '屋顶', singer: '温岚，周杰伦', url: 'http://music.163.com/song/media/outer/url?id=298317.mp3' },
    { name: '小时候', singer: '南拳妈妈，周杰伦', url: 'http://music.163.com/song/media/outer/url?id=368827.mp3' }
  ];

  play() {
    console.log(this.audioObj.duration);
  };

  pre() {
    const myAudio = document.getElementById("myAudio");
    this.currentPlay = 'http://music.163.com/song/media/outer/url?id=298317.mp3';
    if(!myAudio) return 
    myAudio.addEventListener('play', event => {
      console.log('play')
    })
  };

  next() {
    const myAudio = document.getElementById("myAudio");
    if(!myAudio) return 
    myAudio.addEventListener('load', event => {
      console.log('load')
    })
  }
}
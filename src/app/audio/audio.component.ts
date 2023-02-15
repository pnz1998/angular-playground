import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import momentDurationFormatSetup from "moment-duration-format";
import { BehaviorSubject, fromEvent, Observable, Subject } from 'rxjs';
momentDurationFormatSetup(moment);

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
  currentPlay: string ='';
  audioObj = new Audio(this.currentPlay);
  musicCurrentTime = '00:00';
  musicDuration = '00:00';
  
  constructor() { }

  ngOnInit(): void {
    
  };

  musics: Music[] = [
    { name: '屋顶', singer: '温岚，周杰伦', url: 'http://music.163.com/song/media/outer/url?id=298317.mp3' },
    { name: '小时候', singer: '南拳妈妈，周杰伦', url: 'http://music.163.com/song/media/outer/url?id=368827.mp3' }
  ];

  play() {
    // this.musicDuration = moment.duration(this.audioObj.duration, "seconds").format("mm:ss");
  };

  pre() { };

  next() { };

  selectionChange(value: Music) {
    this.currentPlay = value.url;
    console.log(this.audioObj.duration)
    this.musicDuration = moment.duration(this.audioObj.duration, "seconds").format("mm:ss");
  };
}
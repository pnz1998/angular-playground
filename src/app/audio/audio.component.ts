import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import momentDurationFormatSetup from "moment-duration-format";
import { Music } from '../core/models/musicModels';
import { MusicService } from '../core/services/music.service';
momentDurationFormatSetup(moment);

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  currentPlay = new Audio();
  musicCurrentTime = '00:00';
  musicDuration = '00:00';
  musics: Music[] = [];

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.musics = this.musicService.musics
  }

  play() {
    this.musicDuration = moment.duration(this.currentPlay.duration, "seconds").format("mm:ss");
  };

  pre() { };

  next() { };

  selectionChange($event: any) {
    this.currentPlay = $event.option.value.audio;
    this.musicDuration = moment.duration($event.option.value.audio.duration, "seconds").format("mm:ss");
  };
}
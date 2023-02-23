import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import momentDurationFormatSetup from "moment-duration-format";
import { Music } from '../core/models/musicModels';
import { MusicService } from '../core/services/music.service';
import { interval } from 'rxjs';
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
  currentTime$ = interval(1000);
  minValue = 0
  maxValue = 0
  currentValue = 0

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
  }

  getMusics() {
    this.musicService.getMusics()
      .subscribe(musics => this.musics = musics);
  }

  play() {
    this.currentPlay.play();
    console.log(this.maxValue)
    let subscription = this.currentTime$.subscribe(() => {
      this.currentValue += 1;
      this.musicCurrentTime = moment.duration(this.currentPlay.currentTime, "seconds").format("mm:ss", { trim: false });
    });
  };

  pre() { };

  next() { };

  selectionChange($event: any) {
    this.currentPlay = $event.option.value.audio;
    this.maxValue = $event.option.value.audio.duration;
    this.musicDuration = moment.duration($event.option.value.audio.duration, "seconds").format("mm:ss");
  };
}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VoiceModel } from './voice.model';


@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit {

  public hover = false;
  @Input() voiceData: VoiceModel;
  @Output() deselectAll = new EventEmitter<any>();
  @Output() favClick = new EventEmitter<VoiceModel>();

  assetsPath = "../../assets/";

  constructor() { }

  ngOnInit(): void {
  }

  selectVoice(): void {
    this.deselectAll.next(this.voiceData.id);
    this.voiceData.selected = !this.voiceData.selected;
  }

  saveAsFav(evt): void {
    evt.stopPropagation();
    this.voiceData.fav = !this.voiceData.fav;
    this.favClick.emit(this.voiceData);
  }

}

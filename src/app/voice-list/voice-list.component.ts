import { Component, OnInit, Input, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { VoiceModel } from '../voice/voice.model';
import { VoiceComponent } from '../voice/voice.component';

@Component({
  selector: 'app-voice-list',
  templateUrl: './voice-list.component.html',
  styleUrls: ['./voice-list.component.scss']
})
export class VoiceListComponent implements OnInit {
  @Input() voiceListItem: VoiceModel[] = [];
  @Input() title: string;
  @ViewChildren(VoiceComponent) voiceComponentChildren: QueryList<VoiceComponent>;
  @Output() favClick = new EventEmitter<VoiceModel>();

  constructor() { }

  ngOnInit(): void {
  }

  deselectAll(id: string): void {
    let voiceComponents: VoiceComponent[] = this.voiceComponentChildren.toArray();

    voiceComponents.forEach((item) => {
      if (item.voiceData.id != id) {
        item.voiceData.selected = false;
      }
    })
  }

  updateFavList(item: VoiceModel) {
    this.favClick.emit(item);
  }

}

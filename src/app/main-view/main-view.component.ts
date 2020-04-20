import { Component, OnInit } from '@angular/core';
import { MainViewService } from './main-view.service';
import { VoiceModel } from '../voice/voice.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  voicesListOriginal: VoiceModel[];
  voicesList: VoiceModel[];
  voicesListFav: VoiceModel[] = [];
  voiceListCategories = [];
  ascending = 0;
  descending = 1;

  constructor(private mainViewService: MainViewService) { }

  ngOnInit(): void {
    this.mainViewService.getVoices().then((res: VoiceModel[]) => {
      this.voicesListOriginal = res;
      this.voicesList = this.voicesListOriginal;

      res.forEach(item => {
        if (!this.voiceListCategories.includes(item.tags[0])) {
          this.voiceListCategories.push(...item.tags)
        }
      })

      this.onSearch({
        "search": "",
        "category": "all",
        "order": 0
      });
    });
  }

  updateFavList(item: VoiceModel) {
    if (this.voicesListFav.some(voice => voice.id === item.id)) {
      this.voicesListFav.splice(this.voicesListFav.findIndex(obj => obj.id === item.id), 1)
    } else {
      this.voicesListFav.push(item);
    }
  }

  onSearch(filters) {
    this.voicesList = this.voicesListOriginal;
    if (filters.search) {
      this.voicesList = this.voicesListOriginal.filter((item) => {
        return item.name.toLowerCase().includes(filters.search.toLowerCase());
      })
    }
    if (filters.category !== "all") {
      this.voicesList = this.voicesList.filter((item) => {
        return item.tags.includes(filters.category);
      })
    }

    this.voicesList.sort((voice1, voice2) => {
      if (filters.order == this.ascending) {
        return voice1.name > voice2.name ? 1 : -1;
      } else if (filters.order == this.descending) {
        return voice1.name < voice2.name ? 1 : -1;
      }
    });
  }

  selectRandom() {
    this.voicesList.forEach(item => item.selected = false);
    this.voicesList[Math.floor(Math.random() * this.voicesList.length)].selected = true;
  }
}

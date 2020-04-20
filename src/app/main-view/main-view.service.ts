import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { VoiceModel } from '../voice/voice.model';

@Injectable()
export class MainViewService { 

    constructor(private httpClient: HttpClient) {
        
    }

    getVoices(): Promise<VoiceModel[]> {
        return this.httpClient.request('GET', '/assets/data/voices.json')
            .toPromise().then((data: VoiceModel[]) => {
                return data;
            });
    }
  
}
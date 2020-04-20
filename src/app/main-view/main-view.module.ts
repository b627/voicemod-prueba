import { NgModule } from "@angular/core";
import { MainViewComponent } from './main-view.component';
import { mainViewRouting } from './main-view-routing.module';
import { VoiceComponent } from '../voice/voice.component';
import { CommonModule } from '@angular/common';
import { VoiceListComponent } from '../voice-list/voice-list.component';
import { MainViewService } from './main-view.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
imports:[
    mainViewRouting,
    CommonModule,
    FormsModule
],
declarations: [
    MainViewComponent,
    ToolbarComponent,
    VoiceComponent,
    VoiceListComponent
],
providers: [
    MainViewService
],
entryComponents: [
    MainViewComponent
]})

export class MainViewModule { }
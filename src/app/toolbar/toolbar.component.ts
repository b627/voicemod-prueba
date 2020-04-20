import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() voiceCategories: string[];
  @Output() filterOptions = new EventEmitter<object>();
  @Output() randomize = new EventEmitter<any>();

  assetsPath = "../../assets/";
  ordering = [{ id: 0, name: "Name: Ascending" }, { id: 1, name: "Name: Descending" }];
  searchValue: string = "";
  categoryFilter: string = "all";
  orderFilter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  clearSearch() {
    this.searchValue = "";
    this.filter();
  }

  randomVoice() {
    this.randomize.emit();
  }

  filter() {
    this.filterOptions.emit({
      "search": this.searchValue,
      "category": this.categoryFilter,
      "order": this.orderFilter
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  history: any[] = [];
  displayedColumns: string[] = ['username', 'result', 'actions'];

  ngOnInit() {
    this.history = LocalStorageService.getSearchHistory();
  }

  clearSearch(username: string) {
    LocalStorageService.clearSearch(username);
    this.history = LocalStorageService.getSearchHistory();
  }
}

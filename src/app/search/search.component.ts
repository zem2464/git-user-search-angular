import { Component } from '@angular/core';
import { GithubService } from '../github.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  username: string = '';
  user: any;
  noUser: boolean = false

  constructor(private githubService: GithubService) { }

  search() {
    this.noUser = false;
    this.user = false
    this.githubService.searchUser(this.username).subscribe(
      (data) => {
        this.user = data;
        this.saveToHistory();
      },
      (error) => {
        console.log("no result returnd")
        this.saveToHistory();
        this.noUser = true
      }
    );
  }

  saveToHistory() {
    const history = LocalStorageService.getSearchHistory();
    if (!history.find(f => f.searchTerm === this.username))
      history.push({ searchTerm: this.username, result: !this.noUser && this.user });
    LocalStorageService.saveSearchHistory(history);
  }
}

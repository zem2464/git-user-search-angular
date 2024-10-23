import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: any;
  @Input() userData!: any
  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username')!
    this.user = this.userData;
    if(!this.user)
    this.githubService.searchUser(username).subscribe((data) => {
      this.user = data;
    });
  }
}

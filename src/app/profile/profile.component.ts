import { Component, OnInit } from '@angular/core';

import {GithubService} from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  userData: any[];
  userRepos: any[];
  username: string;

  constructor(private github: GithubService) { }

  ngOnInit() {}

  searchUser() {
    setTimeout(() => {
      if (!this.username) {
        return;
      }

      this.github.getUser(this.username).subscribe((user: any) => {
        this.userData = user;
      });

      this.github.getRepos(this.username).subscribe((repos: any) => {
        this.userRepos = repos;
      });
    }, 1000);
  }
}

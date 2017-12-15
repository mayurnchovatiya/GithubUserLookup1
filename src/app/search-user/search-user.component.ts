import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
  providers: [UserService]
})
export class SearchUserComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  userDetail = {};
  repos = [];
  submitted = false;

  getUser(name: string): void {
    this.userService.getUser(name)
      .subscribe((user) => {
        this.userService.getRepo(user.repos_url)
          .subscribe((repos) => {
            this.repos = repos;
            this.userDetail = user;
            this.submitted = true;
          });
      });
  }
}

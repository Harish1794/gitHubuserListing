import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allUser: any;
  searchUser = '';
  searchResult: any = {};

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllUser();
  }

  search() {
    // console.log(this.searchUser);
    this.sharedService.searchByName(this.searchUser).subscribe((res: any) => {
      this.allUser = res.items;
      console.log(this.searchResult);
    });
  }

  reloadList() {
    this.searchUser = '';
    this.getAllUser();
  }


  getAllUser() {
    this.sharedService.allUser().subscribe((res: any) => {
      console.log(res);
      this.allUser = res;
    });
  }

  selectedUser(user) {
    this.router.navigate(['details'], { queryParams: { userName: user.login } });
  }


}

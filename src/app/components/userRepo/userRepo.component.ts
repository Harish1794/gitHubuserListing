import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-userRepo',
  templateUrl: './userRepo.component.html',
  styleUrls: ['./userRepo.component.scss']
})
export class UserRepoComponent implements OnInit {
  userName: any;
  repository: any;

  constructor(private sharedService: SharedService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap
    .subscribe((params: any) => {
      this.userName = params.params.userName;
      if (this.userName) {
        this.getByUserName();
      }
    });
  }

  getByUserName() {
      this.sharedService.getByUserName(this.userName).subscribe((res: any) => {
        // console.log(res);
        this.repository = res;
      });
    }

}

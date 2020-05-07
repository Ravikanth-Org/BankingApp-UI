import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { AdminService } from '../../_services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  searchId: string;

  constructor(
    public adminService: AdminService,
    private appService: AppService

  ) { }

  ngOnInit() {

  }

  onCreateAccountClick() {
    this.adminService.whichClick = "createUser";
  }

  onOpenAccountClick() {
    this.adminService.whichClick = "openAccount"
  }

  onSearchClick() {
    //  this.router.navigate(['/updateAccount',]);
    // /api/user/:userId
    this.appService.getUserDetails(this.searchId, function (res) {
      if (true) {
        this.router.navigate(['/updateAccount',]);
      }
      console.log(res);
    })
  }
}

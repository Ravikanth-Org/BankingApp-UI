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
    this.adminService.whichClick="updateAccount";
    this.appService.getUserDetails(this.searchId,  (res)=> {
     if(res[0]){
      this.adminService.whichClick="updateAccount";
     }
      console.log(res);
    })
  }
}

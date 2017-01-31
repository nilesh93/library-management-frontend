import { CommonService } from './shared/services/common.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  public options = {
    icons: { success: '', error: '' }
  };
  // subscription: Subscription;

  constructor(private commonService: CommonService) {
    // this.subscription = this.commonService.toastAnnounce$.subscribe(
    //   (options) => {
    //     console.log("options", options);
    //   });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}

import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonContent } from '@ionic/angular';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  users = [];

  constructor(private homeService: HomeService, private router: Router) {
    this.getUsers();
  }

  getUsers() {
    this.homeService
      .getUsersData()
      .subscribe((response: any) => this.users.push(...response));
  }

  loadData(event) {
    setTimeout(() => {
      this.getUsers();
      event.target.complete();
    }, 500);
  }

  onClick() {
    this.router.navigate(['/about']);
  }

  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      // scrolling up
    } else if (event.detail.deltaY > 0) {
      // scrolling down
    }
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}

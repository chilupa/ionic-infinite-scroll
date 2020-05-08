import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonContent } from '@ionic/angular';
import { HomeService } from './home.service';

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

  constructor(private homeService: HomeService) {
    this.getUsers();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.content.scrollToBottom(1500);
    }, 500);
  }

  getUsers() {
    this.homeService
      .getUsersData()
      .subscribe((response: any) => this.users.push([...response]));
    console.log('this users - ', this.users);
  }

  loadData(event) {
    setTimeout(() => {
      this.getUsers();
      event.target.complete();
    }, 500);
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

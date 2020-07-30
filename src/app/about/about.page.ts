import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { GestureController } from '@ionic/angular';
import { Location } from '@angular/common';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit, AfterViewInit {
  @ViewChild('aboutPage', { read: ElementRef, static: false })
  aboutPage: ElementRef;

  constructor(
    private location: Location,
    private gestureCtrl: GestureController,
    private renderer: Renderer2
  ) {}

  async ngAfterViewInit() {
    let gesture = await this.gestureCtrl.create({
      el: this.aboutPage.nativeElement,
      gestureName: 'swipe-left',
      gesturePriority: 100,
      threshold: 5,
      passive: false,
      onStart: () => {
        this.renderer.setStyle(
          this.aboutPage.nativeElement,
          'transition',
          'none'
        );
      },
      onMove: (ev) => {
        if (ev.deltaX > 0) {
          this.renderer.setStyle(
            this.aboutPage.nativeElement,
            'transform',
            `translateX(${ev.deltaX}px)`
          );
        }
      },
      onEnd: (ev) => {
        this.renderer.setStyle(
          this.aboutPage.nativeElement,
          'transition',
          '0.4s ease-out'
        );
        if (ev.deltaX > 100) {
          this.renderer.setStyle(
            this.aboutPage.nativeElement,
            'transform',
            'translateX(400px)'
          );
          this.location.back();
        }
        if (ev.deltaX < 100) {
          this.renderer.setStyle(
            this.aboutPage.nativeElement,
            'transform',
            'translateX(0px)'
          );
        }
      },
    });
    gesture.enable(true);
  }

  ngOnInit() {}
}

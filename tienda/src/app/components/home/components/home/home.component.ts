import { Component, OnInit, AfterViewInit, PLATFORM_ID, inject, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    if (isPlatformBrowser){
      this.mySwiper = new Swiper('.swiper-container');
    }
  }

}

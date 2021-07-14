import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.page.html',
  styleUrls: ['./lottie.page.scss'],
})
export class LottiePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    this.redireccionar();


  }

  options: AnimationOptions = {
    path: '/assets/lottie.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  redireccionar() {

    setTimeout(() => {
      this.router.navigate(['home']);
    }, 2500);
  }

}

import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HyperviserService implements OnInit {
  alphabet;

  ngOnInit(): void {
    this.alphabet = {
      'ba': 'بَ',
      'bi': 'بِ',
      'bou': 'بُ',
      'ka': 'كَ',
      'ki': 'كِ',
      'kou': 'كُ'
    };
  }

  constructor() {
  }
}

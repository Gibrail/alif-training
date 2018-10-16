import {Component, OnInit} from '@angular/core';
import {HyperviserService} from '../hyperviser.service';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.css']
})
export class DisplayScreenComponent implements OnInit {
  randomWordLatin = '';
  randomWordArab = '';
  alphabet;

  constructor() {
  }

  ngOnInit() {
    this.alphabet = {
      'ba': 'بَ',
      'bi': 'بِ',
      'bou': 'بُ',
      'ka': 'كَ',
      'ki': 'كِ',
      'kou': 'كُ'
    };
    this.computeRandomWordLatin();
  }

  computeRandomWordLatin(): void {
    const alphabetLatin = Object.keys(this.alphabet);
    const alphabetArab = Object.values(this.alphabet);
    for (let j = -1; j < Math.ceil(Math.random() * 4); j++) {
      const randomNumber = Math.floor(Math.random() * alphabetLatin.length);
      this.randomWordLatin += '¨';
      this.randomWordLatin += 'o';
      this.randomWordLatin += alphabetLatin[randomNumber];
      this.randomWordArab += alphabetArab[randomNumber];
    }
  }

/*  computeRandomWordLatin(): string {
    let toReturn = '';
    const alphabet = Object.keys(this.alphabet);
    for (let j = -1; j < Math.ceil(Math.random() * 4); j++) {
      toReturn += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return toReturn;
  }

  computeRandomWordArab(): string {
    let toReturn = '';
    const alphabet = Object.values(this.alphabet);
    for (let j = -1; j < Math.ceil(Math.random() * 4); j++) {
      toReturn += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return toReturn;
  }*/

}

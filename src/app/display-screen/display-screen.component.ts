import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.css']
})
export class DisplayScreenComponent implements OnInit {
  randomWordLatin = '';
  randomWordArab = '';
  alphabetSyllabe;
  alphabetSoukoun;
  show = false;

  constructor() {
  }

  toDisplay() {
    this.show = true;
  }

  ngOnInit() {
    this.alphabetSyllabe = {
      'ba': 'بَ',
      'bâ': 'با',
      'bi': 'بِ',
      'bî': 'بي',
      'bou': 'بُ',
      'bôu': 'بو',
      'ka': 'كَ',
      'kâ': 'كا',
      'ki': 'كِ',
      'kî': 'كي',
      'kou': 'كُ',
      'kôu': 'كو',
      'qa': 'قَ',
      'qâ': 'قا',
      'qi': 'قِ',
      'qî': 'قي',
      'qou': 'قُ',
      'qôu': 'قو',
    };

    this.alphabetSoukoun = {
      'b': 'بْ',
      'k': 'كْ',
      'q': 'قْ',
    };

    this.computeRandomWordLatin();
  }

  computeRandomWordLatin(): void {
    let soukounFlag = false;
    const alphabetLatinSyllabe = Object.keys(this.alphabetSyllabe);
    const alphabetLatinSoukoun = Object.keys(this.alphabetSoukoun);
    const alphabetArabSyllabe = Object.values(this.alphabetSyllabe);
    const alphabetArabSoukoun = Object.values(this.alphabetSoukoun);
    for (let j = -1; j < Math.ceil(Math.random() * 4); j++) {

      if (soukounFlag === false) {
        const randomNumber = Math.floor(Math.random() * alphabetLatinSyllabe.concat(alphabetLatinSoukoun).length);
        this.randomWordLatin += alphabetLatinSyllabe.concat(alphabetLatinSoukoun)[randomNumber];
        this.randomWordArab += alphabetArabSyllabe.concat(alphabetArabSoukoun)[randomNumber];

        if (alphabetLatinSoukoun.indexOf(alphabetLatinSyllabe.concat(alphabetLatinSoukoun)[randomNumber]) !== -1) {
          soukounFlag = true;
        }

      } else {
        const randomNumber = Math.floor(Math.random() * alphabetLatinSyllabe.length);
        this.randomWordLatin += alphabetLatinSyllabe[randomNumber];
        this.randomWordArab += alphabetArabSyllabe[randomNumber];
        soukounFlag = false;
      }

    }
  }
}

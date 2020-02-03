import { Component, OnInit } from '@angular/core';
import { GraphModel } from './wordcount';
@Component({
  selector: 'app-word-count',
  templateUrl: './word-count.component.html',
  styleUrls: ['./word-count.component.scss']
})

export class WordCountComponent implements OnInit {
  wordValues = "";
  words: GraphModel[] = [];

  constructor() { }
  ngOnInit() {
  }

  extractJSON(obj) {
    for (const i in obj) {
      this.words.push({ name: i, Count: obj[i] })
    }
  }

  onKey() {
    let count = {};
    this.words = [];
    this.wordValues.split(' ').map((x, i) => {
      if (x.toLowerCase() !== 'and' && x.toLowerCase() !== 'the'
        && x.toLowerCase() !== 'a' && x.toLowerCase() !== 'an' && x !== '') {
        count[x] = (count[x] || 0) + 1;
      }
    });

    this.extractJSON(count);
  }
}

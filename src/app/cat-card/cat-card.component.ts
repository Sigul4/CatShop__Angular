import { from, Observable } from 'rxjs';
import { ICat } from './../cat.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cat-card',
  templateUrl: './cat-card.component.html',
})
export class CatCardComponent implements OnInit {
  @Input() cat: ICat;

  constructor() {}

  ngOnInit() {
    console.log('cat', this.cat);
  }
}

/**
 * Default Form component used in ripalip
 * You need an array of items, probably set up as enums in the app
 * that get brought in to generate the form controls.  That way, if you
 * change the enums, the form itself will change as well.
 * 
 * The markup takes into consideration a different input for 'notes',
 * Validators can be added in the reduce function.  
 * 
 */

 import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Item {
  key: string;
  value: string;
}

@Component({
  selector: 'app-default-form',
  templateUrl: './default-form.component.html',
  styleUrls: ['./default-form.component.scss']
})

export class DefaultFormComponent implements OnInit {
  @Input() public items: Item[];
  @Input() public form: FormGroup;

  static formModel(items: Item[], form = null) {
    return new FormGroup (
      items.reduce((acc, el) => {
        acc[el.key] = new FormControl( form && form[el.key] ? form[el.key] : '');
        return acc;
      }, {})
    );
  }

  constructor() { }

  ngOnInit() {
  }

}

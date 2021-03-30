import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {reg} from './reg';

@Component({
  selector: 'app-register',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reg=new reg();
  register(regForm:NgForm)
  {
    console.log(regForm.value);
  }
}

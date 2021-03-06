import { Component, OnInit, Input } from '@angular/core';
import {Customer} from '../customer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer: Customer;
  constructor( private router: Router) { }

  ngOnInit() {
  }

}
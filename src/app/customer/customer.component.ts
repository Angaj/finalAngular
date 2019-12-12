import { Customer } from './../customer';
import { Component, OnInit,ElementRef } from '@angular/core';
import {CustomerService} from '../customer.service';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  customer : Customer[];
  selectedCustomer: Customer;
  private elRef:ElementRef;
  public show:boolean = false;
  public buttonName:any = 'Inactive';
  statusText: string;
  
  constructor(private customerService: CustomerService, private router : Router ) { }


  ngOnInit() {
    this.getCustomer();
    //this.postCustomer();
  }

  onSelect(customer: Customer) : void{
    this.selectedCustomer= customer;
    
  }  

  getCustomer(): void{
   this.customer = this.customerService.getCustomer()
  }
  
  toggle(status,customerId) {
    // let status = document.getElementById('status-'+id);
    // this.statusText = status.innerText;
    // CHANGE THE NAME OF THE BUTTON.
    status = (status === 'Inactive') ? 'Active' : 'Inactive';
    //customer.status = status;
    this.statusText = status;
    this.customer[customerId].status = this.statusText;
    this.customerService.updateStatus()
      .subscribe(value =>{
        console.log(value);
      });

};
  onNav(){
    const value = this.router.navigate(['admin/customerdetail']);
    console.log(value);
  };
}
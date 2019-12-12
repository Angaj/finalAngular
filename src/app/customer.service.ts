import { Injectable } from '@angular/core';
import {Customer} from './customer';
//import {CUSTOMER} from './mock-customer'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  http: any;

  constructor(private _httpClient: HttpClient) { }


  getCustomer() {

    const Customer = [
      { id: 11, name: 'Dr Nice', status:'Inactive' },
      { id: 12, name: 'Narco', status:'Inactive' },
      { id: 13, name: 'Bombasto' , status:'Inactive'},
      { id: 14, name: 'Celeritas' , status:'Inactive'},
      { id: 15, name: 'Magneta' , status:'Inactive'},
      { id: 16, name: 'RubberMan' , status:'Inactive'},
      { id: 17, name: 'Dynama' , status:'Inactive'},
      { id: 18, name: 'Dr IQ'  , status:'Inactive'},
      { id: 19, name: 'Magma' , status:'Inactive'},
      { id: 20, name: 'Tornado' , status:'Inactive'}
    ];
    return Customer;
  }

  public updateStatus(): Observable<any> {
//{id: status:} { id: 11, name: 'Dr Nice', status:'active' },
    return this._httpClient.post('../customer.service',status);
  }
}

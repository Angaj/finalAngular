import { Component, OnInit, ElementRef } from '@angular/core';
import {PlanService} from '../plan.service';
import {Plan} from '../plan'

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plan : Plan[];
  selectedPlan: Plan;
  private elRef:ElementRef;
  constructor() { }

  ngOnInit() {
    
  }

}

// onselect()

// getPlan(): void{
//   this.plan=this.PlanService.getPlan(),

// }
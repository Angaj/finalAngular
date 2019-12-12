import { Injectable } from '@angular/core';
import {PLAN} from './mock-plans'
import {Plan} from './plan';
@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor() { }

  getPlan(): Plan[] {

    return PLAN;
  }
}

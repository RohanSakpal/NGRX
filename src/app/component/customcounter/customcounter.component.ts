import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/store/counter.actions';
import { FormsModule } from '@angular/forms';
import { CounterModel } from '../../shared/store/counter.model';
import {Subscription} from 'rxjs'
import { getchannelname } from '../../shared/store/counter.selector';
import { AppStateModel } from '../../shared/store/Global/AppState.Model';

@Component({
  selector: 'app-customcounter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent {
  counterinput!:number;
  actiontype:string='add';
  channelName:string = '';
  counterSubscribe !: Subscription;
  constructor(private store: Store<AppStateModel>) { }

  ngOnInit(): void {
    this.counterSubscribe = this.store.select(getchannelname).subscribe(data=> {
      if(data !== undefined) {
        this.channelName = data;
      } 
    });
  }

  OnIncrement() {
    this.store.dispatch(customincrement({value: +this.counterinput,action: this.actiontype}))
  }

  ngOnDestroy(): void {
    if(this.counterSubscribe) {
      this.counterSubscribe.unsubscribe();
    }
  }
}

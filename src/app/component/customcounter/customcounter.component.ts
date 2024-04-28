import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/store/counter.actions';
import { FormsModule } from '@angular/forms';
import { CounterModel } from '../../shared/store/counter.model';

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
  constructor(private store: Store<{counter:CounterModel}>) { }

  ngOnInit(): void {
  }

  OnIncrement() {
    this.store.dispatch(customincrement({value: +this.counterinput,action: this.actiontype}))
  }
}

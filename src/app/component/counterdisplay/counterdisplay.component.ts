import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import {Observable, Subscription} from 'rxjs'
import { AsyncPipe } from '@angular/common';
import { getcounter } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit,OnDestroy {
  constructor(private store: Store<{counter:CounterModel}>) { }
  
  counterDisplay:number=0;
  
  counterSubscribe !: Subscription;
  counter$ !: Observable<CounterModel>;
  ngOnInit(): void {
    this.counterSubscribe = this.store.select(getcounter).subscribe(data=> {
      if(data !== undefined) {
        this.counterDisplay = data;
      } 
    });

    this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    if(this.counterSubscribe) {
      this.counterSubscribe.unsubscribe();
    }
  }
}

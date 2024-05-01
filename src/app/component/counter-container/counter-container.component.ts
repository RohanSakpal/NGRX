import { Component } from '@angular/core';
import { CounterbuttonComponent } from '../counterbutton/counterbutton.component';
import { CounterdisplayComponent } from '../counterdisplay/counterdisplay.component';
import { CustomcounterComponent } from '../customcounter/customcounter.component';

@Component({
  selector: 'app-counter-container',
  standalone: true,
  imports: [CounterbuttonComponent,CounterdisplayComponent,CustomcounterComponent],
  templateUrl: './counter-container.component.html',
  styleUrl: './counter-container.component.css'
})
export class CounterContainerComponent {

}

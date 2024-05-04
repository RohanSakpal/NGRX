import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getrouterinfo } from '../../shared/store/Router/Router.Selector';

@Component({
  selector: 'app-editblog',
  standalone: true,
  imports: [],
  templateUrl: './editblog.component.html',
  styleUrl: './editblog.component.css'
})
export class EditblogComponent implements OnInit {
  editblogid:any;
  constructor(private activeRoute: ActivatedRoute,private store:Store) {}

  ngOnInit(): void {
    //this.editblogid = this.activeRoute.snapshot.paramMap.get('id');
    this.store.select(getrouterinfo).subscribe((item:any)=>{
      this.editblogid = item.root.firstChild.params['id'];
    })
  }
}

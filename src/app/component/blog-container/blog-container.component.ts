import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from '../../shared/store/Blog/Blog.model';
import { getblog, getblogbyid } from '../../shared/store/Blog/Blog.selectors';
import { AppStateModel } from '../../shared/store/Global/AppState.Model';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { addblog, deleteblog, updateblog } from '../../shared/store/Blog/Blog.actions';

@Component({
  selector: 'app-blog-container',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './blog-container.component.html',
  styleUrl: './blog-container.component.css'
})
export class BlogContainerComponent {
  bloglist !: BlogModel[];
  showPopup : boolean = false;
  isEdit:boolean = false;
 constructor(private store:Store<AppStateModel>, private builder:FormBuilder
 ) {}

 blogForm = this.builder.group({
  id:this.builder.control(0),
  title:this.builder.control("",Validators.required),
  description: this.builder.control("",Validators.required)
 })

 ngOnInit() {
  this.store.select(getblog).subscribe(item=> {
    this.bloglist = item;
  })
 }

 openPopup() {
  if(this.blogForm) {
    this.blogForm.reset();
    this.isEdit = false;
  }
  this.showPopup = !this.showPopup;
 }
 save() {
  if(this.blogForm.valid){
    const _bloginput : BlogModel = {
      id:0,
      title:this.blogForm.value.title as string,
      description: this.blogForm.value.description as string
    }
    if(this.isEdit)  {
      _bloginput.id = this.blogForm.value.id as number;
      this.store.dispatch(updateblog({bloginput:_bloginput}));
    } else {
      this.store.dispatch(addblog({bloginput:_bloginput}));
    }
    this.blogForm.reset();
    this.isEdit = false
    this.showPopup = false;
  }
 }

 edit(id:number) {
  this.isEdit = true;
  this.showPopup = true;
  this.store.select(getblogbyid(id)).subscribe(_data => {
    this.blogForm.setValue({
      id: _data.id,title:_data.title,description:_data.description
    })
  })
 }

 delete(id:number) {
  if(confirm("Are You Sure want to Remove?")) {
    this.store.dispatch(deleteblog({id:id}));
  }
 }
}

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { LOAD_BLOG, addblog, addblogsuccess, deleteblog, deleteblogsuccess, loadblogerror, loadblogsuccess, updateblog, updateblogsuccess } from "./Blog.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { BlogModel } from "./Blog.model";

@Injectable()
export class BlogEffects {
    constructor(private action$:Actions,private service:MasterService) {}

    _blog = createEffect(()=>
        this.action$.pipe(
            ofType(LOAD_BLOG),
            exhaustMap((action)=>{
                return this.service.GetAllBlogs().pipe(
                    map((data)=>{
                        return loadblogsuccess({bloglist:data});
                    }),
                    catchError((_error)=> of(loadblogerror({Errortext:_error.message})))
                )
            })
        )
    );

    _AddBlog = createEffect(()=> 
        this.action$.pipe(
            ofType(addblog),
            exhaustMap(action=> {
                return this.service.CreateBlog(action.bloginput).pipe(
                    map((data)=>{
                        return addblogsuccess({bloginput:data as BlogModel})
                    }),
                    catchError((_error)=> of(loadblogerror({Errortext:_error.message})))
                )
            })
        )
    );

    _UpdateBlog = createEffect(()=> 
        this.action$.pipe(
            ofType(updateblog),
            exhaustMap(action=> {
                return this.service.UpdateBlog(action.bloginput).pipe(
                    map((data)=>{
                        return updateblogsuccess({bloginput:action.bloginput})
                    }),
                    catchError((_error)=> of(loadblogerror({Errortext:_error.message})))
                )
            })
        )
    );

    _DeleteBlog = createEffect(()=> 
        this.action$.pipe(
            ofType(deleteblog),
            exhaustMap(action=> {
                return this.service.DeleteBlog(action.id).pipe(
                    map((data)=>{
                        return deleteblogsuccess({id:action.id})
                    }),
                    catchError((_error)=> of(loadblogerror({Errortext:_error.message})))
                )
            })
        )
    )
}
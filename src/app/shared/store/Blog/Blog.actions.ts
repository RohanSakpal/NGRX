import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./Blog.model";

export const LOAD_BLOG_SUCCESS='[blog page] load blog success';
export const LOAD_BLOG_ERROR='[blog page] load blog error';
export const LOAD_BLOG='[blog page] load blog';

export const ADD_BLOG_SUCCESS='[blog page] add blog success';
export const ADD_BLOG='[blog page] add blog';

export const UPDATE_BLOG_SUCCESS='[blog page] UPDATE blog success';
export const UPDATE_BLOG='[blog page] UPDATE blog';

export const DELETE_BLOG_SUCCESS='[blog page] DELETE blog success';
export const DELETE_BLOG='[blog page] DELETE blog';

export const loadblogsuccess=createAction(LOAD_BLOG_SUCCESS,props<{bloglist:BlogModel[]}>());
export const loadblogerror=createAction(LOAD_BLOG_ERROR,props<{Errortext:string}>());
export const loadblog = createAction(LOAD_BLOG);
// export const loadblog = createAction('loadblog');

export const addblogsuccess=createAction(ADD_BLOG_SUCCESS,props<{bloginput:BlogModel}>());
export const addblog = createAction(ADD_BLOG,props<{bloginput:BlogModel}>());
//export const addblog = createAction('addblog',props<{bloginput:BlogModel}>());

// export const updateblog = createAction('updateblog',props<{bloginput:BlogModel}>());

// export const deleteblog = createAction('updateblog',props<{id:number}>());
export const updateblog = createAction(UPDATE_BLOG,props<{bloginput:BlogModel}>());
export const updateblogsuccess=createAction(UPDATE_BLOG_SUCCESS,props<{bloginput:BlogModel}>());

export const deleteblog = createAction(DELETE_BLOG,props<{id:number}>());
export const deleteblogsuccess = createAction(DELETE_BLOG_SUCCESS,props<{id:number}>());
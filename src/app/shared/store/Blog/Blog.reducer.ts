import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./Blog.state";
import { addblog, addblogsuccess, deleteblog, deleteblogsuccess, loadblog, loadblogerror, loadblogsuccess, updateblog, updateblogsuccess } from "./Blog.actions";
import { BlogModel } from "./Blog.model";

const _blogReducer = createReducer(BlogState, on(loadblog,(state)=>{
    return {
        ...state,
    };
}),
on(loadblogsuccess, (state,action) => {
    return {
        ...state,
        bloglist:[...action.bloglist],
        Errormessage:''
    }
}),
on(loadblogerror, (state,action) => {
    return {
        ...state,
        bloglist:[],
        Errormessage:action.Errortext
    }
}),
// on(addblog, (state,action) => {
//     const _blog = {...action.bloginput};
//     _blog.id = state.bloglist.length+1;
//     return {
//         ...state,
//         bloglist:[...state.bloglist,_blog]
//     }
// }),
on(addblogsuccess,(state,action) => {
    const _blog = {...action.bloginput};
    return {
        ...state,
        bloglist:[...state.bloglist,_blog]
    }
}),
on(updateblogsuccess, (state,action) => {
    const _blog = {...action.bloginput};
    const updatedblog = state.bloglist.map(blog=>{
        return _blog.id === blog.id?_blog:blog;
    })
    return {
        ...state,
        bloglist:updatedblog
    }
}),
on(deleteblogsuccess, (state,action) => {
    const updatedblog = state.bloglist.filter((blog:BlogModel)=>{
        return blog.id !== action.id;
    })
    return {
        ...state,
        bloglist:updatedblog
    }
})
)
export function blogReducer(state:any, action:any) {
    return _blogReducer(state,action)
}
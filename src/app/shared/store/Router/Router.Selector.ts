import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateModel } from "./Custom.serializer";
import { RouterReducerState } from "@ngrx/router-store";

const getrouterstate= createFeatureSelector<RouterReducerState<RouterStateModel>>('router');

export const getrouterinfo = createSelector(getrouterstate,(state)=> {
    return state.state;
})
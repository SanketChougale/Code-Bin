import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CreateBinComponent } from './Components/create-bin/create-bin.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './Components/home/home.component';
import { ViewSnippetComponent } from './Components/view-snippet/view-snippet.component';

export const routes: Routes = [
    {path: `create`, component: CreateBinComponent, canActivate: [authGuard]}, //if authGuard = true then only accessible
    {path: `login`, component: LoginComponent},
    
    {path: `signup`, component: SignupComponent},
    {path: `about`, loadComponent:() => import(`./Components/about/about.component`).then(mod => mod.AboutComponent)}, //Lazy Loading(create seperate bundle to reduce load on application)
    //{path: ``, redirectTo:"/login", pathMatch:"full"},   //if roterLink is empty. refer navBar-> codeBin
   {path: ``, component: HomeComponent},
   {path: `snippet/:id`, component: ViewSnippetComponent},
    {path:`**`, component: NotFoundComponent}           //if wrong path is given which have not above paths
];

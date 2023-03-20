import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'select-lang',
    loadChildren: () => import('./pages/select-lang/select-lang.module').then(m => m.SelectLangPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bootcamp',
    loadChildren: () => import('./pages/bootcamp/bootcamp.module').then( m => m.BootcampPageModule)
  },
  {
    path: 'hackathon',
    loadChildren: () => import('./pages/otherEvents/hackathon/hackathon.module').then( m => m.HackathonPageModule)
  },
  {
    path: 'hiring-challange',
    loadChildren: () => import('./pages/otherEvents/hiring-challange/hiring-challange.module').then( m => m.HiringChallangePageModule)
  },
  {
    path: 'all-events',
    loadChildren: () => import('./pages/otherEvents/all-events/all-events.module').then( m => m.AllEventsPageModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./pages/jobs/jobs.module').then( m => m.JobsPageModule)
  },
  {
    path: 'for-companies',
    loadChildren: () => import('./pages/for-companies/for-companies.module').then( m => m.ForCompaniesPageModule)
  },
  {
    path: 'podcast',
    loadChildren: () => import('./pages/forYou/podcast/podcast.module').then( m => m.PodcastPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/other/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'become-an-instructor',
    loadChildren: () => import('./pages/other/become-an-instructor/become-an-instructor.module').then( m => m.BecomeAnInstructorPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/forYou/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./pages/my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

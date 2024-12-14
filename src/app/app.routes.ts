import { Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { UploadPageComponent } from './gallery/pages/upload-page/upload-page.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { GalleryPageComponent } from './gallery/pages/gallery-page/gallery-page.component';
import { CreditsPageComponent } from '@gallery/pages/credits-page/credits-page.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'credits', component: CreditsPageComponent},
    {path: 'upload', component: UploadPageComponent},
    {path: '**', component: PageNotFoundComponent},
];

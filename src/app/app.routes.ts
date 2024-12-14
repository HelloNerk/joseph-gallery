import { Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { UploadPageComponent } from './gallery/pages/upload-page/upload-page.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { GalleryPageComponent } from './gallery/pages/gallery-page/gallery-page.component';
import { CreditsPageComponent } from '@gallery/pages/credits-page/credits-page.component';

export const routes: Routes = [
    {path: 'joseph-gallery/home', component: HomeComponent},
    {path: '', redirectTo: 'joseph-gallery/home', pathMatch: 'full'},
    {path: 'joseph-gallery/gallery', component: GalleryPageComponent},
    {path: 'joseph-gallery/credits', component: CreditsPageComponent},
    {path: 'joseph-gallery/upload', component: UploadPageComponent},
    {path: 'joseph-gallery/**', component: PageNotFoundComponent},
];

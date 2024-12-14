import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Photo } from '@gallery/models/photo.interfaces';
import { PhotoService } from '@gallery/services/photo.service';
import { tap } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css'
})
export class GalleryPageComponent implements OnInit {
  data!: Photo[];
  
  private readonly _photoSvc = inject(PhotoService);
  private readonly _destroyedRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos():void{
    this._photoSvc.getAllPhotos()
      .pipe(
        takeUntilDestroyed(this._destroyedRef),
        tap((photos:Photo[]) => {
          this.data = [...photos];
          console.log(this.data);
        })
        
      )
    .subscribe();
    
  }

}

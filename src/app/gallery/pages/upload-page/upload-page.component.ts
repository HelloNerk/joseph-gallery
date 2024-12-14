import { Component, DestroyRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhotoService } from '@gallery/services/photo.service';

@Component({
  selector: 'app-upload-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './upload-page.component.html',
  styleUrl: './upload-page.component.css'
})
export class UploadPageComponent {
  file!:File;
  imageTitle: string = '';
  imageDescription: string = '';
  url: string = '';
  imageUrl:string|undefined|null|ArrayBuffer=null;
  
  changeInput(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.file = input.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageUrl = e.target?.result;
      reader.readAsDataURL(this.file);
    }
  }


  private readonly _photoSvc = inject(PhotoService);

  


  uploadPhoto() {
    if (!this.file) {
      alert('Please select a file.');
      return;
    }

    this._photoSvc.uploadFile(this.file)
      .then((urlResponse) => {
        this.url = urlResponse;
        return this._photoSvc.newPhoto({
          title: this.imageTitle,
          description: this.imageDescription,
          url: this.url,
        });
      })
      .then(() => {
        console.log('Photo saved successfully');
      })
      .catch((error) => {
        console.error('Error uploading or saving photo:', error);
      });
  }

  




}

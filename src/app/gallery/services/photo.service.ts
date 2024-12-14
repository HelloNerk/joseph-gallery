import { inject, Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { addDoc, collection, collectionData, deleteDoc, doc, DocumentData, DocumentReference, Firestore, getDoc, orderBy, query, updateDoc } from '@angular/fire/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { environment } from '@envs/environment';
import { Photo } from '@gallery/models/photo.interfaces';
import { APP_CONSTANTS } from '@shared/constants';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PhotoService {
    private readonly _firestore = inject(Firestore);
    private readonly _photoCollection = collection(this._firestore, APP_CONSTANTS.COLLECTION_NAME);
    private _storage = getStorage(initializeApp(environment.firebase));

    uploadFile(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
          if (!file) {
            reject('Please fill in all fields and select a file.');
            return;
          }
    
          const storageRef = ref(this._storage, `uploads/${file.name}`);
          const task = uploadBytesResumable(storageRef, file);
    
          task.on(
            'state_changed',
            null,
            (error) => {
              console.error('Error uploading file:', error);
              reject(error);
            },
            async () => {
              try {
                const downloadUrl = await getDownloadURL(storageRef);
                console.log('File available at', downloadUrl);
                resolve(downloadUrl);
              } catch (error) {
                reject(error);
              }
            }
          );
        });
    }


    newPhoto(photo:Partial<Photo>):Promise<DocumentReference<DocumentData, DocumentData>>{
        return addDoc(this._photoCollection,{
            created: Date.now(),
            ...photo,
        })
    }

    getAllPhotos():Observable<Photo[]>{
        const queryFn = query(this._photoCollection, orderBy('created', 'desc'));
        return collectionData(queryFn, {idField: 'id'}) as Observable<Photo[]>;
    }

    async getPhotoById(id:string): Promise<Photo>{
        const docRef = this.getDocRef(id);
        const documentData = await getDoc(docRef);
        return documentData.data() as Photo;
    }

    updatePhoto(id:string, photo:Photo):void{
        const docRef = this.getDocRef(id);
        updateDoc(docRef,{...photo});
    }

    deletePhoto(id:string):void{
        const docRef = this.getDocRef(id);
        deleteDoc(docRef);
    }

    private getDocRef(id: string){
        return doc(this._firestore, APP_CONSTANTS.COLLECTION_NAME, id);
    }
}   
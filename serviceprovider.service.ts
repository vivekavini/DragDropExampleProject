import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './Album';
import { Photo } from './Photo';
import { Params } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServiceproviderService {

  constructor(private _http:HttpClient) { 

  
  }

  getAlbums():Observable<any>
  {
    return this._http.get("https://jsonplaceholder.typicode.com/albums")
  }

getPhotoByIdFirSelAlbum(id:string):Observable<any>
{
  let param1=new HttpParams().set("albumId",id)
  return this._http.get("https://jsonplaceholder.typicode.com/photos",{params:param1})
}

}

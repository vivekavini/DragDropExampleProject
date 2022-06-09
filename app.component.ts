import { Component } from '@angular/core';
import { ServiceproviderService } from './serviceprovider.service';
import { Photo } from './Photo';
import { Album } from './Album';
import { SelectorContext } from '@angular/compiler';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DropDownList';
listAlbums !:Album[];
Albumselected !:number;
listPhoto !:Photo[];

  constructor(private _servprovider:ServiceproviderService)
  {}
  ngOnInit()
  {
this._servprovider.getAlbums().subscribe(data=>
  {
    this.listAlbums =data;
  })
 
 
 


  }
  
}

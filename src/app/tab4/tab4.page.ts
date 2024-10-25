import { Component } from '@angular/core';
import { PhotoService } from 'src/services/photo.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(public photoService: PhotoService) { }

  addPhotoToGallery() {
    this.photoService.addNewtoGallery();
  }

}
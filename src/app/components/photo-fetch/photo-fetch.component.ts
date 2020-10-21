import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photo-fetch',
  templateUrl: './photo-fetch.component.html',
  styleUrls: ['./photo-fetch.component.scss'],
})
export class PhotoFetchComponent implements OnInit {
  constructor(private photoService: PhotosService) {}

  ngOnInit(): void {}

  getAPhotoFromService() {
    this.photoService.getRandomImage().subscribe((image) => {
      console.log(image.urls.regular);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photo-fetch',
  templateUrl: './photo-fetch.component.html',
  styleUrls: ['./photo-fetch.component.scss'],
})
export class PhotoFetchComponent implements OnInit {
  imageUrl: string;

  constructor(private photoService: PhotosService) {}

  ngOnInit(): void {
    this.getAPhotoFromService();
  }

  getAPhotoFromService() {
    this.photoService.getRandomImage().subscribe((image) => {
      this.imageUrl = image.urls.regular;

      console.log('Image URL', this.imageUrl);
    });
  }
}

import { Component } from '@angular/core';
import { HeaderService } from 'src/app/common/services/header/header.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { MockUtils } from 'src/app/common/utils/mock.utils';

@Component({
  selector: 'app-new-post-container',
  templateUrl: './new-post-container.component.html',
  styleUrls: ['./new-post-container.component.scss'],
})
export class NewPostContainerComponent {

  constructor(
    private headerService: HeaderService,
    private mockUtils: MockUtils
  ) { }

  async ionViewWillEnter() {
    this.headerService.showHeader.next(false);

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
  
    console.log('THE IMAGE URLRLLLLLLLLL');
    console.log(imageUrl);
    console.log('------------------------------------------------------------------------------');
    
  }

  ionViewWillLeave() {
    this.headerService.showHeader.next(true);
  }

}

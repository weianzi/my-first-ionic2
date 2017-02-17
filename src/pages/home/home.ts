import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
    
import {Camera} from 'ionic-native';
import { BarcodeScanner } from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  public text: string; 
  public format: string;
  constructor(public navCtrl: NavController) {

  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  scan() {
    BarcodeScanner.scan().then((result) => {
      if (!result.cancelled) {
        alert("text:" + result.text);
        alert("format: " + result.format);
      }
      alert("success");
    }).catch((err) => {
      alert(err);
    })
  }
}

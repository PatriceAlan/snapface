import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void{
    this.faceSnaps = [
          this.mySnap = new FaceSnap(
      "Mon premier FaceSnap",
      "Voici ma première description de FaceSnap",
      'https://shorturl.at/9gxqU',
      new Date(),
      15
    ),

    this.myOtherSnap = new FaceSnap(
      "Mon autre FaceSnap",
      "Voici mon autre description de FaceSnap",
      'https://shorturl.at/kIUGC',
      new Date(),
      28
    ),

    this.myLastSnap = new FaceSnap(
      "Mon dernier FaceSnap",
      "Voici ma dernière description de FaceSnap",
      'https://shorturl.at/0yXBP',
      new Date(),
      144
    )    
    ];

    this.faceSnaps[1].setLocation('Random forest')

  }
}


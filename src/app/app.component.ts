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
      "My First FaceSnap",
      "This is my first FaceSnap description",
      'https://shorturl.at/9gxqU',
      new Date(),
      15
    ),

    this.myOtherSnap = new FaceSnap(
      "My Other FaceSnap",
      "This is my other FaceSnap description",
      'https://shorturl.at/kIUGC',
      new Date(),
      28
    ),

    this.myLastSnap = new FaceSnap(
      "My Last FaceSnap",
      "This is my last FaceSnap description",
      'https://shorturl.at/0yXBP',
      new Date(),
      144
    )    
    ];

    this.faceSnaps[1].setLocation('Random forest')

  }
}


import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapService } from '../services/face-snaps.service';
import { interval, Observable, Subject, takeUntil, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent,
    AsyncPipe
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit, OnDestroy { 

  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapService){}

  ngOnInit(): void{
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    // this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }


  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}

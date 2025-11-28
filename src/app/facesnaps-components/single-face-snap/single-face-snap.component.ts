import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../core/models/face-snap';
import { AsyncPipe, DatePipe, NgClass, NgStyle, TitleCasePipe, NgIf } from '@angular/common';
import { FaceSnapService } from '../../core/services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink,
    AsyncPipe,
    NgIf
],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap$!: Observable<FaceSnap>;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapService, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prepareInterface();

  }

  onSnap(faceSnapId: number): void{
    if (this.userHasSnapped) {
      this.unSnap(faceSnapId);
    } else {
      this.snap(faceSnapId);
    }
  }

  unSnap(faceSnapId: number){
    this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
      tap(() => {
            this.snapButtonText = "Oh Snap!";
            this.userHasSnapped = false;
            this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
      })
    ).subscribe();

  }

  snap(faceSnapId: number){
    this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
      tap(() => {
        this.snapButtonText = "Oops, unSnap!";
        this.userHasSnapped = true;
        this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
      })
    ).subscribe();

  }
  
  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface(){
    this.snapButtonText = "Oh Snap!";
    this.userHasSnapped = false;
    this.getFaceSnap();
  }
}

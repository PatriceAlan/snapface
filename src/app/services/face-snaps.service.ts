import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
      "Mon premier FaceSnap",
      "Voici ma première description de FaceSnap",
      'https://shorturl.at/9gxqU',
      new Date(),
      15
    ),

    new FaceSnap(
      "Mon autre FaceSnap",
      "Voici mon autre description de FaceSnap",
      'https://shorturl.at/kIUGC',
      new Date(),
      28
    ).withLocation('A la forêt'),

    new FaceSnap(
      "Mon dernier FaceSnap",
      "Voici ma dernière description de FaceSnap",
      'https://shorturl.at/0yXBP',
      new Date(),
      144
    )    
    ];

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap){
            throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
    }

    snapFaceSnapById(faceSnapId: string, snaptype: SnapType): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.snap(snaptype);
    }
}
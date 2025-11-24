import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";
import { HttpClient } from "@angular/common/http";
import { map, Observable, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {

    constructor(private http: HttpClient) {}
    
    private  faceSnaps: FaceSnap[] = [];

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }

    snapFaceSnapById(faceSnapId: number, snaptype: SnapType): Observable<FaceSnap> {
        return this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snaptype === 'snap' ? 1 : -1)
            })),
            switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
                `http://localhost:3000/facesnaps/${faceSnapId}`,
                updatedFaceSnap)
            )
        );
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): void{
        const newId = this.faceSnaps[this.faceSnaps.length - 1].id + 1;
        const faceSnap = new FaceSnap(
            newId,
            formValue.title,
            formValue.description,
            formValue.imageUrl,
            new Date(),
            0
        );
        if (formValue.location) {
            faceSnap.withLocation(formValue.location);
        }
        this.faceSnaps.push(faceSnap);
    }
}
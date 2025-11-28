import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {

    constructor(private http: HttpClient) {}
    

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

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap>{
        return this.getAllFaceSnaps().pipe(
            map(faceSnaps => [...faceSnaps].sort((a, b) => a.id - b.id)),
            map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length -1]),
            map(previousFacesnap => ({
                ...formValue,
                snaps: 0,
                createdAt: new Date(),
                id: previousFacesnap.id + 1
            })),
            switchMap(newFacesnap => this.http.post<FaceSnap>(
                `http://localhost:3000/facesnaps`, newFacesnap)
            )
        );
    }
}
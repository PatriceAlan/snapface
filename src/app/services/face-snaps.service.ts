import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
    private faceSnaps: FaceSnap[] = [
    
    new FaceSnap(
      "Lever de soleil",
      "Un sublime lever de soleil",
      'https://shorturl.at/9gxqU',
      new Date(),
      15
    ),

    new FaceSnap(
      "Toile d'araignée",
      "Une très jolie toile d'araignée",
      'https://shorturl.at/kIUGC',
      new Date(),
      28
    ).withLocation('A la forêt'),

    new FaceSnap(
      "Forêt pleine d'arbres",
      "Regardez cette forêt !",
      'https://shorturl.at/0yXBP',
      new Date(),
      144
    ),

    new FaceSnap(
        "Coucher de soleil",
        "Un magnifique coucher de soleil sur la plage",
        "https://shorturl.at/TVv17",
        new Date(),
        120
    ).withLocation("À la mer"),

    new FaceSnap(
        "Randonnée en montagne",
        "Souvenir d'une randonnée dans les Alpes",
        "https://shorturl.at/U1kSg",
        new Date(),
        85
    ).withLocation("Dans les Alpes"),

    new FaceSnap(
        "Pause café",
        "Un moment de détente avec un bon café",
        "https://shorturl.at/GafTz",
        new Date(),
        42
    ).withLocation("Au centre-ville"),

    new FaceSnap(
        "Concert live",
        "Ambiance incroyable lors d’un concert",
        "https://shorturl.at/myBuK",
        new Date(),
        230
    ).withLocation("À Paris"),

    new FaceSnap(
        "Balade en forêt",
        "Exploration d’un sentier boisé",
        "https://shorturl.at/zdBxJ",
        new Date(),
        67
    ).withLocation("Forêt de Fontainebleau"),

    new FaceSnap(
        "Voyage au Japon",
        "Découverte des temples traditionnels",
        "https://kntn.ly/818ec819",
        new Date(),
        310
    ).withLocation("Kyoto"),

    new FaceSnap(
        "Soirée entre amis",
        "Un bon repas partagé avec des proches",
        "https://kntn.ly/62911646",
        new Date(),
        95
    ).withLocation("Chez un ami")    
    ];

    getAllFaceSnaps(): FaceSnap[] {
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
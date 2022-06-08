import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 } from 'uuid';
import { level } from '../../crossword-game/level';
import { questions } from '../../crossword-game/questions';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { first, map } from 'rxjs/operators';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LevelsService {

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {
  }

  getLevels(): Observable<any> {
    return this.afs
      .collection('levels')
      .snapshotChanges()
      .pipe(
        map((snaps) =>
          snaps.map((snap) => {
            const payload = snap.payload.doc.data() as any;
            return { ...payload, table: JSON.parse(payload.table) };
          }),
        ),
        first(),
      );
  }

  getLevelById(uuid: string): Observable<any> {
    return this.afs
      .collection('levels')
      .doc(uuid)
      .snapshotChanges()
      .pipe(
        map((snap) =>
        {
          const payload = snap.payload.data() as any;
          return { ...payload, table: JSON.parse(payload.table) };
        }
        ),
        first(),
      );
  }

  levelCompleted(levelId: string) {
    const uuid = v4();
    this.afs.doc(`levelCompletion/${ v4() }`).set({
      levelId,
      userId: this.authService.currentUser.uid
    });
  }

  getLevelStatuses() {
    return this.afs
      .collection('levelCompletion', ref => ref.where('userId', '==', this.authService.currentUser?.uid ?? ''))
      .snapshotChanges()
      .pipe(
        map((snaps) =>
          snaps?.map((snap) => {
            const payload = snap.payload.doc.data() as any;
            return { ...payload };
          }),
        ),
        first(),
      );
  }


  postLevel() {
    const uuid = v4();
    this.afs.doc(`levels/${ uuid }`).set(
      {
        uuid,
        name: 'Niveli 1',
        levelNumber: 1,
        table: JSON.stringify(level), questions
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

    constructor(public afd: AngularFireDatabase) { }

    getItems(){
        return this.afd.list('/notes/');
    }

    storeItem(name){
        this.afd.list('/notes/').push(name);
    }

    removeItem(id){
        this.afd.list('/notes/').remove(id);
    }

}

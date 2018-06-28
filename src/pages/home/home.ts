import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    itemsList: FirebaseListObservable<any[]>;
    newItem = '';

    constructor(public navCtrl: NavController, public firebaseServiceProvider: FirebaseServiceProvider) {
        this.itemsList = firebaseServiceProvider.getItems();
        console.log(this.itemsList);
    }

    storeItem(){
        this.firebaseServiceProvider.storeItem(this.newItem);
    }

    removeItem(id){
        this.firebaseServiceProvider.removeItem(id);
    }

}

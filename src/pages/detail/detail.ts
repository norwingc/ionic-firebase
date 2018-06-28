import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


import { NoteService } from '../../services/notes.services';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

    note = { id: null, title: null, description: null };
    id = null;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public noteService: NoteService,
        private toastCtrl: ToastController
    ){
        this.id = navParams.get('id');

        if(this.id != 0){
            this.note = noteService.getNote(this.id);
        }
    }

    /**
     * [ionViewDidLoad description]
     * @return [description]
     */
    ionViewDidLoad() {
        console.log('ionViewDidLoad DetailPage');
    }

    /**
     * [storeNote description]
     * @return [description]
     */
    storeNote(){

        if(this.id != 0){
            this.noteService.updateNote(this.note);
        }else{
            this.note.id = Date.now();
            this.noteService.storeNote(this.note);
        }

        this.viewMessage('Information Saved');
        this.navCtrl.pop();
    }

    /**
     * [deleteNote description]
     * @param  note [description]
     * @return      [description]
     */
    deleteNote(note){
        this.noteService.deleteNote(this.note);
        this.viewMessage('Information Deleted');
        this.navCtrl.pop();
    }

    /**
     * [viewMessage description]
     * @param  message [description]
     * @return         [description]
     */
    viewMessage(message){
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'buttom'
        });

         toast.onDidDismiss(() => {
           console.log('Dismissed toast');
         });

         toast.present();
    }
}

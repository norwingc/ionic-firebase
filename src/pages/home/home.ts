import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NoteService } from '../../services/notes.services';
import { DetailPage } from '../detail/detail';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    notes = [];

    @ViewChild('myNav') nav: NavController

    constructor(public navCtrl: NavController, public noteService: NoteService) {
        this.notes = noteService.getNotes();
    }

    //*
     * [goToDatail description]
     * @param  id [description]
     * @return    [description]
     */
    public goToDatail(id){
        this.navCtrl.push(DetailPage, {id:id});
    }

    /**
     * [storeNote description]
     * @return [description]
     */
    public storeNote(){
        this.navCtrl.push(DetailPage, {id:0});
    }

}

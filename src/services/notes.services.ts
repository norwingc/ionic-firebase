import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable()
export class NoteService{

    constructor(public afDB: AngularFireDatabase){}

    notes = [];

    /**
     * [getNotes description]
     * @return [description]
     */
    public getNotes() {
        //return this.notes;
        return this.afDB.list('/notes/');
    }

    /**
     * [getNote description]
     * @param  id [description]
     * @return    [description]
     */
    public getNote(id){
        /*return this.notes.filter(function(e, i){
            return e.id == id
        })[0] || { id:null, title: null, description: null };*/
        return this.afDB.object('/notes/'+id);
    }

    /**
     * [storeNote description]
     * @param  note [description]
     * @return      [description]
     */
    public storeNote(note){
        //this.notes.push(note);
        this.afDB.database.ref('/notes/'+note.id).set(note);
    }

    /**
     * [updateNote description]
     * @param  note [description]
     * @return      [description]
     */
    public updateNote(note){
        /*for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes[i] = note;
            }
        }*/
        this.afDB.database.ref('/notes/'+note.id).set(note);
    }

    /**
     * [deleteNote description]
     * @param  note [description]
     * @return      [description]
     */
    public deleteNote(note){
        /*for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes.splice(i, 1);
            }
        }*/
        this.afDB.database.ref('/notes/'+note.id).remove();
    }
}

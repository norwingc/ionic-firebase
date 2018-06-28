import { Injectable } from '@angular/core';

@Injectable()
export class NoteService{
    notes = [
        {id:1, title:"Nota1", description:"esta es la decripcion 1"},
        {id:2, title:"Nota2", description:"esta es la decripcion 2"},
        {id:3, title:"Nota3", description:"esta es la decripcion 3"},
    ];

    /**
     * [getNotes description]
     * @return [description]
     */
    public getNotes(){
        return this.notes;
    }

    /**
     * [getNote description]
     * @param  id [description]
     * @return    [description]
     */
    public getNote(id){
        return this.notes.filter(function(e, i){
            return e.id == id
        })[0] || { id:null, title: null, description: null };
    }

    /**
     * [storeNote description]
     * @param  note [description]
     * @return      [description]
     */
    public storeNote(note){
        this.notes.push(note);
    }

    /**
     * [updateNote description]
     * @param  note [description]
     * @return      [description]
     */
    public updateNote(note){
        for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes[i] = note;
            }
        }
    }

    /**
     * [deleteNote description]
     * @param  note [description]
     * @return      [description]
     */
    public deleteNote(note){
        for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes.splice(i, 1);
            }
        }
    }
}

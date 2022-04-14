import { Component, Inject } from '@angular/core'
import { NotesService } from './notes.service'
import { NewNote, Note } from './note'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    //selected?: Note | NewNote

    // renamed variable to handle selected edited or newly edited
    editedNote: Note | NewNote

    public notes: Note[] = []

    constructor(private readonly notesService: NotesService) {}

    selectNote(note: Note) {
        // TODO: prevent changing original object. Easy way to make deep copy
        this.editedNote = JSON.parse(JSON.stringify(note))
    }

    isNoteSelected(id) {
        return id === this.editedNote['id']
    }

    newNote() {
        this.editedNote = createNewNote()
    }

    saveNote(note: Note | NewNote) {
        // check for required fields
        if (!this.editedNote.title) {
            alert('title is required')
            return
        }
        if (this.editedNote['id']) {
            // existing one
            // update and return;
            let found = this.notes.filter(
                (item) => item.id === this.editedNote['id']
            )
            if (found.length > 0) {
                // Do not save direct ref otherwise model will update original data without clicking save
                found[0].id = this.editedNote['id']
                found[0].title = this.editedNote.title
                found[0].body = this.editedNote.body
                found[0].color = this.editedNote.color
                found[0].favorite = this.editedNote.favorite
            } else {
                console.log(
                    'something really wrong as we can find selected notes??'
                )
            }
        } else {
            // get the id of the note
            this.notesService
                .saveNote(this.editedNote)
                .toPromise()
                .then((data: Note) => {
                    this.editedNote = data
                    // make sure you push copy of the data to avoid changes without save button click
                    this.notes.push(
                        JSON.parse(JSON.stringify(this.editedNote)) as Note
                    )
                })
        }
    }

    editToggle() {
        this.newNote()
    }

    createNewNote(): NewNote {
        return { title: '', body: '', color: '', favorite: false }
    }
}

function createNewNote(): NewNote {
    return { title: '', body: '', color: '', favorite: false }
}

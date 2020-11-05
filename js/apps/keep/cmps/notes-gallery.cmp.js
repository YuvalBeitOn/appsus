import filterNotes from './filter-notes.cmp.js'
import notesList from './notes-list.cmp.js'

export default {
    name: 'notes-gallery',
    props: ['notes'],
    template: `
    <section class="notes-gallery">
        <filter-notes @setFilter="setFilter"/>  
        <h2 class="list-title"> Pinned notes</h2>
        <notes-list  :notes="pinnedNotes"/> 
        <h2 class="list-title"> Other notes</h2>
        <notes-list  :notes="unPinnedNotes"/>
    </section>
    `,

    data() {
        return {
            filterBy: null,
            notesToShow: null
        };
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;

        },

    },
    computed: {
        pinnedNotes() {
            return this.filteredNotes.filter(note => {
                if (note.isPinned) return note;
            })

        },
        unPinnedNotes() {
            return this.filteredNotes.filter(note => {
                if (!note.isPinned) return note;
            })
        },
        filteredNotes() {
            if (!this.filterBy) return this.notes;
            let notes = this.notes.filter(note => {
                return note.type === this.filterBy.type
            })
            notes = notes.filter(note => {
                return note.info.txt.toLowerCase().includes(this.filterBy.searchTerm.toLowerCase())
            })
            return notes;
        }

    },
    components: {
        filterNotes,
        notesList
    }
}
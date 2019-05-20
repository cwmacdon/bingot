const characters = {
    'Dolorous_Edd': { status: 'dead' },
    'Lyanna_Mormont': { status: 'dead' },
    'Beric_Dondarrion': { status: 'dead' },
    'Theon_Greyjoy': { status: 'dead' },
    'Night_King': { status: 'dead' },
    'Viserion_Dragon': { status: 'dead' },
    'Jorah_Mormont': { status: 'dead' },
    'Melisandre': { status: 'dead' },
    'Rhaegal_Dragon': { status: 'dead' },
    'Missandei': { status: 'dead' },
    
    'Varys': { status: 'dead' },
    'Euron_Greyjoy': { status: 'dead' },
    'Qyburn': { status: 'dead' },
    'Sandor_Clegane': { status: 'dead' },
    'Gregor_Clegane': { status: 'dead' },
    'Jaime_Lannister': { status: 'dead' },
    'Cersei_Lannister': { status: 'dead' },
    'Daenerys_Targaryen': { status: 'dead' },

    
    'Archmaester_Ebrose': { status: 'alive' },
    'Arya_Stark': { status: 'alive' },
    'Bran_Stark': { status: 'alive' },
    'Brienne_of_Tarth': { status: 'alive' },
    'Daario_Naharis': { status: 'alive' },
    'Davos_Seaworth': { status: 'alive' },
    'Drogon_Dragon': { status: 'alive' },
    'Edmure_Tully': { status: 'alive' },
    'Gendry': { status: 'alive' },
    'Ghost_Direwolf': { status: 'alive' },
    'Gilly': { status: 'alive' },
    'Grey_Worm': { status: 'alive' },
    'Hot_Pie': { status: 'alive' },
    'Jaqen_Hghar': { status: 'alive' },
    'Jon_Snow': { status: 'alive' },
    'Little_Sam': { status: 'alive' },
    'Meera_Reed': { status: 'alive' },
    'Nymeria_Direwolf': { status: 'alive' },
    'Podrick_Payne': { status: 'alive' },
    'Robin_Arryn': { status: 'alive' },
    'Samwell_Tarly': { status: 'alive' },
    'Sansa_Stark': { status: 'alive' },
    'Ser_Bronn': { status: 'alive' },
    'Tormund_Giantsbane': { status: 'alive' },
    'Tycho_Nestoris': { status: 'alive' },
    'Tyrion_Lannister': { status: 'alive' },
    'Yara_Greyjoy': { status: 'alive' }
};

const picks = {
    'Abdi Yusuf': [ 'Euron_Greyjoy', 'Ser_Bronn', 'Cersei_Lannister', 'Melisandre', 'Sandor_Clegane', 'Brienne_of_Tarth', 'Theon_Greyjoy', 'Grey_Worm', 'Davos_Seaworth', 'Samwell_Tarly', 'Varys', 'Jaime_Lannister', 'Bran_Stark', 'Daenerys_Targaryen', 'Gregor_Clegane', 'Sansa_Stark', 'Arya_Stark', 'Night_King', 'Tormund_Giantsbane', 'Gendry', 'Yara_Greyjoy', 'Missandei', 'Qyburn', 'Gilly', 'Lyanna_Mormont' ],
    'Amie Ayson': [ 'Beric_Dondarrion', 'Bran_Stark', 'Gendry', 'Davos_Seaworth', 'Dolorous_Edd', 'Sansa_Stark', 'Brienne_of_Tarth', 'Ghost_Direwolf', 'Daario_Naharis', 'Arya_Stark', 'Sandor_Clegane', 'Grey_Worm', 'Jorah_Mormont', 'Theon_Greyjoy', 'Jon_Snow', 'Ser_Bronn', 'Euron_Greyjoy', 'Samwell_Tarly', 'Missandei', 'Yara_Greyjoy', 'Tormund_Giantsbane', 'Podrick_Payne', 'Nymeria_Direwolf', 'Lyanna_Mormont', 'Jaime_Lannister' ],
    'Becky Ayson': [ 'Robin_Arryn', 'Varys', 'Yara_Greyjoy', 'Viserion_Dragon', 'Dolorous_Edd', 'Nymeria_Direwolf', 'Jorah_Mormont', 'Meera_Reed', 'Brienne_of_Tarth', 'Archmaester_Ebrose', 'Melisandre', 'Rhaegal_Dragon', 'Euron_Greyjoy', 'Tormund_Giantsbane', 'Qyburn', 'Beric_Dondarrion', 'Ghost_Direwolf', 'Ser_Bronn', 'Sandor_Clegane', 'Edmure_Tully', 'Jaqen_Hghar', 'Gregor_Clegane', 'Podrick_Payne', 'Theon_Greyjoy', 'Tycho_Nestoris' ],
    'Brian Choi': [ 'Arya_Stark', 'Archmaester_Ebrose', 'Beric_Dondarrion', 'Brienne_of_Tarth', 'Edmure_Tully', 'Cersei_Lannister', 'Davos_Seaworth', 'Daenerys_Targaryen', 'Drogon_Dragon', 'Dolorous_Edd', 'Tormund_Giantsbane', 'Euron_Greyjoy', 'Gilly', 'Gendry', 'Gregor_Clegane', 'Varys', 'Hot_Pie', 'Jon_Snow', 'Jorah_Mormont', 'Lyanna_Mormont', 'Little_Sam', 'Tyrion_Lannister', 'Theon_Greyjoy', 'Jaime_Lannister', 'Jaqen_Hghar' ],
    'Brian Haynes': [ 'Varys', 'Yara_Greyjoy', 'Gregor_Clegane', 'Melisandre', 'Beric_Dondarrion', 'Grey_Worm', 'Jon_Snow', 'Viserion_Dragon', 'Theon_Greyjoy', 'Gendry', 'Rhaegal_Dragon', 'Bran_Stark', 'Night_King', 'Jorah_Mormont', 'Daenerys_Targaryen', 'Podrick_Payne', 'Qyburn', 'Cersei_Lannister', 'Sandor_Clegane', 'Jaime_Lannister', 'Brienne_of_Tarth', 'Davos_Seaworth', 'Euron_Greyjoy', 'Ghost_Direwolf', 'Dolorous_Edd' ],
    'Caitlin Keaney': [ 'Arya_Stark', 'Robin_Arryn', 'Tormund_Giantsbane', 'Yara_Greyjoy', 'Beric_Dondarrion', 'Tyrion_Lannister', 'Daenerys_Targaryen', 'Grey_Worm', 'Euron_Greyjoy', 'Drogon_Dragon', 'Jon_Snow', 'Theon_Greyjoy', 'Cersei_Lannister', 'Jorah_Mormont', 'Qyburn', 'Varys', 'Gregor_Clegane', 'Bran_Stark', 'Sandor_Clegane', 'Jaime_Lannister', 'Night_King', 'Davos_Seaworth', 'Viserion_Dragon', 'Brienne_of_Tarth', 'Melisandre' ],
    'Chris MacDonald': [ 'Jon_Snow', 'Sansa_Stark', 'Jaime_Lannister', 'Edmure_Tully', 'Cersei_Lannister', 'Beric_Dondarrion', 'Theon_Greyjoy', 'Dolorous_Edd', 'Qyburn', 'Ser_Bronn', 'Ghost_Direwolf', 'Rhaegal_Dragon', 'Night_King', 'Robin_Arryn', 'Viserion_Dragon', 'Jorah_Mormont', 'Euron_Greyjoy', 'Drogon_Dragon', 'Varys', 'Tycho_Nestoris', 'Gregor_Clegane', 'Arya_Stark', 'Grey_Worm', 'Nymeria_Direwolf', 'Melisandre' ],
    'Dan Ayson': [ 'Drogon_Dragon', 'Theon_Greyjoy', 'Rhaegal_Dragon', 'Nymeria_Direwolf', 'Sandor_Clegane', 'Ser_Bronn', 'Jaime_Lannister', 'Bran_Stark', 'Night_King', 'Sansa_Stark', 'Gilly', 'Samwell_Tarly', 'Jon_Snow', 'Tormund_Giantsbane', 'Brienne_of_Tarth', 'Little_Sam', 'Daenerys_Targaryen', 'Davos_Seaworth', 'Cersei_Lannister', 'Podrick_Payne', 'Grey_Worm', 'Jorah_Mormont', 'Missandei', 'Gregor_Clegane', 'Viserion_Dragon' ],
    'Derek Judson': [ 'Cersei_Lannister', 'Jaime_Lannister', 'Gregor_Clegane', 'Sandor_Clegane', 'Beric_Dondarrion', 'Daario_Naharis', 'Qyburn', 'Jorah_Mormont', 'Melisandre', 'Bran_Stark', 'Viserion_Dragon', 'Rhaegal_Dragon', 'Ghost_Direwolf', 'Drogon_Dragon', 'Tormund_Giantsbane', 'Night_King', 'Missandei', 'Brienne_of_Tarth', 'Grey_Worm', 'Gendry', 'Euron_Greyjoy', 'Meera_Reed', 'Arya_Stark', 'Jon_Snow', 'Daenerys_Targaryen' ],
    'Ioanna Bomis': [ 'Viserion_Dragon', 'Jaime_Lannister', 'Ser_Bronn', 'Dolorous_Edd', 'Night_King', 'Brienne_of_Tarth', 'Theon_Greyjoy', 'Arya_Stark', 'Tyrion_Lannister', 'Tormund_Giantsbane', 'Gregor_Clegane', 'Grey_Worm', 'Cersei_Lannister', 'Beric_Dondarrion', 'Varys', 'Rhaegal_Dragon', 'Ghost_Direwolf', 'Yara_Greyjoy', 'Jon_Snow', 'Jorah_Mormont', 'Euron_Greyjoy', 'Qyburn', 'Melisandre', 'Sandor_Clegane', 'Gendry' ],
    'Heather Keaney': [ 'Qyburn', 'Missandei', 'Varys', 'Ser_Bronn', 'Grey_Worm', 'Cersei_Lannister', 'Brienne_of_Tarth', 'Beric_Dondarrion', 'Archmaester_Ebrose', 'Dolorous_Edd', 'Davos_Seaworth', 'Gilly', 'Jaime_Lannister', 'Meera_Reed', 'Sandor_Clegane', 'Tormund_Giantsbane', 'Theon_Greyjoy', 'Melisandre', 'Podrick_Payne', 'Daario_Naharis', 'Samwell_Tarly', 'Sansa_Stark', 'Yara_Greyjoy', 'Robin_Arryn', 'Jorah_Mormont' ],
    'Jon Ayson': [ 'Cersei_Lannister', 'Euron_Greyjoy', 'Archmaester_Ebrose', 'Brienne_of_Tarth', 'Night_King', 'Melisandre', 'Dolorous_Edd', 'Sandor_Clegane', 'Edmure_Tully', 'Gregor_Clegane', 'Tyrion_Lannister', 'Yara_Greyjoy', 'Daario_Naharis', 'Rhaegal_Dragon', 'Ghost_Direwolf', 'Qyburn', 'Hot_Pie', 'Davos_Seaworth', 'Meera_Reed', 'Varys', 'Jorah_Mormont', 'Viserion_Dragon', 'Beric_Dondarrion', 'Tycho_Nestoris', 'Jaqen_Hghar' ],
    'Jordan / Julia': [ 'Beric_Dondarrion', 'Grey_Worm', 'Meera_Reed', 'Gregor_Clegane', 'Euron_Greyjoy', 'Melisandre', 'Ser_Bronn', 'Bran_Stark', 'Viserion_Dragon', 'Drogon_Dragon', 'Gilly', 'Ghost_Direwolf', 'Night_King', 'Brienne_of_Tarth', 'Cersei_Lannister', 'Daario_Naharis', 'Tormund_Giantsbane', 'Lyanna_Mormont', 'Theon_Greyjoy', 'Qyburn', 'Dolorous_Edd', 'Podrick_Payne', 'Jorah_Mormont', 'Sandor_Clegane', 'Jaime_Lannister' ],
    'Kaitlin Cox': [ 'Tormund_Giantsbane', 'Arya_Stark', 'Sandor_Clegane', 'Little_Sam', 'Gregor_Clegane', 'Night_King', 'Samwell_Tarly', 'Jorah_Mormont', 'Euron_Greyjoy', 'Archmaester_Ebrose', 'Grey_Worm', 'Tyrion_Lannister', 'Cersei_Lannister', 'Hot_Pie', 'Ghost_Direwolf', 'Varys', 'Brienne_of_Tarth', 'Davos_Seaworth', 'Jaqen_Hghar', 'Jaime_Lannister', 'Ser_Bronn', 'Missandei', 'Lyanna_Mormont', 'Theon_Greyjoy', 'Yara_Greyjoy' ],
    'Kevin Welsh': [ 'Cersei_Lannister', 'Euron_Greyjoy', 'Qyburn', 'Varys', 'Tormund_Giantsbane', 'Sansa_Stark', 'Dolorous_Edd', 'Grey_Worm', 'Yara_Greyjoy', 'Arya_Stark', 'Missandei', 'Ser_Bronn', 'Daenerys_Targaryen', 'Sandor_Clegane', 'Podrick_Payne', 'Jaime_Lannister', 'Theon_Greyjoy', 'Brienne_of_Tarth', 'Melisandre', 'Bran_Stark', 'Jorah_Mormont', 'Beric_Dondarrion', 'Viserion_Dragon', 'Gendry', 'Gregor_Clegane' ],
    'Laura Welsh': [ 'Gregor_Clegane', 'Davos_Seaworth', 'Euron_Greyjoy', 'Sansa_Stark', 'Daenerys_Targaryen', 'Nymeria_Direwolf', 'Night_King', 'Yara_Greyjoy', 'Jaime_Lannister', 'Samwell_Tarly', 'Bran_Stark', 'Viserion_Dragon', 'Cersei_Lannister', 'Varys', 'Qyburn', 'Podrick_Payne', 'Grey_Worm', 'Brienne_of_Tarth', 'Ser_Bronn', 'Melisandre', 'Jorah_Mormont', 'Arya_Stark', 'Ghost_Direwolf', 'Tormund_Giantsbane', 'Theon_Greyjoy' ],
    'Natalie Burrows': [ 'Brienne_of_Tarth', 'Varys', 'Podrick_Payne', 'Little_Sam', 'Gilly', 'Theon_Greyjoy', 'Grey_Worm', 'Sansa_Stark', 'Ser_Bronn', 'Qyburn', 'Missandei', 'Viserion_Dragon', 'Euron_Greyjoy', 'Gendry', 'Samwell_Tarly', 'Tormund_Giantsbane', 'Gregor_Clegane', 'Sandor_Clegane', 'Jaime_Lannister', 'Jorah_Mormont', 'Arya_Stark', 'Ghost_Direwolf', 'Yara_Greyjoy', 'Davos_Seaworth', 'Cersei_Lannister' ],
    'Nate Ade': [ 'Brienne_of_Tarth', 'Theon_Greyjoy', 'Gregor_Clegane', 'Cersei_Lannister', 'Jorah_Mormont', 'Sandor_Clegane', 'Grey_Worm', 'Melisandre', 'Euron_Greyjoy', 'Varys', 'Tormund_Giantsbane', 'Viserion_Dragon', 'Night_King', 'Bran_Stark', 'Dolorous_Edd', 'Daenerys_Targaryen', 'Daario_Naharis', 'Archmaester_Ebrose', 'Jaime_Lannister', 'Davos_Seaworth', 'Podrick_Payne', 'Jon_Snow', 'Beric_Dondarrion', 'Edmure_Tully', 'Ghost_Direwolf' ],
    'Pat Henderson': [ 'Melisandre', 'Arya_Stark', 'Sandor_Clegane', 'Ser_Bronn', 'Davos_Seaworth', 'Gendry', 'Tormund_Giantsbane', 'Lyanna_Mormont', 'Meera_Reed', 'Viserion_Dragon', 'Drogon_Dragon', 'Podrick_Payne', 'Bran_Stark', 'Tyrion_Lannister', 'Jorah_Mormont', 'Theon_Greyjoy', 'Jaime_Lannister', 'Robin_Arryn', 'Beric_Dondarrion', 'Varys', 'Sansa_Stark', 'Yara_Greyjoy', 'Jon_Snow', 'Gregor_Clegane', 'Cersei_Lannister' ],
    'Solange Castillo': [ 'Meera_Reed', 'Euron_Greyjoy', 'Gilly', 'Podrick_Payne', 'Lyanna_Mormont', 'Little_Sam', 'Archmaester_Ebrose', 'Hot_Pie', 'Jaqen_Hghar', 'Varys', 'Missandei', 'Davos_Seaworth', 'Yara_Greyjoy', 'Edmure_Tully', 'Jorah_Mormont', 'Melisandre', 'Qyburn', 'Robin_Arryn', 'Sandor_Clegane', 'Gregor_Clegane', 'Arya_Stark', 'Daario_Naharis', 'Brienne_of_Tarth', 'Cersei_Lannister', 'Rhaegal_Dragon' ]
};

class CardBuilder {
    constructor() {
        this.charactersEl = document.getElementById('characters');
        this.cardEl = document.getElementById('card');
        this.picksLoaderEl = document.getElementById('picksLoader');
        this.selectedAnnounceEl = document.getElementById('selected');
        
        this.selected = null;

        this.getSelected = this.getSelected.bind(this);
        this.setSelected = this.setSelected.bind(this);
        this.deselect = this.deselect.bind(this);
        this.append = this.append.bind(this);

        this.createCharacterList();
        this.createCard();
    }

    createCharacterList() {
        Object.keys(characters).forEach((id) => {
            const props = characters[id];
            const character = new Character(id, props, this.getSelected, this.setSelected, this.deselect, this.append);
            this.charactersEl.appendChild(character.el);
        });
    }
    
    getSelected() {
        return this.selected;
    }

    setSelected(el) {
        // deselect all others
        document.querySelectorAll('#characters .character').forEach((character) => {
            character.classList.remove('selected');
        });
        this.selected = el;
        this.selectedAnnounceEl.innerText = el.title;
        el.classList.add('selected');
        document.body.classList.add('selected');
    }

    deselect() {
        this.selectedAnnounceEl.innerText = '';
        document.body.classList.remove('selected');
        this.selected.classList.remove('selected');
        this.selected = null;
    }

    createCard() {
        this.charactersEl.addEventListener('dragover', this.dragover.bind(this));
        this.charactersEl.addEventListener('dragenter', this.dragenter.bind(this));
        this.charactersEl.addEventListener('dragleave', this.dragleave.bind(this));
        this.charactersEl.addEventListener('drop', this.drop.bind(this));
        this.cardEl.addEventListener('dragover', this.dragover.bind(this));
        this.cardEl.addEventListener('drop', this.drop.bind(this));
        this.cardEl.addEventListener('dragenter', this.dragenter.bind(this));
        this.cardEl.addEventListener('dragleave', this.dragleave.bind(this));
        this.cardEl.addEventListener('click', this.cardclick.bind(this));
    }

    cardclick(e) {
        if (this.selected && !e.target.draggable) {
            e.target.appendChild(this.selected);
            this.deselect();
            this.updatePicks();
        } else if (!this.selected && e.target.draggable) {
            this.unpick(e.target);
            this.updatePicks();
        }
    }
    
    dragover(e) {
        // prevent dropping on images
        if (!e.target.draggable) {
            e.preventDefault();
        }
    }
    
    dragenter(e) {
        e.target.classList.add('draggingover');
    }
    
    dragleave(e) {
        e.target.classList.remove('draggingover');
    }
    
    drop(e) {
        const id = e.dataTransfer.getData('id');
        e.target.appendChild(document.getElementById(id));
        e.target.classList.remove('draggingover');
        this.deselect();
        this.updatePicks();
    }

    append(el) {
        const firstOpenSlot = this.getFirstOpenSlot();
        if (firstOpenSlot) {
            firstOpenSlot.appendChild(el);
            this.updatePicks();
        }
    }
    
    getPicks() {
        const slots = document.querySelectorAll('.slot');
        const picks = [];
        slots.forEach((slot) => {
            const pick = slot.childNodes[0];
            picks.push(pick ? pick.id.replace(/ /g, '-') : '');
        });
        return picks;
    }

    updatePicks() {
        const picks = this.getPicks();
        document.getElementById('mail').href = `mailto:cwmacdon+bingot@gmail.com?body=${picks}`;
    }

    getFirstOpenSlot() {
        const slots = document.querySelectorAll('.slot');
        let firstOpenSlot;
        slots.forEach((slot) => {
            if (!firstOpenSlot && !slot.childNodes[0]) {
                firstOpenSlot = slot;
            }
        });
        return firstOpenSlot;
    }

    unpick(el) {
        this.charactersEl.appendChild(el);
    }

    clearBoard() {
        const selectedCharacterEls = document.querySelectorAll('.slot div');

        selectedCharacterEls.forEach((characterEl) => {
            this.unpick(characterEl);
        });
    }

    loadPicks(characters) {
        this.clearBoard();
        characters.forEach((character) => {
            const characterEl = document.getElementById(character);
            this.append(characterEl);
        });
    }
}

class Character {
    constructor(id, props, getSelected, setSelected, deselect, append) {
        const { status } = props;
        this.getSelected = getSelected;
        this.setSelected = setSelected;
        this.deselect = deselect;
        this.append = append;
        this.name = id.replace(/_/g, ' ');

        this.el = document.createElement('div');
        this.el.style.backgroundImage = `url('img/${id}-min.png')`;

        this.el.classList.add('character');
        this.el.classList.add(id);
        if (status === 'dead') {
            this.el.classList.add('dead');
        }

        this.el.title = this.name;
        this.el.id = id;
        this.el.draggable = 'true';
        this.el.addEventListener('click', this.click.bind(this));
        this.el.addEventListener('dragstart', this.dragstart.bind(this));
        this.el.addEventListener('dragend', this.dragend.bind(this));

        this.charactersEl = document.getElementById('characters');
    }

    click(e) {
        if (e.target.parentNode === this.charactersEl) {
            if (this.getSelected() === e.target) {
                this.deselect();
            } else {
                this.setSelected(e.target);
            }
        }
    }

    dragstart(e) {
        e.dataTransfer.setData('id', e.target.id);
        document.body.classList.add('dragging');
        this.setSelected(e.target);
    }
    
    dragend(e) {
        document.body.classList.remove('dragging');
    } 
}

class Picks {
    constructor(cardBuilder) {
        this.cardBuilder = cardBuilder;
        this.minisEl = document.getElementById('minis');
        
        this.selected = null;

        Object.keys(picks).forEach((picker) => {
            this.createMiniCard(picker, picks[picker]);
        });
    }

    createMiniCard(picker, pickSet) {
        const miniCard = document.createElement('div');
        miniCard.classList.add('miniCard');
        const label = document.createElement('div');
        label.innerText = picker;
        label.classList.add('picker');
        miniCard.appendChild(label);
        const picks = document.createElement('div');
        picks.classList.add('picks');
        miniCard.appendChild(picks);
        pickSet.forEach((id) => {
            const status = characters[id].status;
            const char = document.createElement('div');
            char.style.backgroundImage = `url('img/${id}-min.png')`;
            
            char.classList.add('miniChar');
            char.classList.add(id);
            if (status === 'dead') {
                char.classList.add('dead');
            }
            picks.appendChild(char);
            char.addEventListener('click', () => {
                cardBuilder.loadPicks(pickSet);
            });
        });
        this.minisEl.appendChild(miniCard);
    }
}

const cardBuilder = new CardBuilder();

new Picks(cardBuilder);

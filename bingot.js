const characters = [
    'Archmaester_Ebrose.png',
    'Arya_Stark.png',
    'Beric_Dondarrion.png',
    'Bran_Stark.png',
    'Brienne of Tarth.png',
    'Cersei_Lannister.png',
    'Daario_Naharis.png',
    'Daenerys_Targaryen.png',
    'Davos_Seaworth.png',
    'Dolorous_Edd.png',
    'Drogon_Dragon.png',
    'Edmure_Tully.png',
    'Euron_Greyjoy.png',
    'Gendry.png',
    'Ghost_Direwolf.png',
    'Gilly.png',
    'Gregor_Clegane.png',
    'Grey_Worm.png',
    'Hot_Pie.png',
    'Jaime_Lannister.png',
    'Jaqen_Hghar.png',
    'Jon_Snow.png',
    'Jorah_Mormont.png',
    'Little_Sam.png',
    'Lyanna_Mormont.png',
    'Meera_Reed.png',
    'Melisandre.png',
    'Missandei.png',
    'Night_King.png',
    'Nymeria_Direwolf.png',
    'Podrick_Payne.png',
    'Qyburn.png',
    'Rhaegal_Dragon.png',
    'Robin_Arryn.png',
    'Samwell_Tarly.png',
    'Sandor_Clegane.png',
    'Sansa_Stark.png',
    'Ser_Bronn.png',
    'Theon_Greyjoy.png',
    'Tormund_Giantsbane.png',
    'Tycho_Nestoris.png',
    'Tyrion_Lannister.png',
    'Varys.png',
    'Viserion_Dragon.png',
    'Yara_Greyjoy.png'
];

const charactersEl = document.getElementById('characters');

characters.forEach((character) => {
    const characterEl = document.createElement('img');
    const id = character.split('.png')[0];
    const name = id.replace(/_/g, ' ');
    characterEl.src = `img/${character}`;
    characterEl.className = 'character';
    characterEl.draggable = 'true';
    characterEl.title = name;
    characterEl.id = id;

    characterEl.addEventListener('dragstart', dragstart);
    characterEl.addEventListener('dragend', dragend);
    characterEl.addEventListener('dblclick', dblclick);
    characterEl.addEventListener('click', characterclick);

    charactersEl.appendChild(characterEl);
});

const card = document.getElementById('card');

// add drop zone handlers
charactersEl.addEventListener('dragover', dragover);
charactersEl.addEventListener('dragenter', dragenter);
charactersEl.addEventListener('dragleave', dragleave);
charactersEl.addEventListener('drop', drop);
card.addEventListener('dragover', dragover);
card.addEventListener('drop', drop);
card.addEventListener('dragenter', dragenter);
card.addEventListener('dragleave', dragleave);
card.addEventListener('click', cardclick);
let selected;

function dragstart(e) {
    e.dataTransfer.setData('text', e.target.id);
    document.body.classList.add('dragging');
}

function dragend(e) {
    document.body.classList.remove('dragging');
}

function characterclick(e) {
    if (e.target.parentNode === document.getElementById('characters')) {
        if (selected === e.target) {
            selected = null;
            document.body.classList.remove('selected');
            e.target.classList.remove('selected');
        } else {
            selected = e.target;
            document.querySelectorAll('#characters .character').forEach((character) => {
                character.classList.remove('selected');
            });
            document.body.classList.add('selected');
            e.target.classList.add('selected');
        }
    }
}

function cardclick(e) {
    if (selected && !e.target.draggable) {
        e.target.appendChild(selected);
        document.body.classList.remove('selected');
        selected.classList.remove('selected');
        selected = null;
    } else if (!selected && e.target.draggable) {
        document.getElementById('characters').appendChild(e.target);
    }
}

function dblclick(e) {
    const firstOpenSlot = getFirstOpenSlot();
    if (firstOpenSlot) {
        firstOpenSlot.appendChild(e.target);
    }
}

function dragover(e) {
    // prevent dropping on images
    if (!e.target.draggable) {
        e.preventDefault();
    }
}

function dragenter(e) {
    e.target.classList.add('draggingover');
}

function dragleave(e) {
    e.target.classList.remove('draggingover');
}

function drop(e) {
    const data = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(data));
    e.target.classList.remove('draggingover');
    updatePicks();
}

function updatePicks() {
    const picks = getPicks();
    document.getElementById('output').value = picks.join(',');
}

function getPicks() {
    const slots = document.querySelectorAll('.slot');
    const picks = [];
    slots.forEach((slot) => {
        const pick = slot.childNodes[0];
        picks.push(pick ? pick.id.replace(/ /g, '-') : '');
    });
    return picks;
}

function getFirstOpenSlot() {
    const slots = document.querySelectorAll('.slot');
    let firstOpenSlot;
    slots.forEach((slot) => {
        if (!firstOpenSlot && !slot.childNodes[0]) {
            firstOpenSlot = slot;
        }
    });
    return firstOpenSlot;
}

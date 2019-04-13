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
charactersEl.addEventListener('dragover', dragover);
charactersEl.addEventListener('drop', drop);

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

    charactersEl.appendChild(characterEl);
});

const slots = document.querySelectorAll('.slot');

slots.forEach((slot) => {
    slot.addEventListener('dragover', dragover);
    slot.addEventListener('drop', drop);
});

function dragstart(e) {
    e.dataTransfer.setData('text', e.target.id);
}

function dragover(e) {
    // prevent dropping on images
    if (!e.target.draggable) {
        e.preventDefault();
    }
}

function drop(e) {
    const data = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(data));
    // updatePicks();
}

function updatePicks() {
    // document.getElementById('output').value = picks.join(',');
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
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
    const name = character.split('.png')[0].replace('_', ' ');
    characterEl.src = `img/${character}`;
    characterEl.className = 'character';
    characterEl.title = name;

    characterEl.addEventListener('mousedown', (e) => {
        const node = e.currentTarget;
        this.start = e.clientX;
        this.startOffset = node.offsetLeft;
        this.diff = 0;
        node.classList.add('dragging');
        const onMouseMove = (e) => {
            let diff = e.clientX - this.start;
            this.diff = diff;
            console.log(this.diff);
            node.style.left = `${diff}px`;
        }
        const onMouseUp = () => {
            node.style.left = `0`;
            node.classList.remove('dragging');
            document.body.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseup', onMouseUp);
            console.log(this.diff);
        }
        document.body.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseup', onMouseUp);
    });

    charactersEl.appendChild(characterEl);
});

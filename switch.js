document.getElementById('checkbox').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('light-mode');
        document.querySelector('.logo img').src = 'alternate_logo_dragon.png';
        document.querySelector('.connexion-logo img').src = 'alternate_logo_porte_des_enfers.png';
        document.querySelector('.contenu .imgboite img').src = './image/orbg_light.png';
    } else {
        document.body.classList.remove('light-mode');
        document.querySelector('.logo img').src = 'logo_dragon.png';
        document.querySelector('.connexion-logo img').src = 'logo_porte_des_enfers.png';
        document.querySelector('.contenu .imgboite img').src = './image/orbg.png';
    }
});

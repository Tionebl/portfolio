const { exec } = require('child_process');

// const nomDuService = 'wuauserv';
const nomDuService = 'newNodeJS'

// Commande pour démarrer le service Windows
const commande = `net start ${nomDuService}`;

const isActivated = `sc query ${nomDuService}`;

const stopSvc = ` net stop ${nomDuService}`;

const svcList = `sc query ${nomDuService}`;
// // Exécution de la commande
// exec(commande, (erreur, stdout, stderr) => {
//     if (erreur) {
//         console.error(`Erreur lors du démarrage du service : ${erreur}`);
//         return;
//     }
//     console.log(`Service ${nomDuService} démarré avec succès`);
//     console.log(`Sortie standard : ${stdout}`);
//     console.error(`Sortie d'erreur : ${stderr}`);
// });

exec(isActivated, (erreur, stdout, stderr) => {
    console.log( `${nomDuService} est bien activé`)
});

// exec(stopSvc, (erreur, stdout, stderr) => {
//     if (erreur) {
//         console.error(`Erreur lors de l'arrêt du service : ${erreur}`);
//         return;
//     }

//     if (stdout.includes('Arrêt du service réussi')) {
//         console.log(`Service ${nomDuService} arrêté avec succès`);
//     } else {
//         console.log(`L'arrêt du service ${nomDuService} a échoué`);
//     }

//     console.log(`Sortie standard : ${stdout}`);
//     console.error(`Sortie d'erreur : ${stderr}`);
// });

exec(svcList, (erreur, stdout, stderr) => {
    if (erreur) {
        console.error(`Erreur lors de la récupération de la liste des services : ${erreur}`);
        return;
    }

    console.log(`Liste des services : \n${stdout}`);
    console.error(`Sortie d'erreur : ${stderr}`);
});
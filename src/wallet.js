import {generateKey, toPublicKey} from '../blockchain/helper/ecc';

document.getElementById("generatePrivateKey").addEventListener('click', function() {
    generateKey().then(privateKey => {
        document.getElementById("generated_private_key").value = privateKey
        document.getElementById("generated_public_key").value = toPublicKey(privateKey);
    })
});

document.getElementById("seePublicKey").addEventListener('click', function() {
    var privateKey = document.getElementById("your_private_key").value.trim();
    document.getElementById("your_public_key").value = toPublicKey(privateKey);
});


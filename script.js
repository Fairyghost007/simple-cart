const counter = document.getElementById('counter')
const increment = document.querySelectorAll('#increment')
const decrement = document.querySelectorAll('#decrement')
const hearts = document.querySelectorAll('.heart')
const prixs = document.querySelectorAll('#prix')
const allCounter = document.querySelectorAll('#counter')
const deletebtns = document.querySelectorAll('#delete')

// Changement de couleur du btn heart
for (let heart of hearts) {
    heart.addEventListener('click', function() {
        if (heart.classList.contains('text-white')) {
            heart.classList.remove('text-white');
            heart.classList.add('text-red-500');
        } else {
            heart.classList.remove('text-red-500');
            heart.classList.add('text-white');
        }
    });
}

// metre a jour le total du cart
function updateTotal() {
    const prixs = document.querySelectorAll('#prix')
    const allCounter = document.querySelectorAll('#counter')
    let total = 0
    for (let i = 0; i < prixs.length; i++) {
        let prix = parseInt(prixs[i].textContent)
        let qte = parseInt(allCounter[i].textContent)
        total += prix * qte
    }
    document.getElementById('totalprix').textContent = total
}

document.addEventListener("DOMContentLoaded", function() {
    
    updateTotal()

    // Gérer quantité du produit ajouter ou diminuer
    for (let i = 0 ;i < increment.length;i++) {
        increment[i].addEventListener('click', function() {
            allCounter[i].textContent = parseInt(allCounter[i].textContent) + 1
            updateTotal()
        })
    }

    for (let i = 0; i < decrement.length; i++) {
        decrement[i].addEventListener('click', function() {
            if (parseInt(counter.textContent) > 1) {
                allCounter[i].textContent = parseInt(allCounter[i].textContent) - 1
                updateTotal()
            }
        })
    }

    // Supprimer un produit
    for (let deletebtn of deletebtns) {
        deletebtn.addEventListener('click', function() {
            const produitParent = deletebtn.parentElement.parentElement.parentElement;
            if (produitParent) {
                produitParent.remove();
                updateTotal();
            }
        });
    }
    
})

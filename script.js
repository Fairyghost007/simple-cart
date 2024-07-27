const counter = document.getElementById('counter');
const increment = document.querySelectorAll('#increment')
const decrement = document.querySelectorAll('#decrement')
const hearts=document.querySelectorAll('.heart')




const deletebtns = document.querySelectorAll('#delete')

// changement de couleur du btn heart

hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        if (heart.classList.contains('text-white')) {
            heart.classList.remove('text-white');
            heart.classList.add('text-red-500');
        } else {
            heart.classList.remove('text-red-500');
            heart.classList.add('text-white');
        }
    });
});
/////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    function updateTotal() {
        let total =0
        prixs.forEach((prix,i) => {
            prix = parseInt(prix.textContent);
            qte=parseInt(allCounter[i].textContent)
            total += prix * qte;
        });
        document.getElementById('totalprix').textContent = total;
    }

    updateTotal();

    //gerer  quatite du produit

    increment.forEach((btn, i) => {
        btn.addEventListener('click', function() {
            allCounter[i].textContent = parseInt(allCounter[i].textContent)+1;
            updateTotal();
        });
    });

    decrement.forEach((btn, i) => {
        btn.addEventListener('click', function() {
            if (parseInt(counter.textContent) > 1) {
                allCounter[i].textContent = parseInt(allCounter[i].textContent)-1;
                updateTotal();
            }
        });
    });

    // supprimer un produit

    deletebtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            const productParent = btn.parentElement.parentElement.parentElement; 
            if (productParent) {
                productParent.remove();
                updateTotal();
            }
        });
    });
});



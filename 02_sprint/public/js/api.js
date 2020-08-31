window.addEventListener("load", function(){

    let select = document.querySelector('.selectCategory')
    let selectId = select.value;
    let selectSubCategories = document.querySelector('.selectSubCategories');

    function loadSubCategories(id){
        fetch('http://localhost:3030/api/category/'+ id)
        .then(function(response){
            return response.json()
        })
        .then(function(results){
            let subCategories = results.data
            if (subCategories) {
                for (const subCategory of subCategories) {
                    selectSubCategories.innerHTML += `<option value="${subCategory.id}">${subCategory.name}</option>`
                }
            } else {
                selectSubCategories.innerHTML += `<option disabled>La categoría seleccionada no tiene sub categorías</option>`
            }
        })
        .catch(e => console.log(e));
    }

    selectSubCategories.innerHTML = ""
    loadSubCategories(selectId);
    
    select.addEventListener('change', function(e){
        let selectId = select.value;
        selectSubCategories.innerHTML = ""
        loadSubCategories(selectId);
    })
})

//  Search Bar JS
function searchName(){
    let filter = document.getElementById('search-input').value.toUpperCase();
    let name = document.getElementById('Name');
    let a = name.getElementsByTagName('a');
    for(var i=0; i<a.length; i++){
        let b = a[i].getElementsByTagName('b')[0];
        let textValue = b.textContent || b.innerHTML;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            a[i].style.display ='';
        }
        else{
            a[i].style.display = 'none';
        }

    }
}

 // Disable Right Click
 document.addEventListener("contextmenu", function(e){
    e.preventDefault();
},false)

// Disable Shortcut Keys
document.addEventListener("keydown",function(e){
    if(e.ctrlKey || e.keycode==123){
        e.stopPropagation();
        e.preventDefault();
    }
});
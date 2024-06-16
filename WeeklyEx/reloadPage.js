function reloadPage(){
    var pageName = document.getElementById('inputPage').value;
    if(pageName) {
        var x = new XMLHttpRequest();
        x.open('HEAD', pageName + '.html', true);
        x.onreadystatechange=function(){
            if(x.readyState == 4) {
                if(x.status === 200){
                    window.location.href = pageName + '.html';

                }else{
                    alert("Page not found, please enter a valid name");
                }
            }
        };
        x.send();
    }else{
        alert("invalid entry")
    }
}

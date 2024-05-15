document.addEventListener('DOMContentLoaded' , function(){
    fetch('./dist/components/default-particles-config.json').then(function(res){
        res.json().then(function(cfg){
            particlesJS(document.getElementById("particles") , cfg);
        })
    }).catch(function(err){
        console.log('Failed to load particles-js cfg')
    })
});
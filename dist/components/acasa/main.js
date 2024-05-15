document.addEventListener('DOMContentLoaded' , function(){
    fetch('./dist/components/default-particles-config.json').then(function(res){
        res.json().then(function(cfg){
            particlesJS(document.getElementById("particles") , cfg);
        })
    }).catch(function(err){
        console.log('Failed to load particles-js cfg')
    })

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-left",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }


});


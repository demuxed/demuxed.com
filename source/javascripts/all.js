// This is where it all goes :)
(function (document) {
  function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
  }

  ready(function() {
    MicroModal.init({
      onShow: modal => console.info(`${modal.id} is shown`),
      openTrigger: 'data-custom-open',
      closeTrigger: 'data-custom-close',
    });
  });
})(document);

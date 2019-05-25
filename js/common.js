jQuery(document).ready(function() {
  jQuery('.toggle-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.menu ul').toggleClass('active');
    });
});

// CLOSE
function closeWin(){
  close();
}

// IMAGE CLICK -> PAGE LINK
$(document).ready(function() {
  $(".thumb").click(function(){
    var id= $(this).attr("id");
    var link_id= id + ".html";
    window.open(link_id, '_blank');
  });
});

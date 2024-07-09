

(function ($) {
    "use strict";


///    Sidebar  ///
    
        $(document).ready(function () {
    $("#sideNav").click(function(){
      if($(this).hasClass('closed')){
        $('.navbar-side').animate({left: '0px'});
        $(this).removeClass('closed');
        $('#page-wrapper').animate({'margin-left' : '318px'});
        
      }
      else{
          $(this).addClass('closed');
        $('.navbar-side').animate({left: '-318px'});
        $('#page-wrapper').animate({'margin-left' : '0px'}); 
      }
    });
    });

        

/*----------------Dropdown Menu-------------------*/

            $('#main-menu').dropdownMenu();

            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });
            $(document).ready(function() {
    $('#example').DataTable();
} );
    // Initializing ///



    // Image Choose file


$(document).ready(function(e) {
        $(".showonhover").click(function(){
            $("#selectfile").trigger('click');
        });
    });


var input = document.querySelector('input[type=file]');

input.onchange = function () {
  var file = input.files[0];

  drawOnCanvas(file);
  displayAsImage(file);
};

function drawOnCanvas(file) {
  var reader = new FileReader();

  reader.onload = function (e) {
    var dataURL = e.target.result,
        c = document.querySelector('canvas'),
        ctx = c.getContext('2d'),
        img = new Image();

    img.onload = function() {
      c.width = img.width;
      c.height = img.height;
      ctx.drawImage(img, 0, 0);
    };

    img.src = dataURL;
  };

  reader.readAsDataURL(file);
}

function displayAsImage(file) {
  var imgURL = URL.createObjectURL(file),
      img = document.createElement('img');

  img.onload = function() {
    URL.revokeObjectURL(imgURL);
  };

  img.src = imgURL;
  document.body.appendChild(img);
}

$("#upfile1").click(function () {
    $("#file1").trigger('click');
});





}(jQuery));

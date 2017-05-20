/**
 * Created by tylerhan on 2017-05-18.
 */

$( document ).ready(function() {
    function openModal() {
        $('#fullform > input[name=name]').val($(this).children("input[name=name]").val());
        $('#fullform > input[name=email]').val($(this).children("input[name=email]").val());
        $('#contactModal').modal('show')
    }

    $( "#contactform" ).submit(function( event ) {
        event.preventDefault();
        openModal();
    });

    $( ".start" ).click(function( event ) {
        event.preventDefault();
        openModal();
    });

    var $submit = $( "#sendcontact" );

    $(document)
        .one('focus.autoExpand', 'textarea.autoExpand', function(){
            var savedValue = this.value;
            this.value = '';
            this.baseScrollHeight = this.scrollHeight;
            this.value = savedValue;
        })
        .on('input.autoExpand', 'textarea.autoExpand', function(){
            var minRows = this.getAttribute('data-min-rows')|0, rows;
            this.rows = minRows;
            rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 22);
            this.rows = minRows + rows;
        })
        .on('submit', '#fullform', function (e) {
            e.preventDefault();
            // alert($submit.html());
            if($submit.html() == "Submit"){
                $.ajax({
                    type     : "POST",
                    cache    : false,
                    url      : 'php/contact.php',
                    data     : $('#fullform').serialize(),
                    success  : function(data) {
                        if(data == 200){
                            $("#fullform").slideUp(function(){
                                $submit.html("Done");
                                $submit.css('background-color','#0D47A1');
                                $submit.css('border','none');
                                $("#success").html("Thank you for your inquiry! We'll get back to you shortly.");
                            });
                        }else{
                            alert("Oops, something went wrong: " + data);
                        }
                    },
                    error: function(xhr, status, error) {
                        alert("Oops, something went wrong: "+ error);
                    }
                });
            }else{
                $('#contactModal').modal('hide');
            }
        });
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 50
                    }, 500, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});
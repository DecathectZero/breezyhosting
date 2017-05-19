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

    $( "#boxy" ).click(function( event ) {
        event.preventDefault();
        openModal();
    });

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
        });
});
/**
 * Created by aaronli on 2017-05-20.
 */
// JavaScript Document
var s = {

    0: "1MM",
    1: "2MM",
    2: "3MM",
    3: "4MM",
    4: "5MM",
    5: "6MM",
    6: "7MM",
    7: "8MM",
    8: "9MM",
    9: "10MM",
    10: "11MM",
    11: "12MM",
    12: "13MM",
    13: "14MM",
    14: "15MM",
    15: "16MM",
    16: "17MM",
    17: "18MM",
    18: "19MM",
    19: "20MM",
    20: "21MM",
    21: "22MM",
    22: "23MM",
    23: "24MM",
    24: "25MM",
    25: "26MM",
    26: "27MM",
    27: "28MM",
    28: "29MM",
    29: "30MM",
    30: "31MM",
    31: "32MM",
    32: "33MM",
};

var c = {

    0: "0.10%",
    1: "0.15%",
    2: "0.20%",
    3: "0.25%",
    4: "0.30%",
    5: "0.35%",
    6: "0.40%",
    7: "0.45%",
    8: "0.50%",
    9: "0.55%",
    10: "0.60%",
    11: "0.65%",
    12: "0.70%",
    13: "0.75%",
    14: "0.80%",
    15: "0.85%",
    16: "0.90%",
    17: "0.95%",
    18: "1.00%",
    19: "1.05%",
    20: "1.10%",
    21: "1.15%",
    22: "1.20%",
    23: "1.25%",
    24: "1.30%",
    25: "1.35%",
    26: "1.40%",
    27: "1.45%",
    28: "1.50%",

};

var d = {

    0: "$6",
    1: "$7",
    2: "$8",
    3: "$9",
    4: "$10",
    5: "$11",
    6: "$12",
    7: "$13",
    8: "$14",
    9: "$15",
    10: "$16",
    11: "$17",
    12: "$18",
    13: "$19",
    14: "$20",
    15: "$21",
    16: "$22",
    17: "$23",
    18: "$24",
    19: "$25",
    20: "$26",
    21: "$27",
    22: "$28",
    23: "$29",
    24: "$30",
    25: "$31",
    26: "$32",
    27: "$33",
    28: "$34",
};

var l = {
    0: "5%",
    1: "6%",
    2: "7%",
    3: "8%",
    4: "9%",
    5: "10%",
    6: "11%",
    7: "12%",
    8: "13%",
    9: "14%",
    10: "15%",
    11: "17%",
    12: "17%",
    13: "18%",
    14: "19%",
    15: "20%",
    16: "21%",
    17: "22%",
    18: "23%",
    19: "24%",
    20: "25%",
    21: "26%",
    22: "27%",
    23: "28%",
    24: "29%",
    25: "30%",

};

var st = {
    0: "50%",
    1: "55%",
    2: "60%",
    3: "65%",
    4: "70%",
    5: "75%",
    6: "80%",
    7: "85%",
    8: "90%",
    9: "95%",
    10: "100%",
};

$(document).ready(function() {

    $('.month').on('click',function(event) {
        var id = $(this).attr('id');

        $('.month').removeClass('selected-month');
        $(this).addClass('selected-month');
        $(".month").removeClass("active-month");
        $(this).addClass("active-month");

        $('#ad_load').val(id);

        calcualtePrice()
    });

    $("#slider_amirol1").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 32,
        step: 1,
        slide:
            function(event, ui)
            {
                update1(1,ui.value); //changed
                calcualtePrice(ui.value);
            }
    });

    $("#slider_amirol2").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 28,
        step: 1,
        slide:
            function(event, ui)
            {
                update2(1,ui.value); //changed
                calcualtePrice(ui.value);
            }
    });


    $("#slider_amirol3").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 28,
        step: 1,
        slide:
            function(event, ui)
            {
                update3(1,ui.value); //changed
                calcualtePrice(ui.value);
            }
    });


    $("#slider_amirol4").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 25,
        step: 1,
        slide:
            function(event, ui)
            {
                update4(1,ui.value); //changed
                calcualtePrice(ui.value);
            }
    });

    $("#slider_amirol5").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 10,
        step: 1,
        slide:
            function(event, ui)
            {
                update5(1,ui.value); //changed
                calcualtePrice(ui.value);
            }
    });

    update1();
    update2();
    update3();
    update4();
    update5();
    calcualtePrice();
});


function update1(slider,val) {

    if(undefined === val) val = 0;
    var amount = s[val];
    console.log(amount);

    $('#sliderVal1').val(val);

    $('#slider_amirol1 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}

function update2(slider,val) {

    if(undefined === val) val = 0;
    var amount = c[val];

    $('#sliderVal2').val(val);

    $('#slider_amirol2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}
function update3(slider,val) {

    if(undefined === val) val = 0;
    var amount = d[val];

    $('#sliderVal3').val(val);

    $('#slider_amirol3 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}

function update4(slider,val) {

    if(undefined === val) val = 0;
    var amount = l[val];

    $('#sliderVal4').val(val);

    $('#slider_amirol4 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}

function update5(slider,val) {

    if(undefined === val) val = 0;
    var amount = st[val];

    $('#sliderVal5').val(val);

    $('#slider_amirol5 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}

function calcualtePrice(val){

    if(undefined === val)
        val = $('#sliderVal1').val();

    var streams = $('#sliderVal1').val();
    streams = (Math.floor(streams) + 1) * 1000000;

    var ctr =  $('#sliderVal2').val();
    ctr = (Math.floor(ctr)*.05) + .1;

    var inferred_views = streams / ctr;

    var neon_serves = .99;
    var default_serves = .01;

    var default_tracked_views = default_serves * inferred_views;
    var neon_tracked_views = neon_serves * inferred_views;

    var lift =  $('#sliderVal4').val();
    var liftnum = 1 + (Math.floor(lift) + 5) / 100;

    var neonCTR = ctr * liftnum;

    var tracked_default_clicks = default_tracked_views * ctr;
    var tracked_neon_clicks = neon_tracked_views * neonCTR;
    var inferred_default_clicks = (default_tracked_views + neon_tracked_views) * ctr;
    var inferred_neon_clicks =  (default_tracked_views + neon_tracked_views) * neonCTR;
    var inferred_incremental_clicks = inferred_neon_clicks - inferred_default_clicks;
    var actual_inc_clicks = tracked_neon_clicks - (inferred_default_clicks - tracked_default_clicks);
    var cpc = .005;
    var neon_price = actual_inc_clicks * cpc;

    var tmp_ad_load = parseFloat($('#ad_load').val());
    var tmp_cpm = parseFloat($('#sliderVal3').val()) + 6;
    var tmp_sellthru = (parseFloat($('#sliderVal5').val()) /20) + .5;

    var est_new_rev = actual_inc_clicks * (tmp_cpm / 1000) * tmp_sellthru * tmp_ad_load;
    console.log('streams: ' + streams + ', inc_clicks: ' + actual_inc_clicks + ', tmp_cpm: ' + tmp_cpm + ', tmp_sellthru' + tmp_sellthru + ', est_new_rev: ' + est_new_rev);


    var totalPrice = 100000;

    //$("#total").val(parseInt(actual_inc_clicks));
    $("#total").val(numberWithCommas(parseInt(actual_inc_clicks)));

    $("#total12").val(numberWithCommas(Math.round(est_new_rev).toFixed(2)));
    $("#total52").val(numberWithCommas(Math.round(neon_price).toFixed(2)));
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
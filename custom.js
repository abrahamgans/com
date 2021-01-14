"use strict";

// Global 
$(function() {
    $(window).on("load", function() {
        $('.preloader').fadeOut(1000);
    });

});

// Form Advanced
$(".pwstrength").pwstrength();

$('.daterange-cus').daterangepicker({
    locale: {
        format: 'YYYY-MM-DD'
    },
    drops: 'down',
    opens: 'right'
});

$('.daterange-btn').daterangepicker({
    ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment()

}, function(start, end) {
    $('.daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
});

// Another Function
function setDisable() {
    $("input").attr("disabled", true);
    $("select").attr("disabled", true);
    $("textarea").attr("disabled", true);
    $("button").attr("disabled", true);
}

function setEnable() {
    $("input").removeAttr("disabled");
    $("select").removeAttr("disabled");
    $("textarea").removeAttr("disabled");
    $("button").removeAttr("disabled");
}

$('.copy').click(function() {
    if (confirm("Copy to clipboard?")) {
        $(this).focus();
        $(this).select();
        document.execCommand('copy');
        iziToast.success({
            message: 'Success Copied!',
            position: 'topRight'
        });
    }
});

function buka(nama) {
    $("#page").html('<div class="section-header shadow-sm mb-3"><h1>Please Wait...</h1><div class="section-header-breadcrumb"><div class="breadcrumb-item active"><a href="">Return to the Dashboard</a></div></div></div><div class="card card-primary"><div class="progress" data-height="25" style="height: 25px;"><div class="progress-bar bg-secondary progress-bar-striped progress-bar-animated text-muted" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"><i><strong>Loading Content...</strong></i></div></div></div>').hide().fadeIn(300);
    $.ajax({
        url: nama + '.php',
        type: 'GET',
        dataType: 'html',
        success: function(isi) {
            $("#page").html(isi).hide().fadeIn(300);
        },
    });
}

function openpostmodal(nama) {
    $("#openpostmodal").html('<div class="card card-primary"><div class="progress" data-height="25" style="height: 25px;"><div class="progress-bar bg-secondary progress-bar-striped progress-bar-animated text-muted" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"><i><strong>Please Wait...</strong></i></div></div></div>').hide().fadeIn(300);
    $.ajax({
        url: nama + '.php',
        type: 'GET',
        dataType: 'html',
        success: function(isi) {
            $("#openpostmodal").html(isi).hide().fadeIn(300);
        },
    });
}

function post() {
    $('#result');
    $("input").attr("disabled", "disabled");
    $("select").attr("disabled", "disabled");
    $("button").attr("disabled", "disabled");
    $("textarea").attr("disabled", "disabled");
}

function hasil() {
    $("input").removeAttr("disabled");
    $("select").removeAttr("disabled");
    $("button").removeAttr("disabled");
    $("textarea").removeAttr("disabled");
}

function notif() {
    $("input").removeAttr("disabled");
    $("select").removeAttr("disabled");
    $("button").removeAttr("disabled");
    $("textarea").removeAttr("disabled");
}

function clearField(input, val) {
    if (input.value == val)
        input.value = "";
}

//Click event handler for nav-items
$('.nav-item').on('click', function() {

    //Remove any previous active classes
    $('.nav-item').removeClass('active');

    //Add active class to the clicked item
    $(this).addClass('active');
});
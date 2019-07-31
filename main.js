var dbid = "bpms8kyme";
var apptoken = "cqbpa4vuwfxamrpe55emvvb4c";
var $MyDialog = $("<div id=qbu_TemplateDialog></div>");

$(function () {
var recordPage = document.location.search;

$.ajaxSetup({data: {apptoken: apptoken}});

var remHtml = $.get(dbid + "?a=dbpage&pagename=remRate_uiDialog.html");

$.when(remHtml).then(function(html){
    
    var markup = Mustache.render(html);
    
    $MyDialog.html(markup).dialog({
    modal: true,
    title: "REM Rate Template",
    height: 700,
    width: 1120,
    resizable: false,
    buttons: {
        "Close": {
            text: "Close",
            click: function() {
                $(".closeDialog").removeClass("ui-state-focus");
                $(this).dialog("destroy").remove();
                //updateReport();
                    saveRecord();
            }
        }    
    },
    open: function(event, ui) {
        $(this).css("overflow", "auto");
        $(".ui-dialog-titlebar").css("background-color", "#4185c9");
        $('.ui-dialog-buttonpane').find('button:contains("Close")').removeClass();
        $('.ui-dialog-buttonpane').find('button:contains("Close")').addClass("closeDialog");
    
    },
    close: function(event, ui) {
        $(this).dialog("destroy").remove();
        //updateReport();
            saveRecord();
    }
}).dialog("open");
    
});

});

//----Insert function -----//

/*function updateReport() {
var url = document.location;

    $.ajax({
        url: url,
        success: function (data) {
           var updatedReport = $(data).find("#VR_bpms8ttxa_8");
           console.log(updatedReport);
           $("#VR_bpms8ttxa_8").replaceWith(updatedReport);
        }
    }); 
}*/

function saveRecord(){
    $("#saveButton").html("Save & keep working");
    $("#saveButton").click();
}



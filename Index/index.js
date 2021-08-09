let students = [];
$(".details").hide();
$.getJSON("../JSON/students.json", function (data)
{
    $.each(data, function (key, value) {
        for (let i = 0, len = value.length; i < len; i++) {
            students.push(value[i]);
            $(".listOfStudents").append("<tr>" +
                "<td>"+value[i].Name+"</td>"+
                "<td>"+value[i].Surname+"</td>"+
                "<td>"+value[i].Department+"</td>"+
                "<td>"+value[i].StudentNumber+"</td>"+
                "<td><button type=\"button\" class=\"btn color-shape py-2 show-detail\" onclick='showDetail("+ i +")'>Details</button>\n </td>"+
                "</tr>"

            );
        }
    });
});
function showDetail(id)
{

    $(".master").hide();
    $(".details").show();

    //Add header
    $(".detail-header").append("<h1>"+students[id].Name+" " + students[id].Surname+"'s transcript"+"</h1>")

    //Get transcript
    console.log("../JSON/"+students[id].StudentNumber +".json");
    $.getJSON("../JSON/"+students[id].StudentNumber +".json", function (data)
    {
        $.each(data, function (key, value) {
            for (let i = 0, len = value.length; i < len; i++) {
                $(".listOfClasses").append("<tr>"+
                    "<td>"+value[i].LessonName+"</td>"+
                    "<td>"+value[i].FirstExam+"</td>"+
                    "<td>\n"+value[i].FinalExam+"</td>"+
                    "<td>\n"+value[i].Avarage+"</td>"+
                    "<td>\n"+value[i].CharValue+"</td>"
            +"</tr>");
            }
        });
    });
}
$(".show-master").onclick(function() {
    alert( "Handler for .click() called." )
});
function showMaster()
{
    $(".detail-header").empty();
    $(".listOfClasses").empty();
    $(".master").show();
    $(".details").hide();
}

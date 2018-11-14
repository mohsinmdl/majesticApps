$(document).ready(function () {



//  video form
    var productForm = $(".form-product-ajax")

    productForm.submit(function (event) {
        event.preventDefault()
        var thisForm = $(this)
        var input = thisForm.find("[name='video']")

        if (input.val().indexOf("<iframe") >= 0) {
            // alert("video")
            //if any image before loaded
            $("#preOnclick").hide()
            $(".submit-picture").hide()


            $(".submit-span").html("")
            $(".submit-span").html(input.val())
            $("iframe").attr('width', '540px')
            $("iframe").attr('height', '350px')
            $("#preOnclick").show()
            $("#btn_reset").show()

            // $(".predictbtn").show()
            $(".input").attr("value", "");

        }
        else {

            // alert("here")

            //if any video before loaded
            $("#preOnclick").hide()
            $(".submit-span").html("")

            // alert("picture")
            $(".submit-picture").attr("src", input.val());
            $(".submit-picture").show()
            $("#preOnclick").show()
            $(".input").attr("value", "");


        }


    })

    $("#btn_reset").click(function () {

        $("#preOnclick").hide()
        $(".submit-span").html("")
        $(".submit-picture").hide()

    });


// Chat app javaScript


// ajax return input to views
    var inputForm = $(".form-value-ajax")
//
    inputForm.submit(function (event) {
        event.preventDefault()
        var thisForm = $(this)
        var action = thisForm.attr("action")
        var method = thisForm.attr("method")
        var formData = thisForm.serialize()

        $.ajax({
            url: action,
            method: method,
            data: formData,
            success: function (data) {
                // console.log(data)
                // alert("succ")
                if (data.toxic == 0) {
                    // alert("Not toxic")

                    if (data.user1_Value) { //user1
                        message = $(".messageUser1").val()

                        if (message != "") {
                            // alert(message)

                            // $(".message-box").append("{% include 'chat/user2.html' with messageInput=\""+message+"\" %}")
                            $(".message-box-1").append("<div class=\"user2 center-block\">\n" +
                                "    <div class=\"row\">\n" +
                                "        <div class=\"col-xs-8 col-md-6\">\n" +
                                "            <img src=\"https://previews.123rf.com/images/alexutemov/alexutemov1605/alexutemov160500112/56446045-portrait-young-quiet-woman-vector-illustration-cute-quiet-woman-and-flat-avatar-quiet-woman-face-adu.jpg\"\n" +
                                "                 class=\"message-photo\">\n" +
                                "            <h4 class=\"message-name\">Alex</h4>\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "    <div class=\"row message-text \">\n" +
                                "        " + message + "\n" +
                                "    </div>\n" +
                                "</div>")

                            setTimeout(
                                function () {
                                    $(".message-box-2").append("<div class=\"user2 center-block\">\n" +
                                        "    <div class=\"row\">\n" +
                                        "        <div class=\"col-xs-8 col-md-6\">\n" +
                                        "            <img src=\"https://previews.123rf.com/images/alexutemov/alexutemov1605/alexutemov160500112/56446045-portrait-young-quiet-woman-vector-illustration-cute-quiet-woman-and-flat-avatar-quiet-woman-face-adu.jpg\"\n" +
                                        "                 class=\"message-photo\">\n" +
                                        "            <h4 class=\"message-name\">Alex</h4>\n" +
                                        "        </div>\n" +
                                        "    </div>\n" +
                                        "    <div class=\"row message-text \">\n" +
                                        "        " + message + "\n" +
                                        "    </div>\n" +
                                        "</div>")
                                }, 300);

                            $(".messageUser1").val("")
                            $(".messageUser1").focus()
                        }
                    }
                    else {
                        // user2
                        message = $(".messageUser2").val()

                        if (message != "") {

                            // alert(message)

                            // $(".message-box").append("{% include 'chat/user2.html' with messageInput=\""+message+"\" %}")
                            $(".message-box-2").append("<div class=\"user1 center-block\">\n" +
                                "    <div class=\"row\">\n" +
                                "        <div class=\"col-xs-8 col-md-6\">\n" +
                                "            <img src=\"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50\"\"\n" +
                                "                 class=\"message-photo\">\n" +
                                "            <h4 class=\"message-name\">\n" +
                                "                Bob\n" +
                                "            </h4>\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "    <div class=\"row message-text\">\n" +
                                "        " + message + "\n" +
                                "    </div>\n" +
                                "</div>")

                            setTimeout(
                                function () {
                                    //do something special


                                    $(".message-box-1").append("<div class=\"user1 center-block\">\n" +
                                        "    <div class=\"row\">\n" +
                                        "        <div class=\"col-xs-8 col-md-6\">\n" +
                                        "            <img src=\"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50\"\"\n" +
                                        "                 class=\"message-photo\">\n" +
                                        "            <h4 class=\"message-name\">\n" +
                                        "                Bob\n" +
                                        "            </h4>\n" +
                                        "        </div>\n" +
                                        "    </div>\n" +
                                        "    <div class=\"row message-text\">\n" +
                                        "        " + message + "\n" +
                                        "    </div>\n" +
                                        "</div>")

                                     }, 300);

                                    $(".messageUser2").val("")
                                    $(".messageUser2").focus()

                                }


                        }


                    }
                else
                    {
                        alert("Hey you entered toxic Comment")

                        $(".messageUser1").val("")
                        $(".messageUser2").val("")
                    }

                }
            ,
                error: function (errorData) {
                    alert("Error")
                }

            })

    })


    $(".btn_reset").click(function () {

        $(".message-box-1").html("")
        $(".message-box-2").html("")

    })


})
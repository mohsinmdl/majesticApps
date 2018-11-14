from django.shortcuts import render
from django.http import JsonResponse
from static_majestic.Toxic_VS_Non_Toxic_Classification_Logistic_Regression_Word_Unigram import process_comment


def chat_home(request):
    return render(request, "chat/chat.html", {})


def predict_input(request):
    # Getting input from from via ajax

    user1_input = request.POST.get("user1")
    user2_input = request.POST.get("user2")


    if(user1_input):
        # if user 1 input field is not none

        user1_Value = 1
        toxic =  int(process_comment(user1_input))
    else:
        # request is from input field of user 2

        user1_Value = 0
        toxic = int(process_comment(user2_input))


    # return data to the ajax via JSON

    if request.is_ajax():
        json_data = {

            "toxic" : toxic,
            "user1_Value" : user1_Value,

        }
        return JsonResponse(json_data, status=200)

    return render(request, "chat/chat.html",{})

from django.shortcuts import render

# Create your views here.
def home_page(request):
    return render(request, "search/home_page.html", {})

def home_page2(request):
    return render(request, "search/home2.html", {})
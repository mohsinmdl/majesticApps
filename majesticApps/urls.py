"""majesticApps URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from search.views import  home_page, home_page2
from chat.views import chat_home
from chat.views import predict_input

urlpatterns = [
    path('admin/', admin.site.urls),
    path('simple/', home_page2),
    path('chat/', chat_home, name='chat'),
    path('predict/', predict_input, name='predict'),
    path('', home_page)

]

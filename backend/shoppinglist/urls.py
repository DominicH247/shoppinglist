from django.urls import path 

from .views import ListItem

urlpatterns = [ 
	path('', ListItem.as_view()),

]
from rest_framework import generics 

from django.shortcuts import render
from .models import Item

from .serializers import ItemSerializer

class ListItem(generics.ListCreateAPIView):
	queryset = Item.objects.all()
	serializer_class = ItemSerializer
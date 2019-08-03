from rest_framework import serializers
from .models import Item

class ItemSerializer(serializers.ModelSerializer):
	
	#  return username instead of user ID
	added_by = serializers.CharField(source='added_by.username', read_only = True)

	class Meta: 
		model = Item
		fields = ('id', 'item_name', 'added_by', 'date',)
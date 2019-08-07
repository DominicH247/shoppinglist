from rest_framework import serializers
from .models import Item

class ItemSerializer(serializers.ModelSerializer):
	
	# #  return username instead of user ID
	# added_by = serializers.CharField(source='added_by.username', read_only = False)

	class Meta: 
		model = Item
		#  fields = ('id','added_by', 'item_name', 'date',)
		fields = ('id', 'item_name', 'date',)
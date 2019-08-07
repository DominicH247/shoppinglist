from django.db import models
from django.conf import settings


class Item(models.Model):
	date = models.DateField(auto_now_add=True)
	# added_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
	item_name = models.CharField(max_length =100)

	def save(self, *args, **kwargs):
		"""convert item name to lower case"""
		self.item_name = self.item_name.lower()
		return super(Item, self).save(*args, **kwargs)


	def __str__(self):
		"""string representation of model"""
		return self.item_name


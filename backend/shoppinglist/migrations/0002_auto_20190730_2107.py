# Generated by Django 2.2 on 2019-07-30 21:07

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('shoppinglist', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Shopping',
            new_name='Item',
        ),
    ]

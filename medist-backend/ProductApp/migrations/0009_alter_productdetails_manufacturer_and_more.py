# Generated by Django 4.1.2 on 2023-01-03 19:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ProductApp', '0008_alter_productdetails_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productdetails',
            name='manufacturer',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='productdetails',
            name='pname',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='productdetails',
            name='speciality',
            field=models.CharField(max_length=50, null=True),
        ),
    ]

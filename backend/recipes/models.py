from django.db import models

class Category(models.Model):
    name = models.CharField('Название категории', max_length=100)

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.name

class Recipe(models.Model):
    title = models.CharField('Название рецепта', max_length=200)
    description = models.TextField('Описание')
    category = models.ForeignKey(Category, verbose_name='Категория', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Рецепт'
        verbose_name_plural = 'Рецепты'

    def __str__(self):
        return self.title

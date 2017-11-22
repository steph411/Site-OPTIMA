from django.contrib  import admin
from products.models import Categorie
from products.models import SousCategorie
from products.models import Catalogue
from products.models import Produit
from products.models import Caracteristique
from products.models import Promotion
from products.models import ImagesProduit
from products.models import Guide
from products.models import Magasin
from products.models import Offre
# Register your models here.


class CategorieAdmin(admin.ModelAdmin):
    ordering = ['nom']

class SousCategorieAdmin(admin.ModelAdmin):
    ordering   =  ['nom']

class CatalogueAdmin(admin.ModelAdmin):
    search_fields = ('nom', 'souscategorie__nom')
    #list_display  = ['nom']
    ordering      = ['nom']

class CaracteristiqueAdmin(admin.ModelAdmin):
    pass

class ProduitAdmin(admin.ModelAdmin):
    ordering = ['nom']

class ImagesProduitAdmin(admin.ModelAdmin):
    pass

class GuideAdmin(admin.ModelAdmin):
    pass

class MagasinAdmin(admin.ModelAdmin):
    pass

class OffreAdmin(admin.ModelAdmin):
    pass


admin.site.site_header = 'Optima Administration'
admin.site.register(Categorie, CategorieAdmin)
admin.site.register(SousCategorie, SousCategorieAdmin)
admin.site.register(Catalogue, CatalogueAdmin)
admin.site.register(Produit, ProduitAdmin)
admin.site.register(ImagesProduit, ImagesProduitAdmin)
admin.site.register(Guide, GuideAdmin)
admin.site.register(Magasin, MagasinAdmin)
admin.site.register(Offre, OffreAdmin)
admin.site.register(Caracteristique, CaracteristiqueAdmin)
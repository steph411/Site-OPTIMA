import graphene
from .models import (Categorie, SousCategorie, Catalogue,
                    Produit, Promotion, Caracteristique, 
                    ImagesProduit,Guide, Magasin,Offre)

from graphene_django.types import DjangoObjectType

#definitin des types graphene

class CategorieType(DjangoObjectType):
    class Meta:
        model = Categorie

class SousCategorieType(DjangoObjectType):
    class Meta:
        model = SousCategorie

class CatalogueType(DjangoObjectType):
    class Meta:
        model = Catalogue

class ProduitType(DjangoObjectType):
    class Meta:
        model = Produit

class PromotionType(DjangoObjectType):
    class Meta:
        model = Promotion

class CaracteristiqueType(DjangoObjectType):
    class Meta:
        model = Caracteristique

class ImagesProduitType(DjangoObjectType):
    class Meta:
        model = ImagesProduit

class GuideType(DjangoObjectType):
    class Meta:
        model = Guide

class MagasinType(DjangoObjectType):
    class Meta:
        model = Magasin

class OffreType(DjangoObjectType):
    class Meta:
        model = Offre


class Query(graphene.ObjectType):
    
    """ root query type"""

    #fields et resolvers pour les categories

    all_categories = graphene.List(CategorieType)

    def resolve_all_categories(self, info, **kwargs):
        return Categorie.objects.all()

    categorie      = graphene.Field(CategorieType)

    def resolve_categorie(self, info, **kwargs):
        id   = kwargs.get('id')
        nom = kwargs.get('nom')
        if id is not None:
            return Categorie.objects.get(pk=id)
        if nom is not None:
            return Categorie.objects.get(nom=nom)
    
    #fieds et resolver pour les souscategories

    all_sous_categories = graphene.List(SousCategorieType)

    def resolve_all_sous_categories(self, info, **kwargs):
        return SousCategorie.objects.all()

    Souscategorie      = graphene.Field(SousCategorieType)
    
    def resolve_sous_categorie(self, info, **kwargs):
        id   = kwargs.get('id')
        nom = kwargs.get('nom')
        if id is not None:
            return SousCategorie.objects.get(pk=id)
        if nom is not None:
            return SousCategorie.objects.get(nom=nom)

    #fields et resolver pour les catalogues

    all_catalogues = graphene.List(CatalogueType)

    def resolve_all_catalogues(self, info, **kwargs):
        return Catalogue.objects.all()

    catalogue      = graphene.Field(CatalogueType)

    def resolve_catalogue(self, info, **kwargs):
        id   = kwargs.get('id')
        nom = kwargs.get('nom')
        if id is not None:
            return Catalogue.objects.get(pk=id)
        if nom is not None:
            return Catalogue.objects.get(nom=nom)
    
    #fields et resolver pour les produits

    all_produits = graphene.List(ProduitType)

    def resolve_all_produits(self, info, **kwargs):
        return Produit.objects.all()

    produit      = graphene.Field(ProduitType)

    def resolve_produit(self, info, **kwargs):
        id   = kwargs.get('id')
        nom = kwargs.get('nom')
        if id is not None:
            return Produit.objects.get(pk=id)
        if nom is not None:
            return Produit.objects.get(nom=nom)

    #fields et resolvers pour les promotions

    all_promotions = graphene.List(PromotionType)

    def resolve_all_promotions(self, info, **kwargs):
        return Promotion.objects.all()

    promotion      = graphene.Field(PromotionType)

    def resolve_promotion(self, info, **kwargs):
        id   = kwargs.get('id')
        nom = kwargs.get('nom')
        if id is not None:
            return Promotion.objects.get(pk=id)
        if nom is not None:
            return Promotion.objects.get(nom=nom)
    
    #fields et resolver pour  les caracteristiques


    caracteristique = graphene.Field(CaracteristiqueType)

    def resolve_caracteristique(self, info, **kwargs):
        id   = kwargs.get('id')
        if id is not None:
            return Caracteristique.objects.get(pk=id)

    #fields et resolvers pour les images de produits

    imagesproduit = graphene.Field(ImagesProduitType)

    def resolve_imagesproduit(self, info, **kwargs):
        id   = kwargs.get('id')
        if id is not None:
            return ImagesProduit.objects.get(pk=id)

    #fields et resolvers pour les guides d'achat

    all_guides = graphene.List(GuideType)

    def resolve_all_guides(self, info, **kwargs):
        return Guide.objects.all()

    guide      = graphene.Field(GuideType)

    def resolve_guide(self, info, **kwargs):
        id   = kwargs.get('id')
        titre = kwargs.get('titre')
        if id is not None:
            return Guide.objects.get(pk=id)
        if titre is not None:
            return Guide.objects.get(titre=titre)
    

    #fields et resolver pour les magasins

    all_magasins = graphene.List(MagasinType)

    def resolve_all_magasins(self, info, **kwargs):
        return Magasin.objects.all()

    magasin   = graphene.Field(MagasinType)

    def resolve_magasin(self, info, **kwargs):
        id   = kwargs.get('id')
        nom = kwargs.get('nom')
        if id is not None:
            return magasin.objects.get(pk=id)
        if nom is not None:
            return magasin.objects.get(nom=nom)

    #fields et resolver pour les offres

    offre = graphene.Field(OffreType)

    def resolve_offre(self, info, **kwargs):
        id   = kwargs.get('id')
        if id is not None:
            return Offre.objects.get(pk=id)
        
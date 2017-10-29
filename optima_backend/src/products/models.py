from django.db import models

# Create your models here.

class Categorie(models.Model):

    """Model definition for Categorie."""

    # TODO: Define fields here
    nom = models.CharField(max_length=60)
    image = models.ImageField(blank=True, null=True)


    class Meta: 

        """Meta definition for Categorie."""
        db_table = 'Categorie'
        verbose_name = 'Categorie'  
        verbose_name_plural = 'Categorie'

    def __str__(self):  
            """Unicode representation of Categorie."""
            return self.nom  


class SousCategorie(models.Model):
    nom = models.CharField(max_length=60)
    image = models.ImageField(blank=True, null=True)
    categorie = models.ForeignKey(Categorie, on_delete=models.CASCADE)

    class Meta:
        db_table = 'SousCategorie'

    def __str__(self):
        return self.nom



class Catalogue(models.Model):

    """ definition du modele type de produit """

    nom  = models.CharField(max_length=60)
    image = models.ImageField(blank=True, null=True)
    souscategorie = models.ForeignKey(SousCategorie, on_delete=models.CASCADE)

    class Meta:
        db_table = 'Catalogue'

    def __str__(self):
        return self.nom



class Produit(models.Model):
    
    """  definition du modele de produit """

    nom = models.CharField(max_length=200)
    catalogue = models.ForeignKey(Catalogue, on_delete=models.CASCADE)

    class Meta:
        db_table = 'Produit'
    
    def __str__(self):
        return self.nom

class Promotion(models.Model):
    
    """ definition du modele promotion """

    description = models.TextField(blank=True, null=True)
    image = models.ImageField()
    pourcentage = models.SmallIntegerField()
    date_validite = models.DateField(auto_now=False, auto_now_add=False)
    produit = models.ForeignKey(Produit, on_delete=models.CASCADE)

    class Meta:
        db_table = 'Promotion'


    def __str__(self):
        return self.description

class Caracteristique(models.Model):

    """modele decrivant les caractéristiques des produits"""

    taille = models.SmallIntegerField(blank=True, null=True)
    marque = models.CharField(max_length=60)
    ram = models.SmallIntegerField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    produit = models.OneToOneField(Produit, on_delete=models.CASCADE)

    class Meta:
        db_table = "Caracteristique"

    def __str__(self):
        return "caracteristique" 

    


class ImagesProduit(models.Model):
    
    """ definition du modele pour les images des produits """

    image1 = models.ImageField()
    image2 = models.ImageField(blank=True, null=True)
    image3 = models.ImageField(blank=True, null=True)
    image4 = models.ImageField(blank=True, null=True)
    produit = models.OneToOneField(Produit, on_delete=models.CASCADE)

    class Meta:
        db_table = 'ImagesProduit'
       
    def __str__(self):
        return self.produit.nom

class Guide(models.Model):

    """ definition du modele pour les guides d'achat par rapport a un catalogue"""
    titre = models.CharField(max_length=254, blank=True, null=True)
    description = models.TextField()
    catalogue = models.ForeignKey(Catalogue, on_delete=models.CASCADE)

    class Meta:
        db_table = 'Guide'
        verbose_name = 'Guide'
        verbose_name_plural = 'Guide'

    def __str__(self):
        return self.description


class Magasin(models.Model):
    
    """modele representant le magasin """

    nom = models.CharField(max_length=60)
    ville = models.CharField(max_length=60)
    quartier = models.CharField(max_length=60)
    numero_telephone = models.SmallIntegerField()
    email = models.EmailField(max_length=254)
    url_site = models.URLField(max_length=200, blank=True, null=True)
    logo = models.ImageField(blank=True, null=True)
    produits = models.ManyToManyField(Produit, through='Offre')

    class Meta:
        db_table = 'Magasin'
        verbose_name = 'Magasin'
        verbose_name_plural = 'Magasin'

    def __str__(self):
        return self.nom

 


class Offre(models.Model):
    """ modele intemediaire entre les produits et les magasins """

    produit = models.ForeignKey(Produit, on_delete=models.CASCADE)
    magasin = models.ForeignKey(Magasin, on_delete=models.CASCADE)
    notation = models.FloatField()
    description = models.TextField(blank=True, null=True)
    prix = models.FloatField()
    url_produit = models.URLField(max_length=200, blank=True, null=True)

    class Meta:
        db_table = 'Offre'
        verbose_name = 'Offre'
        verbose_name_plural = 'Offre'

    def __str__(self):
        return self.description

   


    

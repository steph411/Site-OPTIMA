from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager
)
#on importe le modele de base de django
# Create your models here.

class UserManager(BaseUserManager):                                                               #creation du manager personnalisé
    def create_user(self, email, password=None, is_active=True, is_staff=False, is_admin=False):                  #on prend en paramètre tous les champs
        if not email:                                                                             #contenus dans REQUIRED_FIELDS
            raise ValueError("les utilisateurs doivent avoir une adresse email")
        if not password:
            raise ValueError("les utilisateurs doivent avoir un mot de passe")
        user_object = self.model(
            email = self.normalize_email(email)
        )
        user_object.staff  = is_staff
        user_object.active = is_active
        user_object.admin  = is_admin
        user_object.set_password(password)                                                           #on defini e mot de passe(le changement de celui
        user_object.save(using=self._db)                                                             #se fait de la meme facon)
        return user_object                                                                           #on retourne une instance d'utilisateur

    def create_staffuser(self, email, password=None):
        user = self.create_user(
            email,
            password = password,
            is_staff = True
        )
        return user
    
    def create_superuser(self, email, password=None):
        user = self.create_user(
            email,
            password = password,
            is_staff = True,
            is_admin = True
        )
        return user




class User(AbstractBaseUser):                                                #notre modele herite de celui ci pour pouvoir l'adapter
    """ modele decrivant les comptes d'utilisateur """

    email        = models.EmailField(max_length=255, unique=True)           #une seule adresse email par utilisateur
    active       = models.BooleanField(default=True)                        #statut du compte
    staff        = models.BooleanField(default=False)                       #statut du comtpe(si l'utilisateur est du staff)
    admin        = models.BooleanField(default=False)                       #statut du compte(si l'utilisateur est admin)
    created_date = models.DateTimeField(auto_now_add=True)                  #date de creation du compte

    USERNAME_FIELD   = 'email'                                              #on surclasse le champ par defaut de django 

    REQUIRED_FIELDS  =[]

    objects = UserManager()                                                 #surclasse du manager par defaut 

    def __str__(self):
        return self.email

    def get_name(self):
        return self.email

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True
    

    @property
    def is_staff(self):
        return self.staff
    
    @property
    def is_active(self):
        return self.active

    @property
    def is_admin(self):
        return self.admin



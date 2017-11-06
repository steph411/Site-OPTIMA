import graphene
from .models import User
from graphene_django.types import DjangoObjectType

class UserType(DjangoObjectType):
    class Meta:
        model = User

class CreateUser(graphene.Mutation):
    """ classe mutation pour la creation de nouveaux utilisateurs """
    
    user = graphene.Field(UserType)

    class Input:
        username = graphene.String(required = True)
        email    = graphene.String(required = True)
        password = graphene.String(required = True)

    @staticmethod
    def mutate(self, context, **kwargs):
        email    = kwargs.get('email')
        password = kwargs.get('password')
        username = kwargs.get('username')
        
        created_user = User.objects.create_user(username   = username,
                                                email      = email,
                                                password   = password)

        return CreateUser(user = created_user)


class Query(graphene.ObjectType):
    allUsers = graphene.List(UserType)
    user     = graphene.Field(UserType, id=graphene.Int(), username=graphene.String())

    def resolve_allUsers(self, info, **kwargs):
        return User.objects.all()

    def resolve_user(self, info, **kwargs):
        id   = kwargs.get('id')
        username = kwargs.get('username')
        if id is not None:
            return User.objects.get(pk=id)
        if username is not None:
            return User.objects.get(username=username)

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()


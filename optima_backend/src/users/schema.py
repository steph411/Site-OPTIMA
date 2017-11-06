import graphene
from .models import User
from graphene_django.types import DjangoObjectType

class UserType(DjangoObjectType):
    class Meta:
        model = User

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


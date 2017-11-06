import graphene
import users.schema
import products.schema

class Query(users.schema.Query, products.schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)
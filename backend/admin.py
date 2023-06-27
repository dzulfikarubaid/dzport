from django.contrib import admin
from backend.models import DetailsModel, AIcamModel, AIchatModel, MessageModel

class DetailsAdmin(admin.ModelAdmin):
    pass


admin.site.register(DetailsModel,DetailsAdmin)
admin.site.register(AIcamModel)
admin.site.register(AIchatModel)
admin.site.register(MessageModel)
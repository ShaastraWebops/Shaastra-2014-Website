#!/usr/bin/python
# -*- coding: utf-8 -*-
from django import forms
from events.models import Event
from django.contrib.auth.models import User
from users.models import UserProfile
#from chosen import forms as chosenforms
from events.models import *
#from chosen import widgets as chosenwidgets


class AddEventForm(forms.ModelForm):

 #   tags = chosenforms.ChosenModelMultipleChoiceField(required=False,
 #           queryset=Tag.objects.all())

    class Meta:

        model = Event

        # fields = ('title','events_logo','tags')

        fields = (
            'title',
            'events_logo',
            'tags',
            'category',
            'lock_status',
            'unlock_reason',
            'registrable_online',
            'team_event',
            'team_size_min',
            'team_size_max',
            'begin_registration',
            'has_tdp',
            )
        widgets = {'lock_status': forms.HiddenInput(),
                   'unlock_reason': forms.HiddenInput(),
      #             'category': chosenwidgets.ChosenSelect()}
      }



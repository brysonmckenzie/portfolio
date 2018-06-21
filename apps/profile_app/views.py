# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse

from models import Message

def index(request):
    
    Proficiencies = "Proficiencies - Python-Django | Ruby on Rails | Javascript | Django | MEAN "

    context = {
        "message": Proficiencies
    }

    
    
    return render(request, 'profile_app/index.html', context)

def home(request):
    
    return render(request, 'profile_app/home.html')

def contact(request):
    
    server_name = request.POST['html_name']
    server_email = request.POST['html_email']
    server_phone = request.POST['html_phone']
    server_message = request.POST['html_message']

    if request.method == 'POST':
        
        Message.objects.create(
            name = server_name,
            email = server_email,
            phone = server_phone,
            message = server_message
        )

        print '***** New Contact Info has Arrived *****'

        return redirect('/')


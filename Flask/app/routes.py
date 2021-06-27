from app import app
from flask import jsonify

@app.route('/')
@app.route('/data')

def display():
    output=[
        {
        'id':1,
        'username':"Akash",
        'password':"akash123"
        },
        {  
        'id':2,
         'username':"Vignesh",
         'password':"vignesh123"
         },
         {
         'id':3,
         'username':"Santhosh",
         'password':"santhosh123"
         },
         {
         'id':4,
         'username':"Jaya",
         'password':"jaya123"
         }
    ]

    return jsonify(output)
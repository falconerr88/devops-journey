from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return( 
        '<h1> App con Flask para aprender docker </h1>'
        '<h2> Desarrollado por: Thiago Lovey 7/9/25 </h2> <p1> Container 3 funcionando </p1>'
    )
    
if __name__ == '__main__':
    app.run( port=5000)
from flask import Flask,request,render_template
import numpy as np
import pandas as pd
import pickle
import os

app = Flask(__name__,static_url_path='/flask/static')

# Get the directory where this script is located
current_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(current_dir, 'model.pkl')

# Load the model with the correct path
try:
    model = pickle.load(open(model_path,'rb'))
    print(f"Model loaded successfully from: {model_path}")
except FileNotFoundError:
    print(f"Error: Model file not found at {model_path}")
    print("Please ensure model.pkl exists in the Flask directory")
    exit(1)
except Exception as e:
    print(f"Error loading model: {e}")
    exit(1)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    
    Gender = float(request.form["Gender"])
    Hemoglobin = float(request.form["Hemoglobin"])
    MCH = float(request.form["MCH"])
    MCHC = float(request.form["MCHC"])
    HCV = float(request.form["MCV"])

    feature_values = np.array([[Gender,Hemoglobin,MCH,MCHC,HCV]])
    df = pd.DataFrame(feature_values,columns=['Gender','Hemoglobin','MCH','MCHC','MCV'])
    print(df)

    prediction = model.predict(df)
    print(prediction[0])
    result = prediction[0]

    if prediction[0] == 1:
        result = "You have Anemic disease"
    elif prediction[0] == 0:
        result = "You are healthy"

    text = "Hence, based on the calculation:"
    return render_template("predict.html",prediction_text=text + str(result))

if __name__ == "__main__":
    app.run(debug=False,port=5000)
    
    
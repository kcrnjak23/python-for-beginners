from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/basic_concepts")
def basic():
    return render_template("basic_concepts.html")

@app.route("/strings")
def string():
    return render_template("strings.html")

@app.route("/variables")
def variable():
    return render_template("variables.html")

@app.route("/control_flow")
def control():
    return render_template("control_flow.html")

@app.route("/lists")
def lists():
    return render_template("lists.html")

@app.route("/basic_concepts/basic1")
def basic_hello():
    return render_template("basic_concepts/basic1.html")

@app.route("/basic_concepts/basic2")
def basic_operation():
    return render_template("basic_concepts/basic2.html")

@app.route("/basic_concepts/basic3")
def basic_data():
    return render_template("basic_concepts/basic3.html")

@app.route("/strings/string1")
def string_strings():
    return render_template("strings/string1.html")

@app.route("/strings/string2")
def string_operation():
    return render_template("strings/string2.html")

@app.route("/variables/variables1")
def variable_variables():
    return render_template("variables/variables1.html")

@app.route("/variables/variables2")
def variable_working():
    return render_template("variables/variables2.html")

@app.route("/variables/variables3")
def variable_input():
    return render_template("variables/variables3.html")

@app.route("/variables/variables4")
def variable_operators():
    return render_template("variables/variables4.html")

@app.route("/control_flow/control1")
def control_boolean():
    return render_template("control_flow/control1.html")

@app.route("/control_flow/control2")
def control_comparison():
    return render_template("control_flow/control2.html")

@app.route("/control_flow/control3")
def control_logic():
    return render_template("control_flow/control3.html")

@app.route("/control_flow/control4")
def control_if():
    return render_template("control_flow/control4.html")

@app.route("/control_flow/control5")
def control_else():
    return render_template("control_flow/control5.html")

@app.route("/control_flow/control6")
def control_while():
    return render_template("control_flow/control6.html")

@app.route("/lists/list1")
def lists_list():
    return render_template("lists/list1.html")

@app.route("/lists/list2")
def lists_string():
    return render_template("lists/list2.html")

@app.route("/lists/list3")
def lists_operators():
    return render_template("lists/list3.html")

@app.route("/lists/list4")
def lists_loops():
    return render_template("lists/list4.html")

@app.route("/lists/list5")
def lists_range():
    return render_template("lists/list5.html")



if __name__ == "__main__":
    app.run(debug=True)

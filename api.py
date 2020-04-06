import flask
from flask import request, jsonify
import sqlite3

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# This is test data.
apps = [
      {'id': 'gov.cdc.general',
     'title': 'CDC',
     'icon_url': 'https://lh3.googleusercontent.com/wrevbBo3qynf4_yPl0DNgKlzNRSGdy2kUpd_r85n4qNF8M47hDxBNR4adHU2T76LlSkM',
     'developer_id': 'Centers+for+Disease+Control+and+Prevention',
     'updated-date': '2020-03-06',
     'app_store_url': 'https://play.google.com/store/apps/details?id=gov.cdc.general',
     'description': 'NOW AVAILABLE ON YOUR SMARTPHONE OR TABLETnGet the official C',
     'downloads': '100,000+'},

     {'id': 'sg.gov.tech.bluetrace',
     'title': 'Trace Together',
     'icon_url': 'https://lh3.googleusercontent.com/Z7O97OSJtCPe00EpQ5g9258cl4hi4NGRjXlWkQtFKi063eKvDMpILT3WW2KLjFcxdAPs',
     'developer_id': 'sg.gov.tech.bluetrace',
     'updated-date': '2020-04-02',
     'app_store_url': 'https://play.google.com/store/apps/details?id=sg.gov.tech.bluetrace&hl=en_US',
     'description': 'TraceTogether supports Singapore’s efforts to mitigate the spread of COVID-19 through community-driven contact tracing.',
     'downloads': '500,000+'},

     {'id': 'br.gov.datasus.guardioes',
     'title': 'Coronavirus SUS',
     'icon_url': 'https://lh3.googleusercontent.com/wrevbBo3qynf4_yPl0DNgKlzNRSGdy2kUpd_r85n4qNF8M47hDxBNR4adHU2T76LlSkM',
     'developer_id': 'br.gov.datasus.guardioes',
     'updated-date': '2020-04-03',
     'app_store_url': 'https://play.google.com/store/apps/details?id=br.gov.datasus.guardioes&hl=en_US',
     'description': 'O Ministério da Saúde lança o app Coronavírus-SUS com o objetivo de conscientizar a população sobre o Corona Vírus COVID-19, para isso o aplicativo conta com as seguintes funcionalidades:',
     'downloads': '1,000,000+'},

     {'id': '?',
     'title': 'AC19',
     'icon_url': 'https://lh3.googleusercontent.com/wrevbBo3qynf4_yPl0DNgKlzNRSGdy2kUpd_r85n4qNF8M47hDxBNR4adHU2T76LlSkM',
     'developer_id': '?',
     'updated-date': '?',
     'app_store_url': 'https://play.google.com/store/apps/details?id=am.ac19.health&hl=en_US',
     'description': 'This app has been removed from the app store.',
     'downloads': '?'},

     {'id': 'gov.cdc.general',
     'title': 'CDC',
     'icon_url': 'https://lh3.googleusercontent.com/wrevbBo3qynf4_yPl0DNgKlzNRSGdy2kUpd_r85n4qNF8M47hDxBNR4adHU2T76LlSkM',
     'developer_id': 'Centers+for+Disease+Control+and+Prevention',
     'updated-date': '2020-03-06',
     'app_store_url': 'https://play.google.com/store/apps/details?id=gov.cdc.general',
     'description': 'NOW AVAILABLE ON YOUR SMARTPHONE OR TABLETnGet the official C',
     'downloads': '100,000+'},
]

@app.route('/', methods=['GET'])
def home():
        return '''<h1>COVID-19 App Tracker</h1>
<p>A prototype API for tracking COVID-19 apps published on Google Play.</p>'''

@app.errorhandler(404)
def page_not_found(e):
        return "<h1>404</h1><p>The resource could not be found.</p>", 404

@app.route('/api/v1/apps/all', methods=['GET'])
def api_all():
    return jsonify(apps)

if __name__ == "__main__":
    app.run()
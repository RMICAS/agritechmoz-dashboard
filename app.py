from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/data', methods=['GET'])
def get_data():
    # Connect to the SQLite database
    conn = sqlite3.connect('kobocollect_data.db')
    cursor = conn.cursor()

    # Query all records from the 'data' table
    cursor.execute('SELECT * FROM data')
    rows = cursor.fetchall()

    # Convert the query result to a list of dictionaries
    data = []
    for row in rows:
        data.append({
            'id': row[0],
            'area': row[1],
            'seeds_planted': row[2],
            'water_usage': row[3]
        })

    # Close the connection
    conn.close()

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

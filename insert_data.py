import sqlite3

# Data you want to insert (this would be coming from KoboCollect API in a real project)
data_to_insert = [
    (400, 12000, 400),
    (300, 8000, 300),
    (450, 10000, 450)
]

# Connect to the SQLite database
conn = sqlite3.connect('kobocollect_data.db')

# Create a cursor object to interact with the database
cursor = conn.cursor()

# Insert the data into the table
cursor.executemany('''
INSERT INTO data (area, seeds_planted, water_usage)
VALUES (?, ?, ?)
''', data_to_insert)

# Commit the changes (important step!)
conn.commit()

# Close the connection
conn.close()

print("Data inserted into the database successfully!")

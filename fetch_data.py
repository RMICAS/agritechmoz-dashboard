import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('kobocollect_data.db')

# Create a cursor object to interact with the database
cursor = conn.cursor()

# Query all records from the 'data' table
cursor.execute('SELECT * FROM data')

# Fetch all rows of the result
rows = cursor.fetchall()

# Print each row (record)
for row in rows:
    print(f"ID: {row[0]}, Area: {row[1]}, Seeds Planted: {row[2]}, Water Usage: {row[3]}")

# Close the connection
conn.close()

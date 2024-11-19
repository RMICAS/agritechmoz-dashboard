import sqlite3

# Connect to the SQLite database (this will create the database file)
conn = sqlite3.connect('kobocollect_data.db')

# Create a cursor object to interact with the database
cursor = conn.cursor()

# Create a table in the database if it doesn't already exist
cursor.execute('''
CREATE TABLE IF NOT EXISTS data (
    id INTEGER PRIMARY KEY,  -- Automatically assigned unique ID for each record
    area INTEGER,            -- Area of land in square meters
    seeds_planted INTEGER,   -- Number of seeds planted
    water_usage INTEGER      -- Amount of water used in liters
)
''')

# Commit the changes (save them to the database)
conn.commit()

# Close the connection to the database
conn.close()

print("Database and table created successfully!")

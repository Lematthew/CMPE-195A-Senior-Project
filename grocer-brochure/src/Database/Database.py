import sqlite3

conn = sqlite3.connect("GrocerBrochure.db")

#create a cursor
c = conn.cursor()

###Creating a table

c.execute("""CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY AUTOINCREMENT, 
	user_id INTEGER,
	email TEXT,
	hashedPass TEXT,
	salt TEXT,
	full_name TEXT,
	country_code INTEGER
	)
""")

c.execute("""INSERT INTO  users VALUES (3,52179, "Vishnu@Adda.com", "Password", "Salt", "Vishnu Adda",10)""")
c.execute("""INSERT INTO  users VALUES (2,59721, "Alexis@Chan.com", "Password", "Salt", "Alexis Chan",2)""")
c.execute("""INSERT INTO  users VALUES (1,52152, "Matthew@Le.com", "Password", "Salt", "Vishnu Adda",3)""")

c.execute("SELECT * FROM users")
items = c.fetchall()

for item in items:
    print(item)


print("Task Completed")
#Datatypes:
#Null
#Integer (Whole Numbers)
#Real (Decimal)
#Text
#Blob (Images, Mp3)

#Commit the command 
conn.commit()

#Always terminate the connection
conn.close()
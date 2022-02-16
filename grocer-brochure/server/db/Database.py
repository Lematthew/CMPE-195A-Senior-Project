import sqlite3

conn = sqlite3.connect("GrocerBrochure.db")

#create a cursor
c = conn.cursor()

c.execute("""INSERT INTO  users VALUES (3, "Vishnu@Adda.com",  "Vishnu Adda","Password", "Salt")""")
c.execute("""INSERT INTO  users VALUES (2, "Alexis@Chan.com", "Alexis Chan", "Password", "Salt")""")
c.execute("""INSERT INTO  users VALUES (1, "Matthew@Le.com",  "Vishnu Adda", "Password", "Salt")""")

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
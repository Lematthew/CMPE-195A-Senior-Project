import sqlite3

conn = sqlite3.connect("GrocerBrochure.db")

#create a cursor
c = conn.cursor()

c.execute("""INSERT INTO  users VALUES (3, "Vishnu@Adda.com",  "Vishnu Adda","Password", "Salt", "customer")""")
c.execute("""INSERT INTO  users VALUES (2, "Alexis@Chan.com", "Alexis Chan", "Password", "Salt", "customer")""")
c.execute("""INSERT INTO  users VALUES (1, "Matthew@Le.com",  "Matthew Le", "Password", "Salt", "customer")""")

c.execute("""INSERT INTO merchants VALUES(1, "USA", "Safeway", 12)""")
c.execute("""INSERT INTO merchants VALUES(2, "USA", "Costco", 12)""")
c.execute("""INSERT INTO merchants VALUES(3, "Canada", "Walgreens", 12)""")

c.execute("""INSERT INTO products VALUES(1, "Cheese", 1, 2.99, "tastes good") """)
c.execute("""INSERT INTO products VALUES(2, "Coke", 1, 3.99, "tastes ok") """)
c.execute("""INSERT INTO products VALUES(3, "Buns", 1, 4.99, "tastes bad") """)

c.execute("""INSERT INTO products VALUES(4, "Pizza", 2, 2.99, "tastes good") """)
c.execute("""INSERT INTO products VALUES(5, "Water", 2, 3.99, "tastes ok") """)
c.execute("""INSERT INTO products VALUES(6, "Burger", 2, 4.99, "tastes bad") """)

c.execute("""INSERT INTO products VALUES(7, "Yogurt", 3, 2.99, "tastes good") """)
c.execute("""INSERT INTO products VALUES(8, "Pasta", 3, 3.99, "tastes ok") """)
c.execute("""INSERT INTO products VALUES(9, "Candy", 3, 4.99, "tastes bad") """)

c.execute("""INSERT INTO StoreImage VALUES(1, "../../public/Images/safeway-logo.png", 3, 2.99, "tastes good") """)
c.execute("""INSERT INTO StoreImage VALUES(2, "Pasta", 3, 3.99, "tastes ok") """)
c.execute("""INSERT INTO StoreImage VALUES(3, "Candy", 3, 4.99, "tastes bad") """)

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
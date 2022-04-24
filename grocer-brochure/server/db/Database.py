import sqlite3

conn = sqlite3.connect("GrocerBrochure.db")

#create a cursor
c = conn.cursor()

c.execute("""INSERT INTO  users VALUES (3, "Vishnu@Adda.com",  "Vishnu Adda","Password", "address", "city", "zipcode", "mobile", "role", "profilePic")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password) VALUES (2, "Alexis@Chan.com", "Alexis Chan", "Password")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password) VALUES (1, "Matthew@Le.com",  "Matthew Le", "Password")""")

c.execute("""INSERT INTO merchants (id, country, merchant_name, admin_id, image1_path) VALUES(4001, "USA", "Safeway",70766, "../Images/safewayLogo.png")""")
c.execute("""INSERT INTO merchants (id, country, merchant_name, admin_id, image1_path) VALUES(4002, "USA", "Costco", 15521, "../Images/costcoLogo.png")""")
c.execute("""INSERT INTO merchants (id, country, merchant_name, admin_id, image1_path) VALUES(4003, "Canada", "Walgreens", 42142, "../Images/Walgreens-Logo.png")""")

c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (1, "Cheese", 4001, 2.99, "tastes good") """)
c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (2, "Coke", 4001, 3.99, "tastes ok") """)
c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (3, "Buns", 4001, 4.99, "tastes bad") """)

c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (4, "Pizza", 4002, 2.99, "tastes good") """)
c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (5, "Water", 4002, 3.99, "tastes ok") """)
c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (6, "Burger", 4002, 4.99, "tastes bad") """)

c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (7, "Yogurt", 4003, 2.99, "tastes good") """)
c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (8, "Pasta", 4003, 3.99, "tastes ok") """)
c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (9, "Candy", 4003, 4.99, "tastes bad") """)

c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (321, "Fish", 4003, 4.99, "tastes bad") """)
c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (7465, "Rice", 4003, 4.99, "tastes bad") """)
c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (5321, "Tomato", 4003, 4.99, "tastes bad") """)

# c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES(34215, "Human Flesh", 4003, 4.99, "tastes bad") """)

c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (431, "Dog", 4002, 4.99, "tastes good (boy)") """)
c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (67352, "Cats", 4002, 4.99, "tastes Catty") """)
c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (5323, "Motivation to work on senior project", 4002, 4.99, "Almost all gone") """)
c.execute("""INSERT INTO products (id, name, merchant_id, price, description) VALUES (4251, "Sandwhich", 4002, 4.75, "Subway bad") """)

print('done')

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
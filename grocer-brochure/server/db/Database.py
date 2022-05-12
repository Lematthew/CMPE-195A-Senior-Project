import sqlite3

conn = sqlite3.connect("GrocerBrochure.db")

#create a cursor
c = conn.cursor()

c.execute("""delete From users;""")
c.execute("""delete From products;""")
c.execute("""delete From order_items;""")
c.execute("""delete From merchants;""")

c.execute("""CREATE TRIGGER IF NOT EXISTS create_merchant_account 
   AFTER insert ON users
   WHEN NEW.role = 'Merchant'
BEGIN
	INSERT INTO merchants (
        merchant_name,
		admin_id,
        country
	)
VALUES
	(
    NEW.full_name,
	NEW.id,
    "US"
	) ;
END;""")

c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role, address) VALUES (4, "John@Smith.com",  "John Smith","Password","Driver", "1 Washington Sq, San Jose")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role, address) VALUES (3, "Vishnu@Adda.com",  "Vishnu Adda","Password","Customer", "1 Washington Sq, San Jose")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role, address) VALUES (2, "Alexis@Chan.com", "Alexis Chan", "Password","Customer", "1 Washington Sq, San Jose")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role, address) VALUES (1, "Matthew@Le.com",  "Matthew Le", "Password","Customer", "1 Washington Sq, San Jose")""")

c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4003, "Safeway@store.com",  "Safeway","Password","Merchant")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4002, "Costco@store.com", "Costco", "Password","Merchant")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4001, "Walgreens@store.com",  "Walgreens", "Password","Merchant")""")

#c.execute("""INSERT INTO merchants (id, country, merchant_name, admin_id) VALUES(4001, "USA", "Safeway",70766)""")
#c.execute("""INSERT INTO merchants (id, country, merchant_name, admin_id) VALUES(4002, "USA", "Costco", 15521)""")
#c.execute("""INSERT INTO merchants (id, country, merchant_name, admin_id) VALUES(4003, "Canada", "Walgreens", 42142)""")

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

c.execute("""INSERT INTO order_items (order_id, user_id, product_id, quantity, order_total, merchant_id, order_hash, created_at) VALUES (1, 1, 1, 1, 2.99, 4001, "111", "Jan") """)
c.execute("""INSERT INTO order_items (order_id, user_id, product_id, quantity, order_total, merchant_id, order_hash, created_at) VALUES (2, 2, 4, 1, 2.99, 4002, "222", "Feb") """)
c.execute("""INSERT INTO order_items (order_id, user_id, product_id, quantity, order_total, merchant_id, order_hash, created_at) VALUES (3, 3, 7, 1, 2.99, 4003, "333", "Mar") """)

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
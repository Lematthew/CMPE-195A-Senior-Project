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
   WHEN NEW.role = 'Merchant' AND NEW.city NOT LIKE 'San Jose'
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

c.execute("""CREATE TRIGGER IF NOT EXISTS create_merchant_account_local
   AFTER insert ON users
   WHEN NEW.role = 'Merchant' AND NEW.city LIKE 'San Jose'
BEGIN
	INSERT INTO merchants (
        merchant_name,
		admin_id,
        country,
        is_local
	)
VALUES
	(
    NEW.full_name,
	NEW.id,
    "US",
    1
	) ;
END;""")





c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role, address) VALUES (4, "John@Smith.com",  "John Smith","Password","Driver", "1 Washington Sq, San Jose")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role, address) VALUES (3, "Vishnu@Adda.com",  "Vishnu Adda","Password","Customer", "1 Washington Sq, San Jose")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role, address) VALUES (2, "Alexis@Chan.com", "Alexis Chan", "Password","Customer", "1 Washington Sq, San Jose")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role, address) VALUES (1, "Matthew@Le.com",  "Matthew Le", "Password","Customer", "1 Washington Sq, San Jose")""")

c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4003, "Safeway@store.com",  "Safeway","Password","Merchant")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4002, "Costco@store.com", "Costco", "Password","Merchant")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4001, "Walgreens@store.com",  "Walgreens", "Password","Merchant")""")

c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4004, "rainbow@store.com",  "rainbow","Password","Merchant")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4005, "localFoods@store.com", "LocalFoods", "Password","Merchant")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4006, "missionDeli@store.com",  "Mission Deli", "Password","Merchant")""")

c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4007, "LaPaz@store.com",  "La Paz","Password","Merchant")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4008, "House Tokyo@store.com", "House Tokyo", "Password","Merchant")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4009, "missionFoods@store.com",  "Mission Foods", "Password","Merchant")""")

c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4010, "ValenciaFarmersMarket@store.com",  "Valencia Farmers Market","Password","Merchant")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4011, "SomaBurgers@store.com", "Soma Burgers", "Password","Merchant")""")
c.execute("""INSERT INTO  users (id, email, full_name, hashed_password, role) VALUES (4012, "SfTeaHouse@store.com",  "Sf Tea House", "Password","Merchant")""")

c.execute("""UPDATE merchants set image1_path = 'houseTokyo.jpeg' WHERE merchants.admin_id = '4008';""")
c.execute("""UPDATE merchants set image1_path = 'LaPaz.png' WHERE merchants.admin_id = '4007';""")
c.execute("""UPDATE merchants set image1_path = 'localfoods.jpg' WHERE merchants.admin_id = '4005';""" )
c.execute("""UPDATE merchants set image1_path = 'missionDeli.jpg' WHERE merchants.admin_id = '4006';""" )
c.execute("""UPDATE merchants set image1_path = 'rainbow.png' WHERE merchants.admin_id = '4004';""" )
c.execute("""UPDATE merchants set image1_path = 'somaburgersjpg.jpg' WHERE merchants.admin_id = '4011';""") 
c.execute("""UPDATE merchants set image1_path = 'teahouse.jpg' WHERE merchants.admin_id = '4012';""" )
c.execute("""UPDATE merchants set image1_path = 'valencia farmers market.png' WHERE merchants.id = '4010';""")
c.execute("""UPDATE merchants set image1_path = 'missionFoods.png' WHERE merchants.id = '4009';""")
c.execute("""UPDATE merchants set image1_path = 'safewayLogo.png' WHERE merchants.id = '4001';""")
c.execute("""UPDATE merchants set image1_path = 'costcoLogo.png' WHERE merchants.id = '4002';""")
c.execute("""UPDATE merchants set image1_path = 'Walgreens-Logo.png' WHERE merchants.id = '4003';""")

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
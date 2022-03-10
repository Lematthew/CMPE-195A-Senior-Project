from datetime import datetime
import sqlite3

conn = sqlite3.connect("GrocerBrochure.db")

#create a cursor
c = conn.cursor()

c.execute("""INSERT INTO users VALUES (4, "Merchant@Merchant.com",  "Merchant", "Dog")""")
c.execute("""INSERT INTO users VALUES (3, "Vishnu@Adda.com",  "Vishnu Adda","Password")""")
c.execute("""INSERT INTO users VALUES (2, "Alexis@Chan.com", "Alexis Chan", "Password")""")
c.execute("""INSERT INTO users VALUES (1, "Matthew@Le.com",  "Matthew Le", "Password")""")

c.execute("""INSERT INTO products VALUES (1,4,"Dog", "A good boy",50, null)""")
c.execute("""INSERT INTO products VALUES (2,4,"Apples", "Fresh Apples grown in Fremont",100, null)""")
c.execute("""INSERT INTO products VALUES (3,4,"Oranges", "Fresh Oranges grown in San Franciso",90, null)""")
c.execute("""INSERT INTO products VALUES (4,4,"Grapes", "Fresh Grapes grown in San Jose",500, null)""")
c.execute("""INSERT INTO products VALUES (5,4,"Pineapples", "Fresh Apples grown in Santa Cruz",1000, null)""")

c.execute("""INSERT INTO orders VALUES (1,70766,1,500)""")

c.execute("""INSERT INTO order_items VALUES (1,70766,2,4)""")
c.execute("""INSERT INTO order_items VALUES (2,70766,1,2)""")

print('Finished')


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
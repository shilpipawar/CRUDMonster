use budget_db;


-- Users 
insert into  users (userName , 
    password
    ) VALUES ('admin','password');
    
insert into  users (userName , 
    password 
    ) VALUES ('johnny-D','whatever');
    
    
-- Categories
-- use budget_db;
Insert into category (name,isExpense) VALUES ('Rent', 1) ;
Insert into category (name,isExpense) VALUES ('Food', 1);
Insert into category (name,isExpense) VALUES ('Clothing', 1);
Insert into category (name,isExpense) VALUES ('Restaurants', 1);
Insert into category (name,isExpense) VALUES ('Insurance', 1);
Insert into category (name,isExpense) VALUES ('MISC', 1);


-- income
-- use budget_db;
insert into income (amount ,users_id ,category_id ,notes ,date)
				values (1000, 2, 1,'Paycheck','2018-12-01');
insert into income (amount ,users_id ,category_id ,notes ,date)
				values (1000, 2, 1,'Paycheck','2019-01-01');
insert into income (amount ,users_id ,category_id ,notes ,date)
				values (500, 1, 1,'pay','2019-01-01');


-- expense
-- use budget_db;
insert into expense (amount ,users_id ,category_name ,notes ,date)
				values (30, 2, "Food",'grocery','2018-12-31');
insert into expense (amount ,users_id ,category_name ,notes ,date)
				values (30, 2, "Food",'grocery','2019-01-03');
insert into expense (amount ,users_id ,category_name ,notes ,date)
				values (40, 2, "Restaurants",'uptown','2019-01-12');
insert into expense (amount ,users_id ,category_name ,notes ,date)
				values (10, 1, "MISC",'test','2019-01-18');
                
                
                

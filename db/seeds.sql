use budget_db;


-- Users 
insert into  users (userName , 
    password ,
    firstName ,
    lastName ) VALUES ('admin','password','super','user');
    
insert into  users (userName , 
    password ,
    firstName ,
    lastName ) VALUES ('johnD','whatever','John','Doe');
    
    
-- Categories
use budget_db;
Insert into category (name,isExpense) VALUES ('Paycheck', 0) ;
Insert into category (name,isExpense) VALUES ('Food', 1);
Insert into category (name,isExpense) VALUES ('Clothing', 1);
Insert into category (name,isExpense) VALUES ('Resturants', 1);
Insert into category (name,isExpense) VALUES ('MISC', 1);


-- income
use budget_db;
insert into income (amount ,users_id ,cateogry_id ,notes ,date)
				values (1000,2,1,'Paycheck','2018-12-01');
insert into income (amount ,users_id ,cateogry_id ,notes ,date)
				values (1000,2,1,'Paycheck','2019-01-01');
insert into income (amount ,users_id ,cateogry_id ,notes ,date)
				values (500,1,1,'pay','2019-01-01');


-- expense
use budget_db;
insert into expense (amount ,users_id ,cateogry_id ,notes ,date)
				values (30,2,2,'grocery','2018-12-31');
insert into expense (amount ,users_id ,cateogry_id ,notes ,date)
				values (30,2,2,'grocery','2019-01-03');
insert into expense (amount ,users_id ,cateogry_id ,notes ,date)
				values (40,2,4,'uptown','2019-01-12');
insert into expense (amount ,users_id ,cateogry_id ,notes ,date)
				values (10,1,5,'test','2019-01-18');
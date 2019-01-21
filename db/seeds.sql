use budget_db;


-- Users 
insert into  users (userName , password ,firstName ,lastName ) VALUES ('admin','password','super','user');
    
insert into  users (userName , password ,firstName ,lastName ) VALUES ('johnD','whatever','John','Doe');
    
    
-- Categories
use budget_db;
Insert into category (name,isExpense) VALUES ('Paycheck', 0) ;
Insert into category (name,isExpense) VALUES ('Food', 1);
Insert into category (name,isExpense) VALUES ('Clothing', 1);
Insert into category (name,isExpense) VALUES ('Resturants', 1);
Insert into category (name,isExpense) VALUES ('MISC', 1);


-- income
use budget_db;
insert into income (amount ,users_id ,category_id ,notes ,date)
				values (1000,2,1,'Paycheck','2018-12-01');
insert into income (amount ,users_id ,category_id ,notes ,date)
				values (1000,2,1,'Paycheck','2019-01-01');
insert into income (amount ,users_id ,category_id ,notes ,date)
				values (500,1,1,'pay','2019-01-01');


-- expense
use budget_db;
 insert into expense (amount ,users_id ,category_id ,notes ,date)
				values (20,1,3,'jeans','2019-01-18');                         
 insert into expense (amount ,users_id ,category_id ,notes ,date)
				values (10,1,2,'test','2019-01-18');      
insert into expense (amount ,users_id ,category_id ,notes ,date)
				values (12,1,3,'test','2019-01-19');                         
 insert into expense (amount ,users_id ,category_id ,notes ,date)
				values (15,1,4,'test','2019-01-20');                      
                
                
                
insert into expense (amount ,users_id ,category_id ,notes ,date)
				values (30,2,2,'grocery','2018-12-31');
insert into expense (amount ,users_id ,category_id ,notes ,date)
				values (12,2,5,'misc ','2019-01-13');
insert into expense (amount ,users_id ,category_id ,notes ,date)
				values (40,2,4,'uptown','2019-01-12');
insert into expense (amount ,users_id ,category_id ,notes ,date)
				values (10,1,2,'food','2019-01-18');
                

	-- months 
insert into months values (1,'Jan');
insert into months values (2,'Feb');
insert into months values (3,'Mar');
insert into months values (4,'Apr');
insert into months values (5,'May');
insert into months values (6,'Jun');
insert into months values (7,'Jul');
insert into months values (8,'Aug');
insert into months values (9,'Sept');
insert into months values (10,'Oct');
insert into months values (11,'Nov');
insert into months values (12,'Dec');
                
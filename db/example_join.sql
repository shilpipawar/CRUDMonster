-- insert into  users (userName , password ,firstName ,lastName ) VALUES ('admin','password','super','user');


-- insert into income
insert into income (amount ,users_id ,category_id ,notes ,date)
				values ();

-- insert into expense

 insert into expense (amount ,users_id ,category_id ,notes ,date)
				values ();    

select * from users; -- (cateogory) (where exepense is = 1)


use budget_db;
SELECT  distinct(B.name), SUM(A.amount)  from expense A
inner join category B on A.category_id = B.id
inner join users C on A.users_id = C.id
where C.id = '2'    AND month(date) = 1 -- where condition needs to be passed
group by B.name; 


-- for totall income 
select SUM(A.amount)  from income  A 
inner join users C on A.users_id = C.id
where C.id = '2';
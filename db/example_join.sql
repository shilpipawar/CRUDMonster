use budget_db;
SELECT  distinct(B.name), SUM(A.amount)  from expense A
inner join category B on A.category_name = B.name
inner join users C on A.users_id = C.id
where C.id = 2
group by B.name;

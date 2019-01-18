use budget_db;
SELECT  distinct(B.name), SUM(A.amount)  from expense A
inner join category B on A.category_id = B.id
inner join users C on A.users_id = C.id
where C.id = 'admin'
group by B.name
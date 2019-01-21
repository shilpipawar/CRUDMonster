DROP database if exists budget_db;

CREATE database budget_db;

use budget_db;

create table users(
	id int auto_increment primary key  not null, 
    userName varchar(100), 
    password  text -- for sha512

    
);

create table category (
	id int  auto_increment primary key  not null,
    name varchar(255) not null,
    isExpense boolean not null
);

use budget_db;

create table income (
	id int auto_increment  primary key  not null,
	amount int not null,
    users_id int not null,
    category_id int not null,
	notes text,
    date datetime not null,
    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);


create table expense (
	id int  auto_increment primary key  not null,
	amount int not null,
    users_id int not null,
    category_id int not null,
	notes text,
    date datetime not null,
    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);


create table months(
	 id int   primary key  not null,
     months varchar (10) not null
);
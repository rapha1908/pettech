create table product(
	id UUID primary key,
	name VARCHAR(255) not null,
	description TEXT,
	image_url VARCHAR(255),
	price DOUBLE precision
);

create table category(
	id SERIAL primary key,
	name VARCHAR(255) not null,
	creation_date TIMESTAMP without time zone
);

create table product_category (
	product_id UUID not NULL,
	category_id SERIAL not NULL,
	primary key (product_id,category_id),
	foreign KEY(product_id) references product (id) on delete cascade,
	foreign KEY(category_id) references category (id) on delete cascade
);


create table person (
	id bigint primary key,
	cpf varchar(11) not null,
	name varchar(100) not null,
	birth DATE not null,
	email varchar(255) not null
		
);


create table address (
	id SERIAL primary key,
	street varchar(255) not null,
	city varchar(255) not null,
	state varchar(2) not null,
	zip_code varchar(15) not null,
	person_id bigint not null,
	
	/* .. Vamos colocar a limite - O adress tem que ter a pessoa .. */ 
	CONSTRAINT fk_address_person
    FOREIGN KEY (person_id)
    REFERENCES person(id)
);

create table "user"(
	id SERIAL primary key,
	username varchar(255) not null,
	password varchar(255) not null
);

/* .. Agora tenho que linkar o usuario com a pessoa */

alter table person
	add column user_id  int unique,
	add constraint fk_user_id
	  FOREIGN KEY (user_id)
	  references "user"(id)





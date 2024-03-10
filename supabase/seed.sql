insert into
public.roles (id,name)
values
(1,'Parent'),
(2,'Teacher'),
(3,'Admin');

insert into
public.schools (id,name)
values
(1,'First School');

insert into
public.classes (id,school_id,name)
values
(1,1,'First Class');
-- (2,1, 'Second Class');

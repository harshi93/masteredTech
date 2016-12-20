                                                                                    /*Simple Select Query*/
select sID, sName, GPA from Student where GPA >3.6;

                                                                                /*Cross product based query*/
/*The distinct keyword eliminates considering duplicates*/
select distinct sName, major from Student, Apply where Student.sID = Apply.sID

select sName, GPA, decision from Student, Apply where Student.sID = Apply.sID and sizeHS <1000 and major = 'CS' and cname = 'Stanford';

select distinct College.cName from College, Apply where College.cName = Apply.cName and enrollment > 20000 and major = 'CS';

select Student.sID, sName, GPA, Apply.cName, enrollment from Student, College, Apply where Apply.sID = Student.sID and Apply.cName = College.cName;

select Student.sID, sName, GPA, Apply.cName, enrollment from Student, College, Apply where Apply.sID = Student.sID  and Apply.cName = College.cName; order by GPA desc, enrollment;

/*by default behavior of query is to show data in ascending order*/

select sID, major from Apply where major like %bio%

/*the %bio% indicates that database to find any major starting or ending with bio in their name*/

select * from Student, College;

select sID, sName, GPA, sizeHS, GPA*(sizeHS/1000) as scaledGPA

                                                                            /*Table variables and set operators*/

/*These are primarily of three types: union, intersect, except*/

select Student.sID, sName, GPA, Apply.cName, enrollment from Student, College, Apply where Apply.sID = Student.sID and Apply.cName = College.cName;

/*With table variables*/
select S.sID, sName, GPA, A.cName, enrollment from Student S, College C, Apply A where A.sID = S.sID and A.cName = C.cName;

select S1.sID, S1.sName, S1.GPA, S2.sID, S2.sName, S2.GPA from Student S1, Student S2 where S1.GPA = S2.GPA and S1.sID < S2.sID

                                                                                /*union operator*/
/*union operation by default elminates duplicates*/

/*when we want no duplicates and table to be sorted by whatever sql may want to choose as parameter for ordering */

select cName from College 
union 
select sName from Students

/*when we want no duplicates and table to be sorted using a new label */
select cName as name from College 
union 
select sName as name from Student;

/*getting same result as by query immediate above*/
select cName as name from College 
union all 
select sName as name from Students;

/*in order to guarantee same results at all times and ensuring they are sorted we use following commands*/
select cName as name from College 
union all 
select sName as name from Students; order by name;

                                                                                    /*intersect*/
/*The query shows id of students who applied to both cs and ee major at a college*/
select sID from Apply where major = 'CS' 
intersect 
select sID from Apply where major = 'EE';


/*Some databases don't support intersect operations so we need to perform  operations manually and we can do it in following way*/
select distinct A1.sID from Apply A1, Apply A2 where A1.sID = A2.sID and A1.major = A2.major = 'EE';

                                                                                    /*except operator*/
/*in order find only students applied to one program but not to another we use except operator*/
select sID from Apply where major = 'CS' 
except 
select sID from Apply where major = 'EE'

/*for db that don't support except clause*/
/*<> = symbols for not*/
select distinct A1.sID from Apply A1, Apply A2 where A1.sID = A2.sID  and A1.major = 'CS' and A2.major <> 'EE';

/*Subqueries in where clause*/
select sID, sName from Student where sID in (select sID from Apply where major = 'CS') and sID not in 
/*The or portion applies to only not in part of above query*/
(select sID from Apply where major = 'EE') or not sID in (select sID from Apply where major = 'EE');

/*Th query finds two colleges that are in same state*/
select cName, State from College C1 where exists (select * from College C2 where C2.state = C1.state and C1.cName <> C2.cName);

/*The query finds college with highest number of enrollment*/
select cName from College C1 where not exists (select * from College C2 where C2.enrollment > C1.enrollment);

/*The query finds name and GPA of students who are having highest GPA amongst all students*/
select sName, GPA from Student where GPA >= all (select GPA from Student);

/*The query finds college with highest enrollment while ensuring that are no other such colleges*/
select cName from College S1 where enrollment > all (select enrollment from College S2 where S2.cName <> S1.cName);

/*The query finds college with highest enrollment while ensuring that there is not even single college in subquery that is having enrollment highest that first college 
aka find the college with highest enrollment */
select cName from College S1 where not enrollment <= any (select enrollment from College S2 where S2.cName <> S1.cName);

/*The query finds students that have applied to CS but not to EE*/
select sID, sName from Student  where sID = any  (select sID from Apply where major ='CS') and not sID = any (select sID from Apply where major='EE');

                                                                        /*Subqueries in From and Select*/
/*abs keyword for absolute values*/

                                                                            /*Subqueries in From*/
/*Query prints students whose scaledGPA changes GPA by more than 1*/
select * from (select sID, sName, GPA, GPA*(sizeHS/1000) as scaledGPA from Student) G where abs(G.scaledGPA - GPA) > 1.0

                                                                           /*Subqueries in Select*/
/*Query pairs Colleges with the highest GPA among their applicants*/

select distinct Colleges.cName, state, GPA from College, Apply, Student where College.cName = Apply.cName and Apply.sID = Student.sID and GPA >= all 
(select GPA from Student, Apply  where Student.sID = Apply.sID and Apply.cName = College.cName);

/*nesting in select*/
select cName, state, (select distinct GPA from Apply, Student where College.cName = Apply.cName and Apply.sID = Student.sID and GPA >= all 
(select GPA from Student, Apply where Student.sID = Apply.sID and Apply.cName = College.cName)) as GPA from College;

                                                                        /*The join family of operators*/

                                                                                /*Join operation*/
/*By default join keyword refers to inner join*/

select sName, GPA from Student join Apply on Student.sID = Apply.sID  where sizeHS < 1000 and major = 'CS' and cName = 'Stanford';

/*either and or where in theory the query will be of equal preference but from practical perpective when we say and it means condition applies to sacred attributes instead 
of when we say where it means the applies to all the attributes */

select sName, GPA from Student join Apply on Student.sID = Apply.sID and sizeHS < 1000 and major = 'CS' and cName = 'Stanford';

/*Postgres supports binary join only but sql and sqlLite do offer tertiary or more join */
/*join operation on postgres*/

select Apply.sID, sName, GPA, Apply.cName, enrollment from (Apply join Student on Apply.sID = Student.sID) join College on Apply.cName = College.cName;


                                                                                 /*natural join*/
/*natural join eliminates duplicates by default and uses common attribute to perform join operation*/
select sName, GPA from Student natural join Apply where sizeHS < 1000 and major = 'CS' and cName = 'Stanford';

                                                                                    /*using*/
/*use of using is clause is suggested as when using; using clause we explicitly tell the processor to perform join on those rows but with natural join query 
processor performs join operation in the columns that are common in two tables which can be harmful in cases where we don't know about the existing columns and 
and we create a column with same name as another existing column*/

select sName, GPA from Student join Apply using(sID) where sizeHS < 1000 and major = 'CS' and cName = 'Stanford'

/*most db systems don't allow simultaneous use of on and join clause system*/
select S1.sID, S1.sName, S1.GPA, S2.sID, S2.sName, S2.GPA from Student S1 join Student S2 using(GPA) where  S1.sID < S2.sID;

                                                                                /*left outer join*/
/*the left outer join looks for entities in left schema with no match in right schema
when you write left join it means left outer join we can also do natural left join*/

select sName, sID, cName, major from Student left outer join Apply using(sID);

                                                                                /*right outer join*/  
/*the right outer join looks for entities in right schema with no match in left schema*/

/*performing outer join without doing outer join*/
select sName, Student.sID, cName, major from Student, Apply where Student.sID = Apply.sID
union
select sName, sID, null, null, from Student where sID not in (select sID from Apply);

/*The operation will look for entities in Apply relation with no match in the student relation*/
select sName, sID, cName, major from Student natural right outer join Apply 

/*Just for your information whenever we have unmatched tuples in left and right we relation we do a full outer join*/

select sName, sID, cName, major from Student full outer join Apply using(sID);

/*another way of doing full outer join is to do left outer join right outer join and then do union of the two; union will help usget rid of duplicates*/

select sName, Student.sID, cName, major from Student, Apply where Student.sID = Apply.sID
union
select sName, sID, null, null from Student where sID not in (select sID from Apply)
union 
select null, sID, cName, major from Apply where sID not in (select sID from Student)


                                                                        /*Commutivity and Associativity*/
                                                                                /*Commutivity
says if you do (A op B) = (B op A) most of the join or cross product performed either in  sql or relational algebra are commutative with one 
exception being left outer join and right outer join*/

for example
create table T1(A int, B int);
create table T1(B int, C int);
create table T1(A int, C int);
insert into T1(1,2);
insert into T1(2,3);
insert into T1(4,5);

select A,B,C
from (T1 natural full outer join T2) natural full outer join T3;

select A,B,C
from T1 natural full outer join (T2 natural full outer join T3);


                                                                                /*Associativity*/
/*says when you have such binary operations you can perform either of them in either order for example combining A and B and combining its result with is equivalent to combining 
B and C and combining it's result with A. It's a pretty common operation in cross product and natural join the exception again is outer join*/


                                                                                /*Aggregation*/
/*They support aritmetic operations; basic aggregation operations supported by most of the systems are min, max, avg, sum, count*/

/*Calculates average GPA from student table*/
select avg(GPA) from Student;

/*Calculates lowest GPA*/
select min(GPA) from Student where Student.sID = Apply.sID and major ='CS';

/*Calculating accurate avg when using subqueries*/
select avg(GPA) from Student where s.ID in (select sID from Apply where major ='CS');

/*Calculating number of entries*/
/*Prints colleges with enrollment greater 15000 */
select count(*) from College where enrollment > 15000;

/*Prints records from Apply relation where college name is cornell*/
select count(distinct sID) from Apply where cName = 'Cornell'

/*Students such that number of other students with same GPA is equal to number of other students with same sizeHS*/
select * from Student S1 where (select count(*) from Student S2 where S2.sID <> S1.sID and S2.GPA = S1.GPA) 
= 
(select count(*) from Student S2 where S2.sID <> S1.sID and S2.sizeHS = S1.sizeHS);

/*Amount by which average GPA of students applying to CS exceeds average GPA of students not applying to CS*/

select CS.avgGPA - NonCS.avgGPA from(select avg(GPA) as avgGPA from Student where sID in (select sID from Apply where major = 'CS') as CS,
(select avg(GPA) as avgGPA from Student where sID not in (select from Apply where major = 'CS') as nonCS);

                                                                                /*group by*/
/*the clause is only used by aggregation*/
select cName, count(*) from Apply order by cName

/*calculating total enrollment of college by state*/
select state, sum(enrollment) from College group by state 

/*calculating minimum and maximum GPA amongst applicants*/
select cName, major, min(GPA), max(GPA) from student, Apply where Student.sID = Apply.sID order by cName, major;

/*calculating minimum and maximum GPA of colleges and major*/
select max(mx-mn) from (select cName, major, min(GPA) as mn, max(GPA)as mx from Student, Apply where Student.sID = Apply.sID group by cName, major) M;

/*Calculating number of colleges applied to by each student*/
select Student.sID, count(distinct cName) from Student, Apply where Student.sID = Apply.sID group by Student.sID;

/*Query to include students who haven't applied anywhere*/
select Student.sID, count(distinct cName) from Student, Apply where Student.sID = Apply.sID group by Student.sID;
union
select sID, 0 from Student where sID not in (select sID from Apply);
/*the figure 0 is assigned to show number of colleges students who are not in the list have applied to */

                                                                            /*having clause*/
/*calculating colleges with less than 5 applicants*/
select cName from Apply group by cName having count(*) < 5;

/*version 2 of implementation*/
select distinct cName from Apply A1 where 5 > (select count(*) from Apply A2 where A2.cName = A1.cName);

/*nested aggregate*/
select major from Student, Apply where Student.sID = Apply.sID  group by major having max(GPA) < (select avg(GPA) from Student);


                                                                            /*Null values*/
select sID, sName, sizeHS from Student where GPA > 3.5 or GPA <= 3.5 or GPA is null

/*The query will print total number of records in db that are not null*/
select count(*) from Student where GPA is not null;

/*The query will only count those records that are having distinct GPA*/
select count(distinct GPA) from Student where GPA is not null;

/*point to be noted that that when counting or compairing null is not considered by default but when printing null is considered*/

/*Data Modification Statements*/
                                                                            /*Insertion*/
insert into table values('','')

/*the query inserts records into Apply relation for sIDs that are not in apply relation*/
insert into Apply select sID, Carnegie Mellon, 'CS', null from Student where sID not in (select sID from Apply);

insert into Apply select sID, Carnegie Mellon, 'CS', 'Y' from Student where sID not in (select sID from Apply where major='EE' and decision='N');

                                                                            /*Deletion*/
Delete From Table where Condition

/*The query deletes student with more than two majors*/
Delete from student where sID in (select sID, count(distinct major) from Apply group by sID having count(distinct major)>2);

/*The query deletes college from College relation which do not offer major in CS*/
Delete from College where cName not in  (select cName from Apply where major = 'CS')

                                                                            /*Update*/
Update Table Set Attr = Expression where Condition

/*Updating multiple tuples is done by separating using commas*/
/*The query updates decision, and allocates major of applicant where college name is CMU and GPA < 3.6*/
update Apply set decision = 'Y', major = 'economics' where cName ='CMU' and sID in (select sID from Student where GPA < 3.6);

/*The query updates major of student to CSE whose GPA is higher than all of those admitted for EE program*/
update Apply set major = 'CSE' where major = 'EE' and sID in(select sID from Student where GPA >= all(select GPA from Student sID in (select sID from Apply where major = 'EE')));


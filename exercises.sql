--Firts excercise
SELECT 
    DATE_FORMAT(MIN(created_at),"%M %D %D") AS earliest_date 
FROM users;

--Second excercise
SELECT *
FROM users
WHERE created_at = (SELECT MIN(created_at) AS earliest_date FROM users);

--Third excercise
SELECT 
    MONTHNAME(created_at) AS month_joined, 
    COUNT(*) AS total 
FROM users GROUP BY month_joined
ORDER BY total DESC;

--Fourd excercise
SELECT COUNT(email) AS yahoo FROM users WHERE email LIKE '%@yahoo.com'

--Fifth excercise
SELECT CASE 
        WHEN email LIKE '%@gmail.com' THEN 'yahoo'
        WHEN email LIKE '%@yahoo.com' THEN 'gmail'
        WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
        ELSE 'other'
       END AS provider,
       COUNT(email) AS total
FROM users GROUP BY provider
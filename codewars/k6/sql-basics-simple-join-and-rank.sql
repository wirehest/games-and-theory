SELECT 
    people.*, 
    COUNT(sales.id) as sale_count, 
    RANK() OVER (ORDER BY COUNT(sales.id) DESC) AS sale_rank
FROM people
JOIN sales ON sales.people_id = people.id
GROUP BY people.id
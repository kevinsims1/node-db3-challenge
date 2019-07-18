# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
<!-- SELECT p.ProductName, c.CategoryName
from products as p
inner join categories as c
on p.CategoryID = c.CategoryID -->

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
<!-- SELECT o.OrderID, s.ShipperName
FROM Orders as o
inner join shippers as s
on o.shipperID = s.shipperID
where o.OrderDate < '1997-01-09' -->
### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
<!-- select p.productName, o.quantity
from products as p
inner join orderDetails as o on p.productId = o.productID
where o.orderID = 10251 -->
### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
<!-- select o.orderId, c.customerName, e.lastName
from orders as o
join customers as c on o.customerId = c.customerId
join employees as e on o.employeeId = e.employeeId -->
### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
<!-- select categoryName, count(category) as count
from products
inner join categories
on products.categoryId = categories.categoryId -->
### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
<!-- select orderID, sum(quantity) as ItemCount
from orderdetails
groupByOrderId -->

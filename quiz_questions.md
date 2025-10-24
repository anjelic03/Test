# Advanced Database System Quiz Questions

---

### 1. In a centralized database system, which component handles both data storage and query processing?
- a. Centralized database system
- ==b. Central database server==
- c. Application server
- d. Middleware layer

---

### 2. Which of the following best describes a client-server architecture?
- a. All processing occurs on the client side.
- ==b. Clients send requests to a server that processes and returns results.==
- c. The database is distributed across multiple clients.
- d. The server only stores the user interface components.

---

### 3. What is the main advantage of a client-server database system over a centralized system?
- a. Elimination of servers
- ==b. Distributed workload and scalability==
- c. Increased network dependency
- d. Reduced data integrity

---

### 4. In a two-tier client-server system, which layer typically handles the application logic?
- a. Storage subsystem
- ==b. Client application==
- c. Database server
- d. Middleware layer

---

### 5. The three-tier architecture separates which of the following layers?
- ==a. Application, Presentation, and Database==
- b. Query, Indexing, and Caching
- c. Server, Client, and Network
- d. User, Hardware, and Software

---

### 6. Which of the following is not a common server-system architecture?
- ==a. Flat-file server==
- b. Transaction server
- c. Data server
- d. Object server

---

### 7. A transaction server architecture is best suited for:
- ==a. Online transaction processing (OLTP)==
- b. Transaction
- c. Static file storage
- d. Batch reporting systems

---

### 8. In a data-server architecture, how are queries typically processed?
- a. Queries are split equally between client and server.
- b. Entire tables are transferred to the client.
- ==c. Clients send SQL queries to the server, and only results are returned.==
- d. Clients process all data locally.

---

### 9. Which of the following components manages query execution and optimization in most database servers?
- a. Buffer Manager
- ==b. Query Processor==
- c. Transaction Log
- d. Storage Manager

---

### 10. In a distributed database, data fragmentation refers to:
- ==a. Splitting tables into smaller pieces stored in different locations==
- b. Compressing large datasets for performance
- c. Encrypting data across nodes
- d. Combining multiple databases into one

---

### 11. Explain how data fragmentation and replication improve performance and reliability in distributed systems.

* Data fragmentation allows data to be broken into smaller parts stored near where they are needed, reducing access latency and improving performance, while replication creates redundant copies of data across multiple nodes so if one fails another can serve requests, enhancing reliability and availability.

---

### 12. Differentiate between centralized and client-server database systems in terms of scalability and maintenance.

* Centralized database systems have limited scalability and are harder to maintain due to a single point of control, while client-server database systems are more scalable and easier to maintain as tasks are distributed between servers and clients.

---

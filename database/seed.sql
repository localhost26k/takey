INSERT INTO users (email, password, role) VALUES
('seller@example.com', 'secret', 'freelancer'),
('buyer@example.com', 'secret', 'client');

INSERT INTO gigs (user_id, title, description, price) VALUES
(1, 'Logo Design', 'Professional logo design', 50.00);

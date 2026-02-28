app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM employees WHERE username=? AND password=?',
    [username, password],
    (err, results) => {
      if (results.length > 0) {
        // Record login
        db.query('INSERT INTO logins (employee_id) VALUES (?)', [results[0].id]);
        res.json({ success: true, employee: results[0] });
      } else {
        res.json({ success: false });
      }
    });
});

// Count logins
app.get('/login-count', (req, res) => {
  db.query('SELECT COUNT(*) AS total FROM logins', (err, results) => {
    res.json(results[0]);
  });
});
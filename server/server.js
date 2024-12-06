const express = require('express');
const cors = require('cors');
const pool = require('./database');

const app = express();
const port = 3000;

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('❌ Database connection error:', err);
    } else {
        console.log('✅ Database connected successfully at:', res.rows[0].now);
    }
});

app.use(cors());
app.use(express.json());

app.post('/api/features/point', async (req, res) => {
    try {
        const { coordinates } = req.body;
        const query = `
            INSERT INTO points (geom)
            VALUES (ST_SetSRID(ST_MakePoint($1, $2), 4326))
            RETURNING *;
        `;
        const result = await pool.query(query, coordinates);
        console.log('Point saved:', result.rows[0]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error saving point:', err);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/features/line', async (req, res) => {
    try {
        const { coordinates } = req.body;
        const query = `
            INSERT INTO lines (geom)
            VALUES (ST_SetSRID(ST_MakeLine(ST_GeomFromJSON($1)), 4326))
            RETURNING *;
        `;
        const result = await pool.query(query, [JSON.stringify(coordinates)]);
        console.log('Line saved:', result.rows[0]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error saving line:', err);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/features/polygon', async (req, res) => {
    try {
        const { coordinates } = req.body;
        const coordinateString = coordinates[0].map(coord =>
            `ST_MakePoint(${coord[0]}, ${coord[1]})`
        ).join(',');
       
        const query = `
            INSERT INTO polygons (geom)
            VALUES (ST_SetSRID(ST_MakePolygon(ST_MakeLine(ARRAY[${coordinateString}])), 4326))
            RETURNING *;
        `;
        const result = await pool.query(query);
        console.log('Polygon saved:', result.rows[0]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error saving polygon:', err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
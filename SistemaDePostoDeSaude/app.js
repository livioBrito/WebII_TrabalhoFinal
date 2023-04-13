const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const medicoRoutes = require('./src/routes/medicoRoutes');
const medicamentoRoutes = require('./src/routes/medicamentoRoutes');
const postoSaudeRoutes = require('./src/routes/postoSaudeRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/medicos', medicoRoutes);
app.use('/medicamentos', medicamentoRoutes);
app.use('/postos', postoSaudeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;

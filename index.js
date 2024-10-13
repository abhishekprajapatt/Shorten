const express = require('express');
const path = require('path');
const staticRouter = require('./routes/staticRouter');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const app = express();
const PORT = 8000;

connectToMongoDB('mongodb://localhost:27017/short-url').then(() =>
  console.log('Mongodb Connected')
);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/url', urlRoute);
app.use('/', staticRouter);

app.get('/url/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));

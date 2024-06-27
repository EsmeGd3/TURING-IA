const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const largeCardData = [
  { id: 1,  },
  { id: 2,  },
  { id: 3,  },
  { id: 4, },
  { id: 5,  },
  { id: 6,  },
];

const smallCardData = [
  { id: 1, title: 'Small Card 1', content: 'Content for small card 1 dhgfjksdhkjdshfsdkjfshdhfksjdh' },
  { id: 2, title: 'Small Card 2', content: 'Content for small card 2' },
  { id: 3, title: 'Small Card 3', content: 'Content for small card 3' },
  { id: 4, title: 'Small Card 4', content: 'Content for small card 4' },
];

app.get('/api/large-cards', (req, res) => {
  res.json(largeCardData);
});

app.get('/api/small-cards', (req, res) => {
  res.json(smallCardData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

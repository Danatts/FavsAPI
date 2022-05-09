const {
  createFav,
} = require('./favs.service');

/**
 * ! Route: POST api/fav
 * ! Desc: Post a new favorite item
 * ! Access: Private
 */
const handleCreateFav = async (req, res) => {
  const fav = req.body;
  try {
    await createFav(fav);
    res.status(201).json(fav);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Error' });
  }
};

module.exports = {
  handleCreateFav,
};

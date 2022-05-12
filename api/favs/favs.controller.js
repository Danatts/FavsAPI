const {
  getAllFavs,
  getFavById,
  createFav,
  deleteFavById,
  updateFavById,
} = require('./favs.service');

/**
 * ! Route: GET api/favs
 * ! Desc: Get all favorites lists
 * ! Access: Private
 */
const handleGetAllFavs = async (req, res) => {
  try {
    const response = await getAllFavs();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Error' });
  }
};

/**
 * ! Route: GET api/favs/:id
 * ! Desc: Get a single favorites list by id
 * ! Access: Private
 */
const handleGetFavById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getFavById(id);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Error' });
  }
};

/**
 * ! Route: POST api/favs
 * ! Desc: Post a new favorite list
 * ! Access: Public
 */
const handleCreateFav = async (req, res) => {
  const { body } = req;
  try {
    const response = await createFav(body);
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Error' });
  }
};

/**
 * ! Route: DELETE api/favs/:id
 * ! Desc: Delete a single favorites list by id
 * ! Access: Private
 */
const handleDeleteFavById = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteFavById(id);
    res.status(200).json({ message: 'List deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Error' });
  }
};

/**
 * ! Route: PATCH api/favs/:id
 * ! Desc: Update a single favorites list by id
 * ! Access: Private
 */
const handleUpdateFavById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const response = await updateFavById(id, body);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Error' });
  }
};

module.exports = {
  handleGetAllFavs,
  handleGetFavById,
  handleCreateFav,
  handleDeleteFavById,
  handleUpdateFavById,
};

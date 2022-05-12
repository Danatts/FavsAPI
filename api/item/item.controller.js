const {
  getFavById,
} = require('../favs/favs.service');

const {
createItem,
} = require('./item.service');

/**
 * ! Route: POST api/item/:id
 * ! Desc: Post a new item
 * ! Access: Private
 */

const handleCreateItem = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const response = await createItem({ favList: id, ...body});
    const fav = await getFavById(id);
    fav.favs.push(response);
    await fav.save()
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Error' });
  }
}

module.exports = {
  handleCreateItem,
}

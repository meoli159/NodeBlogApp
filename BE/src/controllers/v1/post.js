import { Post } from '../../models/post.js';
import '../../models/user.js';
import '../../models/comment.js';
import { User } from '../../models/user.js';
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('owner', 'name created_at');

    if (!posts.length > 0) return res.json({ message: 'There is no post!!' });
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad Request');
  }
};

export const createPost = async (req, res) => {
  try {
    const { ownerId, title, content, tags } = req.body;
    const user = await User.findById(ownerId);
    if (!user) return res.status(404).send('Please Login');
    const post = await Post.create({
      owner: user._id,
      title: title,
      content: content,
      tags: tags,
    });
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad Request');
  }
};
export const updatePost = async (req, res) => {
  const { owner, title, content, tag } = req.body;
  const { id } = req.params;
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
};

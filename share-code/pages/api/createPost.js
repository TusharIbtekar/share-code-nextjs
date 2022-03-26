import nc from 'next-connect';
import axios from 'axios';
import config from '../../utils/config';

const handler = nc();

handler.post(async (req, res) => {


  const projectId = config.projectId;
  const dataset = config.dataset;
  const tokenWithWriteAccess = process.env.SANITY_API_TOKEN;
  const slug = {
    _type: 'slug',
    current: req.body.title.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
  };
  const codeBlock = {
    _type: 'code',
    code: req.body.codeBlock,
  };
  const author = {
    _type: 'reference',
    _ref: req.body.author,
    // user: req.body.author.name
  }
  const createMutations = [
    {
      create: {
        _type: 'post',
        title: req.body.title,
        description: req.body.description,
        codeBlock: codeBlock,
        slug: slug,
        user: author,
      },
    },
  ];

  const { data } = await axios.post(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
    { mutations: createMutations },
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  );

  console.log(data);

  // const userId = data.results[0].id;
  // const user = {
  //   _id: userId,
  //   name: req.body.name,
  //   email: req.body.email,
  //   isAdmin: false,
  // };
  // const token = signToken(user);
  // res.send({ ...user, token });
});

export default handler;
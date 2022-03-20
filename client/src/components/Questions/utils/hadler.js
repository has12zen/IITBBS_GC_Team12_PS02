import { useQuery, useMutation } from "react-query";
import axios from "axios";

export const useGetDiscussion = async (key, id) => {
  const getPosts = async () => {
    const data = await axios.get(`/api/posts/${id}`);
    // console.log(data.data, "data use useGetDiscussion query");
    return { ...data.data };
  };
  const Query = await useQuery("discussion", getPosts);
  // console.log(Query, "query )");
  return Query;
};

export const useCreatePost = async (key, id, body) => {
  const createAnswer = async () => {
    const res = await axios.post(`/api/posts/`, { body });
    return { ...res.data };
  };
  const mutation = useMutation(createAnswer, {
    retry: 3,
  });
  return { ...mutation };
};

export const useEditPost = async (key, id, body) => {
  const editPost = async () => {
    const res = await axios.put(`/api/posts/${id}`, { body });
    return { ...res.data };
  };
  const mutation = useMutation(editPost, {
    retry: 3,
  });
  return { ...mutation };
};

export const useDeletePost = async (key, id) => {
  const deletePost = async () => {
    const res = await axios.delete(`/api/posts/${id}`);
    return { ...res.data };
  };
  const mutation = useMutation(deletePost, {
    retry: 3,
  });
  return { ...mutation };
};

export const useCreateVote = async (key, id, vote) => {
  //upvote true to be set in body
  const createUpvote = async () => {
    const res = await axios.post(`/api/vote/${id}`, { vote });
    return { ...res.data };
  };
  const mutation = useMutation(createUpvote, {
    retry: 3,
  });
  return { ...mutation };
};

export const useUpdateVote = async (key, id, vote) => {
  const updateVote = async () => {
    const res = await axios.put(`/api/vote/${id}`, { vote });
    return { ...res.data };
  };
  const mutation = useMutation(updateVote, {
    retry: 3,
  });
  return { ...mutation };
};

export const useDeleteVote = async (key, id, vote) => {
  const deleteVote = async () => {
    const res = await axios.delete(`/api/vote/${id}`);
    return { ...res.data };
  };
  const mutation = useMutation(deleteVote, {
    retry: 3,
  });
  return { ...mutation };
};

export const calculateVote = (votes) => {
  let upvotes = 0;
  let downvotes = 0;
  votes.forEach((vote) => {
    if (vote.upvote === true) {
      upvotes += 1;
    } else {
      downvotes += 1;
    }
  });
  return { upvotes, downvotes };
};

export const handleCreateAnswer = async (data) => {
  try {
    const res = await axios.post(`/api/posts/`, { data });
    return { ...res.data };
  } catch (err) {
    console.log(err, "create answer");
  }
};

export const handleCreateVote = async (data) => {
  try {
    const res = await axios.post(`/api/posts/`, { data });
    return { ...res.data };
  } catch (err) {
    console.log(err, "createVote");
  }
};

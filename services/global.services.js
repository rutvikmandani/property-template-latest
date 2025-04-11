import axios from "../lib/axios";

async function getAll(Url, ...params) {
  return await axios.get(Url, ...params);
}

async function create(Url, data) {
  return await axios.post(`${Url}`, data);
}

async function update(Url, params) {
  return await axios.put(`${Url}`, params);
}
async function updatePatch(Url, params) {
  return await axios.patch(`${Url}`, params);
}

async function post(Url, data) {
  return await axios.post(`${Url}`, data);
}

async function _delete(Url, data = null) {
  if (data) {
    return await axios.delete(`${Url}`, { data: data });
  } else {
    return await axios.delete(`${Url}`);
  }
}

export const globalServices = {
  getAll,
  post,
  create,
  update,
  updatePatch,
  delete: _delete,
};

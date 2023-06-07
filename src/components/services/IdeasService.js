export function getAll() {
   return fetch('http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc')
    .then( res => res.json());
}

const URL = 'https://pixabay.com/api/';
const KEY = '36527032-1dc1e86729cfcf20120d52579';

export default function fetchAPI(query, page=1) {
 return fetch (
    `${URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
 ).then(response => {
    return response.json();
 });
 
}

const searchBook = () => {
    const searchInput = document.getElementById('input-field');
    const searchText = searchInput.value;
    // console.log(searchText);
    // fetch('')
    // console.log('user data function is called');
    userData(searchText);
    searchInput.value = '';

}

const userData = data => {
    // console.log(data);
    const url = `https://openlibrary.org/search.json?q=${data}`;
    // console.log(url);
    const addDiv = document.getElementById('add-detail');
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.docs[0].title_suggest, data.docs[0].author_name, data.docs[2].publish_place, data.docs[0].first_publish_year, data.docs[0].author_name, data.docs[3].cover_i));
}
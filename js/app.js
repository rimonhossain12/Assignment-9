/* button is handler */
const searchBook = () => {
    const searchInput = document.getElementById('input-field');
    const searchText = searchInput.value;
    // error handling
    const errorContainer = document.getElementById('error-container');
    const div = document.createElement('div');
    div.classList.add('err-div');
    if (searchText === "") {
        console.log(searchText);
        div.innerHTML = `
            <h4>Empty input</h4>
        `;
        errorContainer.appendChild(div);


    }

    else {
        errorContainer.textContent = '';
        userData(searchText);
        searchInput.value = '';
    }
    // div.innerHTML = '';


}

const userData = data => {
    console.log(data);
    const url = `https://openlibrary.org/search.json?q=${data}`;
    fetch(url)
        .then(res => res.json())
        .then(data =>
            /*   console.log(data.docs[0].title_suggest, data.docs[0].author_name, data.docs[2].publish_place, data.docs[0].first_publish_year, data.docs[0].author_name, data.docs[3].cover_i) */
            loadData(data.docs[0].title_suggest, data.docs[0].author_name, data.docs[2].first_publish_year, data.docs[2].publish_place, data.docs[0].first_publish_year, data.docs[0].publish_place, data.docs[0].publish_date, data.docs[0].author_name, data.docs[3].cover_i));
}


// data see web page

const loadData = (book, writter, pulisher, firstReleased, releasePleaced, published_data, imgNo) => {
    const dataDiv = document.getElementById('load-data');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML =
        `<div class="card">
            <img height="250px" src="https://covers.openlibrary.org/b/id/${imgNo}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">BooK Name: ${book}</h5>
                    <p class="card-text">Author Name: ${writter}</p>
                    <p>First Published: ${pulisher}</p>
                    <p>First Publication: ${firstReleased}</p>
                    <p>Released Pleaced: ${releasePleaced}</p>
                    <p>Published city: ${published_data}</p>
                </div>
            </div>`;
    dataDiv.appendChild(div);

}



/* const userData = data => {
    // console.log(data);
    const url = `https://openlibrary.org/search.json?q=${data}`;
    // console.log(url);
    const addDiv = document.getElementById('add-detail');
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.docs[0].title_suggest, data.docs[0].author_name, data.docs[2].publish_place, data.docs[0].first_publish_year, data.docs[0].author_name, data.docs[3].cover_i));
} */
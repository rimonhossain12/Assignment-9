const searchButton = () => {
    const searchInput = document.getElementById('input-field')
    const searchText = searchInput.value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.docs));
}
let count = 0;
const displayData = datas => {
    const len = datas.length;
    totalBook(len);

    datas.forEach(data => {
        if (count == 4) {
            return;
        }
        else {
            // console.log(datas.title);
            // console.log('first published', data.first_publish_year);
            // console.log('year published', data.first_publish_year);
            // console.log('author name', data.author_name);
            // console.log('first published', data.publisher);
            // console.log('first published', data.cover_i);
            count++;
            loadData(data.title, data.author_name[0], data.first_publish_year, data.publisher, data.cover_i);

        }

    })
    // clear input 
    searchInput.value = '';
}

// total book found
const totalBook = len => {
    // total search result count
    const searchResutl = document.getElementById('total-book');
    const p = document.createElement('p');
    p.innerHTML = `Total search Result = ${len}`;
    searchResutl.appendChild(p);
}

const loadData = (name, writter, firstPublished, Photo, len) => {
    // show search result in the display
    const loadData = document.getElementById('load-data');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card">
            <img height="250px" src="https://covers.openlibrary.org/b/id/${Photo}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Book Name : ${name}</h5>
                    <p class="card-text">Author Name : ${writter}</p>
                    <p class="card-text">First Published : ${firstPublished}</p>
                </div>
            </div>
        `;
    loadData.append(div);

}
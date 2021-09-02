// erro handling function
document.getElementById('error-message').style.display = "none";

const searchButton = () => {
    const searchInput = document.getElementById('input-field');
    const searchText = searchInput.value;
    // clear input 
    searchInput.value = '';
    // error messages
    document.getElementById('error-message').style.display = "none";
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    if (searchText == '') {
        document.getElementById('error-message').style.display = "block";
    }
    else {
        fetch(url)
            .then(res => res.json())
            .then(data => displayData(data.docs))
            .catch(error => displayError(error));
    }
}


// erro messages 
const displayError = error => {
    document.getElementById('error-message').style.display = "block";
}

let count = 0;
const displayData = datas => {
    const len = datas.length;
    totalBook(len);

    datas.forEach(data => {
        if (count == 10) {
            return;
        }
        else {
            // console.log(datas.title);
            // console.log('first published', data.first_publish_year);
            // console.log('year published', data.first_publish_year);
            // console.log('author name', data.author_name);
            // console.log('first published', data.publisher);
            console.log('first published', data.cover_i);
            count++;
            loadData(data.title, data.author_name[0], data.first_publish_year, data.publisher, data.cover_i, data.publish_date);

        }

    })


}

// total book found
const totalBook = len => {
    // total search result count
    const searchResutl = document.getElementById('total-book');
    const p = document.createElement('p');
    p.innerHTML = `Total search Result = ${len}`;
    searchResutl.appendChild(p);
}

const loadData = (name, writter, firstPublished, Photo, len, publishedDate) => {
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
                    <p class="card-text">First Released Date : ${publishedDate}</p>
                </div>
            </div>
        `;
    loadData.append(div);
}
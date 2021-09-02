/*
    আসসালামু আলাইকুম ভাইয়া  আমি একটা বিষয় জানতে চাই যে  গুলো কোড গুলোই এই সমাধানের জন্যে  ঠিক আছে নাকি আরো কম লাইন এর কোড লিখে প্রব্লেমে টার  সমাধান করা যাবে। ধন্যবাদ এই বিষয়টা জানাতে ভুলবেন না প্লিজ
*/
// error handling function
document.getElementById('error-message').style.display = 'none';
// total search text
document.getElementById('total-result').style.display = 'none';
// button click function
const searchButton = () => {
    const searchInput = document.getElementById('input-field');
    const searchText = searchInput.value;
    // clear input 
    searchInput.value = '';
    // error messages
    document.getElementById('error-message').style.display = "none";
    // total search result count;
    document.getElementById('total-result').innerHTML = '';
    // delete previous all the data from web page
    const loadData = document.getElementById('load-data');
    loadData.textContent = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    if (searchText == '') {
        document.getElementById('error-message').style.display = "block";
        return;
    }
    else {

        fetch(url)
            .then(res => res.json())
            .then(data => displayData(data.docs));
        displaylen(searchText);
    }
}
// total search display I am displaying 10 search result bcz my internet speed is very slow.
let count = 1;
const displayData = datas => {
    count++;
    datas.forEach(data => {
        if (count == 10) {
            return;
        }
        else {
            count++;
            // totalBook(data.num_found);
            loadData(data.title, data.author_name[0], data.first_publish_year, data.cover_i, data.publisher, data.publish_date[0]);
        }
    })
}
// total book found
const displaylen = searchText => {
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => totalBook(data.num_found));

}
const totalBook = len => {
    const lngth = len;
    document.getElementById('total-result').style.display = 'block';
    document.getElementById('total-result').innerText = `total search result ${lngth}`;
}
const loadData = (name, writter, firstPublished, Photo, publishedDate) => {
    // show search result in the display
    const loadData = document.getElementById('load-data');
    const div = document.createElement('div');
    // clean display search result value
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
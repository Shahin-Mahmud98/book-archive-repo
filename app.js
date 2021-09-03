
onst inputSearch = () => {
    const searchInput = document.getElementById('searchBook');
    const bookDetail = document.getElementById('bookDetail');
    const searchInputValue = searchBook.value;
    // clear
    searchBook.value = '';

    // spinner
    document.getElementById('spinner').style.display = 'block';


    // url
    const url = ` https://openlibrary.org/search.json?q=${searchInputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => loadDisplayBookResult(data));

}
// meal db
const loadDisplayBookResult = data => {
    const divContainer = document.getElementById('divContainer');
    divContainer.textContent = '';

    /* Length */
    const result = document.getElementById('result')
    const number = data.numFound;
    result.innerText = number;

    let fullData = data.docs;

    /* Eroor messege */

    if (fullData.length === 0) {
        document.getElementById('books').innerText = 'Search Result Not Found';

    } else {
        document.getElementById('books').innerText = '';
        /* For Each Marlam */

        fullData.forEach(data => {
            /* Comment */
            // console.log(`Book Name: ${data.title} Author Name: ${data.author_name} Firtst Publish In:${data.first_publish_year} and Published By:${data.publisher}`);
            const div = document.createElement('div');
            div.classList.add('col-md-4');
            div.innerHTML = `
               <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${data.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"><span class = "fw-bold">Book Name: </span> ${data.title} </h5>
                        <p class="card-text"><span class = "fw-bold"> Author Name:</span>${data.author_name}</p>
                        <p class="card-text"><span class = "fw-bold"> Firtst Publish In: </span>${data.first_publish_year}</p>
                        <p class="card-text"><span class = "fw-bold">and Published By: </span>${data.publisher}</p>
                    </div>
                </div>
        
        
        `;

            divContainer.appendChild(div);

        });
        document.getElementById('spinner').style.display = 'none';
    }

    /* For Each Marlam */

    fullData.forEach(data => {
        /* Comment */
        // console.log(`Book Name: ${data.title} Author Name: ${data.author_name} Firtst Publish In:${data.first_publish_year} and Published By:${data.publisher}`);
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `
        <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${data.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"><span class = "fw-bold">Book Name: </span> ${data.title} </h5>
                        <p class="card-text"><span class = "fw-bold"> Author Name:</span>${data.author_name}</p>
                        <p class="card-text"><span class = "fw-bold"> Firtst Publish In: </span>${data.first_publish_year}</p>
                        <p class="card-text"><span class = "fw-bold">and Published By: </span>${data.publisher}</p>
                    </div>
                </div>
        
        
        `;

        divContainer.appendChild(div);

    });
    document.getElementById('spinner').style.display = 'none';
}
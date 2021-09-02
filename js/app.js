const searchBook = () => {
    const serachInput = document.getElementById('input-field');
    const searchText = serachInput.value;
    serachInput.value = '';
    // div for error message show browser;
    const errorDiv = document.getElementById('error-container');
    const div = document.createElement('div');
    div.classList.add('my-style');
}
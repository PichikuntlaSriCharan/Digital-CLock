const time = document.getElementById('time');
function showTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const date1 = date.getDate();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getMonth()];
    const years = date.getFullYear();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[date.getDay()];
    time.innerText = `    ${date1.toString().padStart(2, '0')}  ${month}  ${years}` + `\n${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}` + `\n${day}`;
}



setInterval(showTime, 1000);

showTime();

// let button = document.querySelector('button');
// button.innerText = 'Dark Mode';
// button.addEventListener('click', () => {
//     document.body.style.backgroundColor = (document.body.style.backgroundColor === 'black') ? 'white' : 'black';
//     button.innerText = (button.innerText === 'Dark Mode') ? 'Light Mode' : 'Dark Mode';
//     document.body.style.color = (document.body.style.color === 'white') ? 'black' : 'white';
// });
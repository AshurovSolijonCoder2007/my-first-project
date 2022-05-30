const right = document.querySelector('.right');
console.log(right)
const musicTops = document.querySelector('.musicTops');
console.log(musicTops)

musicTops.onclick = function() {
    right.style.display = 'block';
}
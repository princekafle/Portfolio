function shownavbar() {
    const sider = document.querySelector('.sidebar')
    sider.style.display = 'flex'

    const line = document.querySelector('.line')
    line.style.display = 'block'
}

const hidenavbar = () => {
    const sider = document.querySelector('.sidebar')
    sider.style.display = 'none'

    const line = document.querySelector('.line')
    line.style.display = 'none'
}


let progress = document.querySelectorAll('.progress span'),
    spans = document.querySelectorAll('.progress-title span');

progress.forEach((prog) => {
    prog.style.width = prog.dataset.width;
});

spans.forEach((span) => {
    span.style.left = span.dataset.num;
    span.style.opacity = '1';
    span.style.visibility = visible;
});

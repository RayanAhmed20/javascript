const box = document.getElementById('box')
window.addEventListener('keydown', (e) => {
    box.innerHTML = `
<div class="key">
            ${e.key === ' ' ? 'Space':e.key}
            <small>key</small>

        </div>
        <div class="key">
            ${e.keyCode}
            <small>keyCode</small>
        </div>
        <div class="key">
            ${e.code}
            <small>Code</small>
        </div>
`
})
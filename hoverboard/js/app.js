const container=document.getElementById('container');
const colors=["#007bff","#6610f2","#28a745","#e83e8c","#fd7e14","28a745","#dc3545","#fff"]

const squares=4350;

for(let i=0; i<squares;i++){
    const square=document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',()=>setColor(square))
    square.addEventListener('mouseout',()=>removecolor(square))

    container.appendChild(square)

}


function setColor(id){
const color=genRandom()
id.style.background=color;
id.style.boxShadow=`0 0 2px ${color}`;
}

function removecolor(id){
    
    id.style.background='#464646';
    id.style.boxShadow=` 0 0 2px #000`;
}
function genRandom(){
    return colors[Math.floor(Math.random() * colors.length)]
}
/* 
*Productos size responsive, máximo elementos por fila 6 solo una columna visible.
!main-produtos-1.css
*/
{
    const productos = document.getElementById('productos');
    
    const mediumBp = matchMedia('(max-width: 1024px');
    const changeSize = mql => {
        mql.matches
            ? lessElements()
            : addElements()
    }
    
    const lessElements = () => {
        for(let i=0;i<productos.children.length;i++){
            for(let j=4; j<productos.children[0].children[0].children[1].children.length;j++){
                productos.children[i].children[0].children[1].children[j].style = 'display:none';
            };
        };
    };
    
    const addElements = () =>{
        for(let i=0;i<productos.children.length;i++){
            for(let j=4; j<6;j++){
                productos.children[i].children[0].children[1].children[j].style = 'display:list-item';
            };
        };
    };
    
    mediumBp.addListener(changeSize);
    changeSize(mediumBp);
}
class Windon{
    constructor(window){
        this.windowEl = window;
    }

    window(data){
        this.windowEl.forEach(element => {
            element.style.display = 'none';
            let dataEl = element.dataset.area;
            if(data === dataEl){
                if(dataEl === 'game-area'){
                    element.style.display = 'flex';
                    stage.startGame();
                }
                
            }            
        });
    }
}
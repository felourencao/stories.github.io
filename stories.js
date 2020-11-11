class SlideStories{   //poderia ser class ou function//
   constructor (id) {      //uma class sempre começa com um constructor, dentro do () vai o argumento//
   this.slide = document.querySelector(`[data-slide="${id}"]`); //uso de `` ao inves de '' muda pra template literal// 
   this.active = 0; //primeiro slide ativo//   
   this.init(); //inicio ocorre no construction//
}
activeSlide(index){
    this.active = index;
    this.items.forEach(item => item.classList.remove('active')); //remove todos os outros itens, fora o ativo//
    this.items[index].classList.add('active'); //classe de ativo no slide inicial//
    this.thumbItems.forEach(item => item.classList.remove('active')); //remove todos os outros itens, fora o ativo//
    this.thumbItems[index].classList.add('active'); //classe de ativo no slide inicial//    
    this.autoSlide();
}
prev(){
    if(this.active > 0){
    this.activeSlide(this.active - 1); //subtrai itens totais -1, inicio 0//
    } else{
        this.activeSlide(this.items.length - 1); //cria um looping, indo pro ultimo slide//
    }
}
next (){
    if (this.active < this.items.length - 1) { //verificação, acaba a função no total -1//
    this.activeSlide(this.active + 1); //soma itens totais +1, inicio 0//
    } else{
        this.activeSlide(0); //cria um looping, voltando no slide inicial//
    }
}
addNavigation(){
    const nextBtn = this.slide.querySelector('.slide-next');
    const prevBtn = this.slide.querySelector('.slide-prev');
    nextBtn.addEventListener('click', this.next); //evento//
    prevBtn.addEventListener('click', this.prev); //evento//
}
addThumbItems(){
    this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
    this.thumbItems = Array.from(this.thumb.children); //pega os filhos do thumb (spans)//
    console.log(this.thumbItems);
}
autoSlide(){
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 2000);
}
init(){                                //iniciar configuraçoes iniciais do plugin//
    this.next = this.next.bind(this); //bind para se referir ao objeto da classe//
    this.prev = this.prev.bind(this);
    this.items = this.slide.querySelectorAll('.slide-items > *');//seleciona todos os itens da classe//  
    this.thumb = this.slide.querySelector('.slide-thumb'); //seleciona o item da classe//
    this.addThumbItems(); //inicia função relativa//
    this.activeSlide(0); //define o slide inicial, sempre 0//
    this.addNavigation(); //inicia função relativa//
}

















}
new SlideStories('slide'); //slide = id do constructor//

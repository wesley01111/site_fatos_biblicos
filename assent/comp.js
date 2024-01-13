class myTeg extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.textContent = this.getAttribute("titulo");
        componentRoot.setAttribute("class", "card");
        
        const left = document.createElement("div");
        left.setAttribute("class", "left");
       
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const title = document.createElement ("a");
        title.textContent = this.getAttribute("title");
        title.href = this.getAttribute("link");

        const noticia = document.createElement ("p");
        noticia.textContent = this.getAttribute ("noticia");


        left.appendChild(autor);
        left.appendChild(title);
        left.appendChild(noticia);

        const rigth = document.createElement("div");
        rigth.setAttribute("class","rigth");

        const foto = document.createElement("img");
        foto.src = this.getAttribute("photo") || "photos/default.png";
        foto.alt = "Foto da noticia";

        rigth.appendChild(foto);
        
        componentRoot.appendChild(left);
        componentRoot.appendChild(rigth);

        return componentRoot;
    }

    styles(){
       const style = document.createElement("style");
        style.textContent= `
        img {
            width: 300px;
         }
         a {
            font-family: sans-serif;
            font-size:20px;
            margin-top: 10px;
            text-decoration: none;
            color: black;

         }
         span {
            color: gray;
            
         }
         p {
            color: rgba(105, 105, 104, 0.699);
            margin-top: 10px;
         }
         .card {
            width: 800px;
            display: flex;
            flex-direction:row;  
         }
         .left {
            display:flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 8px;
         }
        
        `
        ;
        return style;
    }
 
}
customElements.define("my-teg", myTeg);
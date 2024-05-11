const button = document.getElementById("test")



button.addEventListener("click", async function(){



    try {
        const reponse = await fetch("https://thatsthespir.it/api")
        console.log("test", reponse)

        
        const data = await reponse.json()
        console.log("donne JSon", data)



            const section = document.createElement("section")
            const figure = document.createElement("figure")
            const blockquote = document.createElement("blockquote")
            const h1 = document.createElement("h1")
            h1.textContent = data.quote

            const figcaption = document.createElement("figcaption")
            const div = document.createElement("div")
            const img = document.createElement("img")
            img.src = data.photo
            const address = document.createElement("address")
            address.textContent = "-"
            const a = document.createElement("a")
            a.textContent = data.author
            const small = document.createElement("small")
            small.textContent = data.total_quotes







            document.body.appendChild(section)
            section.appendChild(figure)
            figure.appendChild(blockquote)
            blockquote.appendChild(h1)
            section.appendChild(figcaption)
            figcaption.appendChild(div)
            blockquote.appendChild(address)
            blockquote.appendChild(img)
            address.appendChild(a)
            a.appendChild(small)

            
        



    }catch (error) {

    
    }



})








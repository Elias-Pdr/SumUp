let preco = "0,20"
let produto = "Xbox 360"
let codCopyPaste = "00020126700014br.gov.bcb.pix01369f254de0-b1aa-4fdb-92 69-47c21c45151c0208Xbox 36052040000530398654040.205802BR5925Ana Andreia Jerusaleno Me6009Sao Paulo 62090505Sum Up6304DA4F"

for (let i = 0; i < document.querySelectorAll("#preco").length; i++) {
    document.querySelectorAll("#preco")[i].innerHTML = preco
    
}for (let i = 0; i < document.querySelectorAll("#produto").length; i++) {
    document.querySelectorAll("#produto")[i].innerHTML = produto
}
document.getElementById("codPix").value = codCopyPaste

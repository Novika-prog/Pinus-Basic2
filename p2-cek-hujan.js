function cekHujan(){
    return true
}
function cekPayung(){
    return true
}

function bawaPayung(){
    console.log("Payung diambil dan dibawa")
}

function main(){
    if(cekHujan){
        bawaPayung();
    } else (
        console.log("Payung tidak tersedia")
    )
}

main();
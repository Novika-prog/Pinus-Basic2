function lapar() {
  // user is hungry
  return true
}
function punyaUang() {
  // user has money
  return true
}

function beliMakan() {
    // Check if user is hungry
    if (lapar) {
      // Check if user has money
      if (punyaUang) {
        // Buy food
        console.log("Beli makanan");
      } else {
        // Don't buy food
        console.log("Tidak beli makanan");
      }
    } else {
      // Don't eat
      console.log("Tidak makan");
    }
  }
  
  // Call the function
  beliMakan();
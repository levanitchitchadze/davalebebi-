var weekNumber = prompt("შემოიტანე კვირის დღე(1,2,3,4,5,6,7)")
if(weekNumber == 1){
    document.write("<h1>დღეს ორშაბათია </h1>")
}else if(weekNumber == 2){
    document.write("<h1>დღეს სამშაბათია </h1>")
}else if(weekNumber == 3){
    document.write("<h1>დღეს ოთხშაბათია</h1>")
}else if(weekNumber == 4){
    document.write("<h1>დღეს ხუთშაბათია</h1>")
}else if(weekNumber == 5){
    document.write("<h1>დღეს ექვსშაბათია</h1>")
}else if(weekNumber == 6){
    document.write("<h1>დღეს შაბათია</h1>")
}else if(weekNumber == 7){
    document.write("<h1>დღეს კვირაა</h1>")
}else{
    document.write("<h1>ასეთი დღე არალი</h1>")
}

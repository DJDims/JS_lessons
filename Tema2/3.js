function areaRectangle(){
    let n1 = document.myForm.t1.value;

    let n2 = document.myForm.t2.value;
    if (!Number(n1) || !Number(n2)) {
        alert("Введите числа");
    } else {
        let s = n1*n2;
        document.myForm.result.value = s;
    }
}
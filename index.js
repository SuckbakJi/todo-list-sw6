let count=0;
document.querySelector('.ok').addEventListener('click', ()=>{
    count++;
    if(document.querySelector('.input-add').value <= 0){
        return 0;
    }
    let inputadd_val = document.querySelector('.input-add').value;
    let enter_li = document.createElement('li');
    let enter_li_label = document.createElement('label');
    let enter_ul = document.querySelector('.enter');
    let input_check = document.createElement('input');

    input_check.setAttribute('type', 'checkbox');
    input_check.setAttribute('id', 'hi'+ count);
    enter_li_label.setAttribute('for', 'hi'+ count);

    document.querySelector('.input-add').value='';
    enter_li_label.innerHTML = inputadd_val;
    enter_ul.appendChild(enter_li);
    enter_li.appendChild(enter_li_label);
    enter_li.appendChild(input_check);
})
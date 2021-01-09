const lyricsDiv = document.getElementById("lyrics")
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const input7 = document.getElementById('input7');
const span1 = document.getElementById('span-1');
const span2 = document.getElementById('span-2');
const span3 = document.getElementById('span-3');
const span4 = document.getElementById('span-4');
const span5 = document.getElementById('span-5');
const span6 = document.getElementById('span-6');
const span7 = document.getElementById('span-7');
const modal = document.getElementById("myModal");

export function spanFill(){
    const input1Text = input1.value;
    span1.textContent = input1Text;
    const input2Text = input2.value;
    span2.textContent = input2Text;
    const input3Text = input3.value;
    span3.textContent = input3Text;
    const input4Text = input4.value;
    span4.textContent = input4Text;
    const input5Text = input5.value;
    span5.textContent = input5Text;
    const input6Text = input6.value;
    span6.textContent = input6Text;
    const input7Text = input7.value;
    span7.textContent = input7Text;
}

export function visibleClass(){
    lyricsDiv.classList.add("visible")
}
export function hiddenClass(){
    lyricsDiv.classList.remove("visible")
}

export function resetInputs(){
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    input5.value = "";
    input6.value = "";
    input7.value = "";
    span1.textContent="";
    span2.textContent="";
    span3.textContent="";
    span4.textContent="";
    span5.textContent="";
    span6.textContent="";
    span7.textContent="";
}
export function showModal(){
    modal.style.display = "block";
}

export function hideModal(){
    modal.style.display = "none";
}
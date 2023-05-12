document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('.userList ul')
    const form = document.getElementsByClassName('.form');

  //delete people
    list.addEventListener('click', (e)=>{
        console.log('clicked')
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li)

        }
    })

    //adding indivuduals
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let name = document.getElementById('name').value
        let idNumber = document.getElementById('idNumber').value
        let nationality = document.getElementById('country').value

        const listItem = document.createElement("li");
        listItem.innerHTML = name + " " +idNumber + " " + nationality;

        document.getElementById("userList").appendChild(listItem);

        document.getElementById("name").value = "";
        document.getElementById("idNumber").value = "";
        document.getElementById("country").value = "";
    })

})

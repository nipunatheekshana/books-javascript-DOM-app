//DOMContentLoaded event only fiers when the dom is fully loaded so we can attache the js file in the head
document.addEventListener('DOMContentLoaded',function(){

    const list = document.querySelector('#booklist ul');

    //buble event listners 
    //delete books
    list.addEventListener('click',function(e){
        if(e.target.className=="delete"){
            const li =e.target.parentElement;
            list.removeChild(li);
        }
    });

    //add books
    //grabing form using forms and form id 
    const addForm = document.forms['add-books'];
    addForm.addEventListener('submit',function(e){
        e.preventDefault();
        //getting the value of the input
        const value = addForm.querySelector('input[type="text"]').value;

        //creating element
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const btn= document.createElement('span');

        //add content to the created elements
        btn.textContent='delete';
        bookName.textContent=value; //value is the variable we grab in line 19

        //adding class names to the created  elements
        bookName.classList.add("name");
        btn.classList.add("delete");

        //appending eliment to the structure
        li.appendChild(bookName);
        li.appendChild(btn);
        //append the created elements to the ul element created earlier
        list.appendChild(li);

        //empty the input filed
        addForm.querySelector('input[type="text"]').value="";
    });

    //hide books
    //grabing the checkbox element and storing it in a variable
    const hidebooks = document.querySelector('#hide');
    hidebooks.addEventListener('change',function(e){
        //check weather checkbox is checked
        if(hidebooks.checked){
            //setting display property to none
            list.style.display="none";
        }else{
            //setting display property to initial
            list.style.display="initial";
        }
    });


    //serch books
    const serchBox=document.querySelector('#serch-books input');
    serchBox.addEventListener('keyup',function(e){

        //getting the serch box value in lower case
        const term =serchBox.value.toLowerCase();
        const books=list.getElementsByTagName('li');

        Array.from(books).forEach(function(book){
            //getting the text content of the first element of the li tag
            const title=book.firstElementChild.textContent;
            //check if the serchbox value is in the books titles using index of
            if(title.toLowerCase().indexOf(term)!=-1){
                book.style.display='block';
            }else{
                book.style.display='none';
            }
        });
    });

    //tabbed content
    const tabs=document.querySelector('.tabs');
    const panels=document.querySelectorAll('.panel');

    tabs.addEventListener('click',function(e){
        if(e.target.tagName=='LI'){
            const targetpanel=document.querySelector(e.target.dataset.target);
            panels.forEach(function(panel){
                if(panel==targetpanel){
                    panel.classList.add('active');
                }else{
                    panel.classList.remove('active');
                }
            });
        }
    });
});

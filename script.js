    const modalopen1 = document.getElementById('modalopen1');
    const modal1 = document.getElementById('modal1');
    const backmodal1 = document.getElementById('backmodalid1');
    const modalclose1 = document.getElementById('modalclose1');

    
    const modalplus = document.getElementById('modalplus');
    const backmodal2 = document.getElementById('backmodal2'); 
    const modalclose2 = document.getElementById('modalclose2');
    const tablerows = document.querySelectorAll('#table1 tbody tr');


    modalopen1.addEventListener('click', () => {
        modal1.style.display = 'block';
        backmodal1.style.display = 'block';
    });

    modalclose1.addEventListener('click', () => {
        modal1.style.display = 'none';
        backmodal1.style.display = 'none';
    });

    
    tablerows.forEach(row => {
        row.addEventListener('click', () => {
          
            modalplus.style.display = 'block';
            backmodal2.style.display = 'block';
        });
    });

    modalclose2.addEventListener('click', () => {
        modalplus.style.display = 'none';
        backmodal2.style.display = 'none';
    });
	const searchButton = document.getElementById('searchbutton');
    const searchInput = document.getElementById('searchinput');

    searchButton.addEventListener('click', () => {
        if (searchInput.value.trim() === '') {
            alert('검색키워드를 입력하세요');
        }
    });

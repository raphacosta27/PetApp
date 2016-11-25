function adicionar()
{
    first_name = first_name.value
    
    last_name = last_name.value
    
    localStorage.setItem("first name", first_name)
    localStorage.setItem("last name", last_name)

}

function ler()
{
    var obj = localStorage.getItem(first_name.value);
    if(obj != null)
        alert(obj)
    else
        alert("O item procurado não existe.")
}

function limpar()
{
	localStorage.clear()
	alert("Limpo");
}

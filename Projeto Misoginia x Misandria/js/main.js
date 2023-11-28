function allowDrop(ev) 
{
    ev.preventDefault();
}

function drag(ev) 
{
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.effectAllowed = "copy";
}

function drop(ev) 
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var copytxt = document.createElement("h1");
    var original = document.getElementById(data);
    copytxt = original;
    ev.target.appendChild(copytxt);
}


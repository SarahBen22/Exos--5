//S.// att y a un bug 
//L.// Ne
document.write("<table border '1'>");
 document.write("<tr style=''>");

// création de la ligne
 for (i= 1; i< 11; i++)
 {

   document.write ("<th> ["+ i +"] </th>");

}

for (k = 1; k<11; k++)
{
  var colorCode= "";
  if (k%2 === 0)
  {
    colorCode ="#20B2AA";
  } else{

    colorCode = "#FEBFD2";
  }

  // document.write("<tr style='background-color:'"+ colorCode +"'>");
  document.write(`<tr style="background-color: ${colorCode}">`);



  for (j=1; j<11; j++)

  {
document.write("<td style= 'font-size:25px;'>" + j*k + " </td>");


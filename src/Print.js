import React from 'react';
const isDev = window.require('electron-is-dev');

//  this is a temporary fix as chrome has a bug where it will only let you print once
class Print extends React.Component {
    // an attempt to put the CSS in the window
    // print() {
    //     let printWindow = window.open("data:text/html;charset=utf-8,", "", ""); 

    //     printWindow.document.write("<!DOCTYPE html><html><head>");

    //     if (isDev) {
    //         let styleCSSText = document.getElementsByTagName('style')[2].innerHTML;
    //         let bootStrapCSSText = document.getElementsByTagName('style')[1].innerHTML;
    //         printWindow.document.write('<style>' + styleCSSText + bootStrapCSSText + '</style>');
    //     }
    //     else {
    //         let head = document.getElementsByTagName('head')[0];
    //         printWindow.document.write(head.innerHTML);

    //         alert(head.innerHTML);
    //     }
        
    //     printWindow.document.write("</head><body>");
    //     printWindow.document.write(document.getElementById("tableInformation").innerHTML);
    //     printWindow.document.write(document.getElementById("copyright").innerHTML);
    //     printWindow.document.write("</body></html>");
    //     printWindow.window.print();
    //     printWindow.close();
    // }

    print() {
        window.print();
    }

    render() {
        return <button type="button" className="btn btn-dark" onClick={this.print}>Print</button>;
    }
}

export default Print;

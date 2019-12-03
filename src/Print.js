import React from 'react';
import File from './File';

//  this is a temporary fix as chrome has a bug where it will only let you print once
class Print extends React.Component {
    print() {
        let styleCSSText = new File().getFileAsText('./src/style.css');
        let bootStrapCSSText = new File().getFileAsText('./node_modules/bootstrap/dist/css/bootstrap.css');
        let printWindow = window.open("data:text/html;charset=utf-8,", "", "");
        var signaturesElement = document.getElementById("signatures"); 

        printWindow.document.write("<!DOCTYPE html><html><head>");
        printWindow.document.write('<style>' + styleCSSText + bootStrapCSSText + '</style>');
        printWindow.document.write("</head><body>");
        printWindow.document.write(document.getElementById("tableInformation").innerHTML);
        printWindow.document.write(document.getElementById("copyright").innerHTML);
        printWindow.document.write("</body></html>");
        printWindow.window.print();
        printWindow.close();
    }

    render() {
        return (<button type="button" className="btn btn-dark" onClick={this.print}>Print</button>);
    }
}

export default Print;

import React from 'react';

class Signatures extends React.Component {
    render() {
        if (this.props.show)
        return (
                <div id="signatures">
                    <div className="p-2"></div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="empSignature">Employees Signature</label>
                                <input type="text" className="form-control" id="empSignature" readOnly="readonly"/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="empSigned">Signed</label>
                                <input type="text" className="form-control" id="empSigned" readOnly="readonly"/>                            
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="mgrsSignature">Managers Signature</label>
                                <input type="text" className="form-control" id="mgrsSignature" readOnly="readonly"/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="mgrsSigned">Signed</label>
                                <input type="text" className="form-control" id="mgrsSigned" readOnly="readonly"/>                            
                            </div>
                        </div>
                    </div>
                </div>
            );

            return '';
        }
    }
    
export default Signatures;
import React from 'react';

export default class QuizOptions extends React.Component{
    constructor(props){
        super(props);
        this.state={};

        this.callParentCheckOptions = this.callParentCheckOptions.bind(this);
    }
    callParentCheckOptions(){
        return this.props.checkResults(this.props.option);
    }
    render(){
        return(
            <div className="fields animated zoomIn" onClick={this.callParentCheckOptions}>
                <div className="field-block">{this.props.option}</div>
            </div>
        );
    }
}

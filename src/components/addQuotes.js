import React,{Component} from 'react';

class AddQuotes extends React.Component{
   constructor(props){
      super(props);
      this.state = props.selectedQuote;
      
   }
   handleInputChange(e){
    this.setState({
        [e.target.name]: e.target.value
      });
   }

   componentWillReceiveProps(nextProps) {
    this.setState(nextProps.selectedQuote);
   }
  
  updateQuote(e) {
    e.preventDefault();
    this.props.updateQuote(this.state);
  }

  render(){
       return (
           <main>
              <section>
                  <form className="quotesform" onSubmit={(e) => this.updateQuote(e)}>
                      <h3>{this.props.selectedQuote.id ? 'Update Quote' : 'Add Quote'}</h3>
                      <textarea 
                        rows="4"  
                        placeholder="Quote"
                        name="quoteText"
                        value={this.state.quoteText} 
                        onChange={(e) => this.handleInputChange(e)} >
                      </textarea>
                      <input 
                        type="text"
                        placeholder="Author"
                        name="authorName"
                        value={this.state.authorName} 
                        onChange={(e) => this.handleInputChange(e)} />
                      <input type="submit" value={this.props.selectedQuote.id ? 'Update' : 'Save'}/>                     
                  </form>
              </section>
           </main>
       );
   }
}

export default AddQuotes;
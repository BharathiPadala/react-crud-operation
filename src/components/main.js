import React,{Component,Fragment} from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import AddQuotes from './addQuotes';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.emptyQuote = {
            id: '',
            quoteText: '',
            authorName: '',
            likes:0
          };
          this.state = {
            quotes: props.quotes,
            selectedQuote: this.emptyQuote
          }
    }
    selectQuote(id) {
        this.setState({
          selectedQuote: this.state.quotes.find(quote => quote.id == id)
        });
    }
      
    newQuote() {
        this.setState({
          selectedQuote: this.emptyQuote
        });
    };

    updateQuote(updatedQuote) {
        debugger;
        let newQuotes;    
        // new quote
        if(updatedQuote.quoteText!=''){
        if (updatedQuote.id == '') {
          updatedQuote.id = Date.now();
          newQuotes = this.state.quotes;
          newQuotes.push(updatedQuote);      
        // updating existing quote
        } else {
          newQuotes = this.state.quotes.map(quote => {
            if (updatedQuote.id == quote.id) {
              return updatedQuote;
            } else {
              return quote;
            }
          });
        }
       } else{
         alert("Please Enter Quote...");
         return quote;
       }
       this.setState({
          quotes: newQuotes,
          selectedQuote: this.emptyQuote
        });
    }
      
    deleteQuote(id) {
        this.setState({
          quotes: this.state.quotes.filter(quote => quote.id !== id),
          selectedQuote: this.emptyQuote
        })
    }
    likeQuote(id,index){ 
    this.state.quotes[index].likes++; 
    this.forceUpdate();
    }
    render(){
        debugger;
        return(
            <main>
            <AddQuotes
              selectedQuote={this.state.selectedQuote}
              newQuote={() => this.newQuote()}
              updateQuote={(quote) => this.updateQuote(quote)}
              deleteQuote={(id) => this.deleteQuote(id)} />
            <hr/>
            <div className="container">
              {this.state.quotes.map((quote,index) =>(                 
                <Fragment key={quote.id}>
                 <div className="row">
                  <div className="quote_article">
                  <div className="quote_grid">                 
                   <blockquote>
                     <q>{quote.quoteText}</q>
                   </blockquote>
                   <p>--{quote.authorName}</p>
                  </div>
                  <div className="btn_grid">
                    <a href="#" 
                      className="btn btn-trash" 
                      onClick={() => this.deleteQuote(quote.id)}>
                      <FontAwesome.FaTrash/></a>
                    <a href="#" 
                      onClick={() => this.selectQuote(quote.id)}
                      className="btn btn-edit">
                      <FontAwesome.FaEdit/></a> 
                    <a href="#" 
                      onClick={() => this.likeQuote(quote.id,index)}
                      className="btn btn-like">
                      <FontAwesome.FaThumbsOUp/>{quote.likes>0?quote.likes:0}</a>
                  </div>
                  </div>                 
                 </div>                
                </Fragment>
              ))}
            </div>
            </main>
        );
    }
}

export default Main;